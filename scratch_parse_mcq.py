import os, glob, re, json

folder = r'd:\1. programmins\2\backend\interview app questions\MCQ Questions'
output_file = r'd:\1. programmins\2\backend\src\seed\content\mcq\advancedMcqs.ts'

files = glob.glob(os.path.join(folder, '*.md'))

out_ts = "import { CuratedMCQ } from './mcqSeedData';\n\nexport const advancedMCQs: CuratedMCQ[] = [\n"

for f in files:
    filename = os.path.basename(f)
    tech = ''
    topic = ''
    
    if 'Bank-1' in filename:
        tech = 'advanced-questions-bank-1'
        topic = 'advanced-questions-1-50'
    elif 'Bank_2' in filename:
        tech = 'advanced-questions-bank-2'
        topic = 'nodejs-advanced-1-20'
    elif 'Bank_3' in filename:
        tech = 'advanced-questions-bank-3'
        topic = 'advanced-questions-3-batch-1'
    
    content = open(f, 'r', encoding='utf-8').read()
    
    blocks = re.split(r'^##\s+\d+\.\s+', content, flags=re.MULTILINE)
    
    for block in blocks[1:]:
        lines = [l.strip() for l in block.strip().split('\n')]
        if not lines: continue
        
        question = lines[0]
        
        options = []
        correct_opt = 'A'
        answer_text = ''
        explanation = ''
        
        for line in lines[1:]:
            if line.startswith('- **A.**'): options.append({'id': 'A', 'text': line.replace('- **A.**', '').strip()})
            elif line.startswith('- **B.**'): options.append({'id': 'B', 'text': line.replace('- **B.**', '').strip()})
            elif line.startswith('- **C.**'): options.append({'id': 'C', 'text': line.replace('- **C.**', '').strip()})
            elif line.startswith('- **D.**'): options.append({'id': 'D', 'text': line.replace('- **D.**', '').strip()})
            elif line.startswith('**Answer:**'):
                match = re.search(r'\*\*Answer:\*\*\s*([A-D])\.', line)
                if match:
                    correct_opt = match.group(1)
                answer_text = line.replace('**Answer:**', '').strip()
            elif line.startswith('**Explanation:**'):
                explanation = line.replace('**Explanation:**', '').strip()
            else:
                if line and not line.startswith('- **'):
                    if explanation: explanation += ' ' + line
                    elif answer_text: answer_text += ' ' + line
        
        if len(options) == 4:
            out_ts += f"""  {{
    technologySlug: '{tech}',
    topicSlug: '{topic}',
    question: {json.dumps(question)},
    answer: {json.dumps(answer_text)},
    explanation: {json.dumps(explanation)},
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {{
      enabled: true,
      options: {json.dumps(options)},
      correctOption: '{correct_opt}'
    }}
  }},\n"""

out_ts += "\n];\n"
open(output_file, 'w', encoding='utf-8').write(out_ts)
print(f'Done!')
