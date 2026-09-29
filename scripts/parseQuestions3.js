const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../interview app questions/Advanced-question-bank-3');
const outputFile = path.join(__dirname, '../src/seed/content/advancedQuestionsBank3.ts');

function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.md'));

let allQuestions = [];
let globalIndex = 0;

for (const file of files) {
  const filePath = path.join(inputDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Split by # 1. or # 2. etc
  const blocks = content.split(/^#\s+\d+\.\s+/m).slice(1);
  
  for (const block of blocks) {
    const lines = block.split('\n');
    const titleLine = lines[0];
    const questionText = titleLine.trim();
    
    // Extract sections
    const pdfMatch = block.match(/## My PDF Answer — DO NOT CHANGE\s*([\s\S]*?)(?=## Proper Interview Answer — English|## Proper Interview Answer — Hindi|$)/);
    const engMatch = block.match(/## Proper Interview Answer — English\s*([\s\S]*?)(?=## Proper Interview Answer — Hindi|$)/);
    const hindiMatch = block.match(/## Proper Interview Answer — Hindi\s*([\s\S]*?)(?=##|$)/);
    
    const answer = pdfMatch ? pdfMatch[1].trim() : 'No PDF answer provided.';
    const explanation = engMatch ? engMatch[1].trim() : '';
    const explanationHindi = hindiMatch ? hindiMatch[1].trim() : '';
    
    // Assign topic based on index
    const batchIndex = Math.floor(globalIndex / 15);
    const topicSlug = `advanced-questions-3-batch-${batchIndex + 1}`;
    
    allQuestions.push({
      technologySlug: 'advanced-questions-bank-3',
      topicSlug: topicSlug,
      question: questionText,
      slug: generateSlug(questionText) || `adv-q3-${globalIndex}`,
      answer: answer,
      explanation: explanation,
      explanationHindi: explanationHindi,
      difficulty: 'hard',
      questionType: 'Conceptual',
      preparationLevels: ['advanced'],
      isImportant: true,
      tags: ['advanced'],
      order: (globalIndex % 15) + 1,
    });
    
    globalIndex++;
  }
}

// Generate TS output
let tsContent = `import { SeedQuestion } from '../../types/seed.types';\n\n`;
tsContent += `export const advancedQuestionsBank3Questions: SeedQuestion[] = [\n`;

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
console.log(`Successfully parsed ${allQuestions.length} questions for Advanced Bank 3.`);
