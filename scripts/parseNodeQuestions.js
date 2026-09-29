const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../interview app questions/Node js questions');
const outputFile = path.join(__dirname, '../src/seed/content/node.questions.ts');

function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.md')).sort();

let allQuestions = [];
let globalIndex = 0;

const topicSlugs = [
  'nodejs-fundamentals',
  'modules',
  'npm-packages',
  'file-system',
  'event-loop',
  'streams',
  'buffers',
  'http',
  'error-handling',
  'performance',
  'advanced-production'
];

for (const file of files) {
  const filePath = path.join(inputDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Split by ## 1. or ## 2. etc
  const blocks = content.split(/^##\s+\d+\.\s+/m).slice(1);
  
  for (const block of blocks) {
    const lines = block.split('\n');
    const titleLine = lines[0];
    const questionText = `${globalIndex + 1}. ${titleLine.trim()}`;
    
    const engMatch = block.match(/### Simple Explanation — English\s*([\s\S]*?)(?=### Simple Explanation — Hindi|$)/);
    const hindiMatch = block.match(/### Simple Explanation — Hindi\s*([\s\S]*?)(?=### Example|## |$)/);
    const exampleMatch = block.match(/### Example\s*([\s\S]*?)(?=## |$)/);
    
    let explanation = engMatch ? engMatch[1].trim() : '';
    let explanationHindi = hindiMatch ? hindiMatch[1].trim() : '';
    
    if (exampleMatch) {
      const exampleText = exampleMatch[1].trim();
      explanation += '\n\n**Example:**\n' + exampleText;
      explanationHindi += '\n\n**Example:**\n' + exampleText;
    }
    
    const topicIndex = Math.min(Math.floor(globalIndex / 13), 10);
    const topicSlug = topicSlugs[topicIndex];
    
    allQuestions.push({
      technologySlug: 'nodejs',
      topicSlug: topicSlug,
      question: questionText,
      slug: generateSlug(questionText) || `node-q-${globalIndex}`,
      answer: explanation, 
      explanation: explanation,
      explanationHindi: explanationHindi,
      difficulty: topicIndex > 8 ? 'hard' : (topicIndex > 4 ? 'medium' : 'easy'),
      questionType: 'Conceptual',
      preparationLevels: ['intermediate', 'advanced'],
      isImportant: true,
      tags: ['nodejs'],
      order: (globalIndex % 13) + 1,
    });
    
    globalIndex++;
  }
}

let tsContent = `import { SeedQuestion } from './types';\n\n`;
tsContent += `export const nodeQuestions: SeedQuestion[] = [\n`;

for (const q of allQuestions) {
  tsContent += `  {\n`;
  tsContent += `    technologySlug: '${q.technologySlug}',\n`;
  tsContent += `    topicSlug: '${q.topicSlug}',\n`;
  tsContent += `    question: \`${q.question.replace(/`/g, '\\`')}\`,\n`;
  tsContent += `    slug: '${q.slug}',\n`;
  tsContent += `    answer: \`${q.answer.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\`,\n`;
  tsContent += `    explanation: \`${q.explanation.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\`,\n`;
  tsContent += `    explanationHindi: \`${q.explanationHindi.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\`,\n`;
  tsContent += `    difficulty: '${q.difficulty}',\n`;
  tsContent += `    questionType: '${q.questionType}',\n`;
  tsContent += `    preparationLevels: ${JSON.stringify(q.preparationLevels)},\n`;
  tsContent += `    isImportant: ${q.isImportant},\n`;
  tsContent += `    tags: ${JSON.stringify(q.tags)},\n`;
  tsContent += `    order: ${q.order},\n`;
  tsContent += `  },\n`;
}

tsContent += `];\n`;

fs.writeFileSync(outputFile, tsContent);
console.log(`Successfully parsed ${allQuestions.length} questions for Node.js.`);
