const fs = require('fs');
const path = require('path');

const dir = 'd:/1. programmins/2/backend/interview app questions/1. react/my personal questions/';

const files = [
  { file: 'Question_Bank_First_50_PDF_Answers_English_Hindi.md', topicSlug: 'advanced-questions-1-50' },
  { file: 'Advance_Question_Bank_Questions_51_100_PDF_Answers_English_Hindi.md', topicSlug: 'advanced-questions-51-100' },
  { file: 'Advance_Question_Bank_Remaining_Questions_101_126_PDF_Answers_English_Hindi.md', topicSlug: 'advanced-questions-101-126' },
];

let allQuestions = [];

files.forEach(({ file, topicSlug }) => {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  const blocks = content.split('\n## ').slice(1);
  
  blocks.forEach(block => {
    // block starts with the question title, e.g., "1. Difference between..."
    const lines = block.split('\n');
    const titleLine = lines[0].trim();
    // Keep the full title including the number
    const questionText = titleLine.trim();
    
    // extract sections
    const pdfMatch = block.match(/### My PDF Answer — Verbatim Transcription\s*([\s\S]*?)(?=### Simple Explanation — English|### Simple Explanation — Hindi|$)/);
    const engMatch = block.match(/### Simple Explanation — English\s*([\s\S]*?)(?=### Simple Explanation — Hindi|$)/);
    const hindiMatch = block.match(/### Simple Explanation — Hindi\s*([\s\S]*?)(?=###|$)/);
    
    const answer = pdfMatch ? pdfMatch[1].trim() : 'No PDF answer provided.';
    const explanation = engMatch ? engMatch[1].trim() : '';
    const explanationHindi = hindiMatch ? hindiMatch[1].trim() : '';
    
    allQuestions.push({
      technologySlug: 'advanced-questions-bank-1',
      topicSlug: topicSlug,
      question: questionText,
      answer: answer,
      explanation: explanation,
      explanationHindi: explanationHindi,
      difficulty: 'hard',
      questionType: 'Conceptual',
      preparationLevels: ['advanced'],
      isImportant: true,
      tags: ['advanced', 'react', 'javascript']
    });
  });
});

const output = `import { SeedQuestion } from './types';

export const advancedQuestionsBank1Questions: SeedQuestion[] = ${JSON.stringify(allQuestions, null, 2)};
`;

fs.writeFileSync('d:/1. programmins/2/backend/src/seed/content/advancedQuestionsBank1.ts', output);
console.log('Successfully parsed ' + allQuestions.length + ' questions.');
