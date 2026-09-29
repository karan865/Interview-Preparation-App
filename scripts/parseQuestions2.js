const fs = require('fs');
const path = require('path');

const dir = 'd:/1. programmins/2/backend/interview app questions/Advanced-question-bank-2/';

const files = [
  { file: 'NodeJS_Advanced_Questions_1_20_Interview_Ready_Updated.md', topicSlug: 'nodejs-advanced-1-20' },
  { file: 'NodeJS_Advanced_Questions_21_40%20(1)_Interview_Ready_Updated.md', topicSlug: 'nodejs-advanced-21-40' },
  { file: 'NodeJS_Advanced_Questions_41_60(1)_Interview_Ready_Updated.md', topicSlug: 'nodejs-advanced-41-60' },
  { file: 'NodeJS_Advanced_Questions_61_71_Interview_Ready_Updated.md', topicSlug: 'nodejs-advanced-61-71' },
  { file: 'React_Questions_1_20_PDF_Answers_English_Hindi(1)_Interview_Ready_Updated.md', topicSlug: 'react-advanced-1-20' },
  { file: 'React_Questions_21_40_PDF_Answers_English_Hindi(1)_Interview_Ready_Updated.md', topicSlug: 'react-advanced-21-40' },
  { file: 'React_Questions_41_60_PDF_Answers_English_Hindi(1)_Interview_Ready_Updated.md', topicSlug: 'react-advanced-41-60' },
  { file: 'React_Questions_61_71_PDF_Answers_English_Hindi(1)_Interview_Ready_Updated.md', topicSlug: 'react-advanced-61-71' },
];

let allQuestions = [];

files.forEach(({ file, topicSlug }) => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  const blocks = content.split('\n## ').slice(1);
  
  blocks.forEach(block => {
    // block starts with the question title, e.g., "1. Difference between..."
    const lines = block.split('\n');
    const titleLine = lines[0].trim();
    // Keep the full title including the number
    const questionText = titleLine.trim();
    
    // extract sections
    const pdfMatch = block.match(/### My PDF Answer — Verbatim Transcription\s*([\s\S]*?)(?=### (?:Simple Explanation|Interview Answer) — English|### (?:Simple Explanation|Interview Answer) — Hindi|$)/);
    const engMatch = block.match(/### (?:Simple Explanation|Interview Answer) — English\s*([\s\S]*?)(?=### (?:Simple Explanation|Interview Answer) — Hindi|$)/);
    const hindiMatch = block.match(/### (?:Simple Explanation|Interview Answer) — Hindi\s*([\s\S]*?)(?=###|$)/);
    
    const answer = pdfMatch ? pdfMatch[1].trim() : 'No PDF answer provided.';
    const explanation = engMatch ? engMatch[1].trim() : '';
    const explanationHindi = hindiMatch ? hindiMatch[1].trim() : '';
    
    let tags = ['advanced'];
    if (topicSlug.includes('nodejs')) tags.push('nodejs');
    if (topicSlug.includes('react')) tags.push('react');

    allQuestions.push({
      technologySlug: 'advanced-questions-bank-2',
      topicSlug: topicSlug,
      question: questionText,
      answer: answer,
      explanation: explanation,
      explanationHindi: explanationHindi,
      difficulty: 'hard',
      questionType: 'Conceptual',
      preparationLevels: ['advanced'],
      isImportant: true,
      tags: tags
    });
  });
});

const output = `import { SeedQuestion } from './types';

export const advancedQuestionsBank2Questions: SeedQuestion[] = ${JSON.stringify(allQuestions, null, 2)};
`;

fs.writeFileSync('d:/1. programmins/2/backend/src/seed/content/advancedQuestionsBank2.ts', output);
console.log('Successfully parsed ' + allQuestions.length + ' questions.');
