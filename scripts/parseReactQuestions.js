const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../interview app questions/react questions');
const outputFile = path.join(__dirname, '../src/seed/content/react.questions.ts');

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
  'react-fundamentals',
  'components-jsx',
  'props-state',
  'forms',
  'hooks',
  'context-api',
  'rendering',
  'performance',
  'state-management',
  'advanced-react'
];

for (const file of files) {
  const filePath = path.join(inputDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  const blocks = content.split(/^##\s+\d+\.\s+/m).slice(1);
  
  for (const block of blocks) {
    const lines = block.split('\n');
    const titleLine = lines[0];
    const questionText = `${globalIndex + 1}. ${titleLine.trim()}`;
    
    const engMatch = block.match(/### Simple Explanation — English\s*([\s\S]*?)(?=### Simple Explanation — Hindi|$)/);
    const hindiMatch = block.match(/### Simple Explanation — Hindi\s*([\s\S]*?)(?=## |$)/);
    
    const explanation = engMatch ? engMatch[1].trim() : '';
    const explanationHindi = hindiMatch ? hindiMatch[1].trim() : '';
    
    const topicIndex = Math.min(Math.floor(globalIndex / 11), 9);
    const topicSlug = topicSlugs[topicIndex];
    
    allQuestions.push({
      technologySlug: 'react',
      topicSlug: topicSlug,
      question: questionText,
      slug: generateSlug(questionText) || `react-q-${globalIndex}`,
      answer: explanation, 
      explanation: explanation,
      explanationHindi: explanationHindi,
      difficulty: topicIndex > 5 ? 'hard' : (topicIndex > 2 ? 'medium' : 'easy'),
      questionType: 'Conceptual',
      preparationLevels: ['intermediate', 'advanced'],
      isImportant: true,
      tags: ['react'],
      order: (globalIndex % 11) + 1,
    });
    
    globalIndex++;
  }
}

let tsContent = `import { SeedQuestion } from './types';\n\n`;
tsContent += `export const reactQuestions: SeedQuestion[] = [\n`;

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
console.log(`Successfully parsed ${allQuestions.length} questions for React.`);
