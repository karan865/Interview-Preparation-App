import { SeedQuestion } from '../types';

export const sqlSelectFilteringQuestions: SeedQuestion[] = [
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What is the logical query execution order in SQL?",
    "title": "What is the logical query execution order in SQL?",
    "answer": "Logical execution order: 1. FROM/JOIN -> 2. WHERE -> 3. GROUP BY -> 4. HAVING -> 5. SELECT -> 6. DISTINCT -> 7. ORDER BY -> 8. LIMIT/OFFSET.",
    "explanation": "Although written starting with `SELECT`, SQL engines execute the query in a specific logical sequence. Because `WHERE` runs before `SELECT`, you cannot filter on column aliases defined in `SELECT` (e.g. `WHERE total_amount > 100` fails if `total_amount` is an alias). Conversely, `ORDER BY` runs after `SELECT`, which is why aliases are valid in `ORDER BY`.",
    "interviewAnswer": "Logical execution order: 1. FROM/JOIN -> 2. WHERE -> 3. GROUP BY -> 4. HAVING -> 5. SELECT -> 6. DISTINCT -> 7. ORDER BY -> 8. LIMIT/OFFSET. Although written starting with `SELECT`, SQL engines execute the query in a specific logical sequence. Because `WHERE` runs before `SELECT`, you cannot filter on column aliases defined in `SELECT` (e.g. `WHERE total_amount > 100` fails if `total_amount` is an alias). Conversely, `ORDER BY` runs after `SELECT`, which is why aliases are valid in `ORDER BY`.",
    "importantPoints": [
      "1. FROM & JOIN: Determines source tables and evaluates join conditions",
      "2. WHERE: Filters individual rows before grouping",
      "3. GROUP BY: Aggregates rows into buckets",
      "4. HAVING: Filters aggregated group buckets",
      "5. SELECT & Window Functions: Computes output expressions and projections",
      "6. DISTINCT: Eliminates duplicate rows",
      "7. ORDER BY: Sorts the final result set",
      "8. LIMIT / OFFSET: Constrains returned row slice"
    ],
    "commonMistakes": [
      "Attempting to use a column alias defined in SELECT inside the WHERE clause",
      "Using aggregate functions (like SUM or COUNT) inside the WHERE clause instead of HAVING"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "sql",
      "select-filtering",
      "execution-order",
      "query-lifecycle"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- Lexical written order:\nSELECT department_id, COUNT(*) as emp_count\nFROM employees\nWHERE salary > 50000\nGROUP BY department_id\nHAVING COUNT(*) > 5\nORDER BY emp_count DESC\nLIMIT 10;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What is the danger of using 'NOT IN' with subqueries when NULL values are present?",
    "title": "What is the danger of using 'NOT IN' with subqueries when NULL values are present?",
    "answer": "If a subquery evaluated by 'NOT IN' contains even a single NULL value, the entire query returns 0 rows (empty set).",
    "explanation": "`WHERE id NOT IN (1, 2, NULL)` expands to `WHERE id != 1 AND id != 2 AND id != NULL`. In SQL 3-valued logic, `id != NULL` evaluates to UNKNOWN. Since `TRUE AND TRUE AND UNKNOWN` is UNKNOWN, the WHERE clause fails for every single row in the table, resulting in an empty result set. Solution: Use `NOT EXISTS` or filter with `WHERE id IS NOT NULL` in the subquery.",
    "interviewAnswer": "If a subquery evaluated by 'NOT IN' contains even a single NULL value, the entire query returns 0 rows (empty set). `WHERE id NOT IN (1, 2, NULL)` expands to `WHERE id != 1 AND id != 2 AND id != NULL`. In SQL 3-valued logic, `id != NULL` evaluates to UNKNOWN. Since `TRUE AND TRUE AND UNKNOWN` is UNKNOWN, the WHERE clause fails for every single row in the table, resulting in an empty result set. Solution: Use `NOT EXISTS` or filter with `WHERE id IS NOT NULL` in the subquery.",
    "importantPoints": [
      "NOT IN evaluates to UNKNOWN if subquery contains any NULL values",
      "A single NULL destroys the entire outer query result, returning empty set",
      "NOT EXISTS handles NULLs safely without returning empty sets",
      "Always prefer `NOT EXISTS` over `NOT IN` for subquery exclusion"
    ],
    "commonMistakes": [
      "Using NOT IN against an untrusted nullable foreign key column, producing silent zero-row bugs"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "tags": [
      "sql",
      "select-filtering",
      "null",
      "not-in",
      "not-exists",
      "troubleshooting"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- DANGEROUS: Returns 0 rows if any inactive_user has NULL id!\nSELECT * FROM users \nWHERE id NOT IN (SELECT user_id FROM inactive_users);\n\n-- SAFE SOLUTION 1 (NOT EXISTS):\nSELECT u.* FROM users u\nWHERE NOT EXISTS (SELECT 1 FROM inactive_users i WHERE i.user_id = u.id);\n\n-- SAFE SOLUTION 2 (Exclude NULLs):\nSELECT * FROM users \nWHERE id NOT IN (SELECT user_id FROM inactive_users WHERE user_id IS NOT NULL);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How do Searched CASE expressions and Simple CASE expressions differ in SQL?",
    "title": "How do Searched CASE expressions and Simple CASE expressions differ in SQL?",
    "answer": "Simple CASE matches an expression against discrete values (`CASE status WHEN 'A' THEN 1`); Searched CASE evaluates arbitrary boolean conditions (`CASE WHEN amount > 100 THEN ...`).",
    "explanation": "Simple CASE is concise for exact value matching. Searched CASE provides greater power, allowing ranges (`amount BETWEEN 10 AND 50`), complex boolean combinations (`AND`, `OR`), and NULL checks (`WHEN column IS NULL`).",
    "interviewAnswer": "Simple CASE matches an expression against discrete values (`CASE status WHEN 'A' THEN 1`); Searched CASE evaluates arbitrary boolean conditions (`CASE WHEN amount > 100 THEN ...`). Simple CASE is concise for exact value matching. Searched CASE provides greater power, allowing ranges (`amount BETWEEN 10 AND 50`), complex boolean combinations (`AND`, `OR`), and NULL checks (`WHEN column IS NULL`).",
    "importantPoints": [
      "Simple CASE: `CASE expr WHEN val1 THEN ...` (equality checks only)",
      "Searched CASE: `CASE WHEN condition1 THEN ...` (supports ranges, inequalities, NULLs)",
      "Evaluates top-to-bottom and returns at the first matching WHEN branch",
      "If no branch matches and ELSE is omitted, returns NULL"
    ],
    "commonMistakes": [
      "Using Simple CASE with `WHEN NULL`, which will never match because `expr = NULL` is UNKNOWN"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "tags": [
      "sql",
      "select-filtering",
      "case-expressions",
      "conditional-logic"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- Searched CASE (recommended for flexibility):\nSELECT id, price,\n  CASE \n    WHEN price >= 1000 THEN 'Premium'\n    WHEN price >= 100  THEN 'Mid-range'\n    ELSE 'Budget'\n  END AS price_tier\nFROM products;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How does the LIKE operator work with wildcards, and how do you escape literal '_' or '%' characters?",
    "title": "How does the LIKE operator work with wildcards, and how do you escape literal '_' or '%' characters?",
    "answer": "'%' matches zero or more characters; '_' matches exactly one character; use the ESCAPE clause to search for literal '%' or '_' characters.",
    "explanation": "By default, `%` and `_` are pattern metacharacters. To search for a string like 'discount_10%', define an escape character using `ESCAPE '!'` and prefix the literal characters with `!`.",
    "interviewAnswer": "'%' matches zero or more characters; '_' matches exactly one character; use the ESCAPE clause to search for literal '%' or '_' characters. By default, `%` and `_` are pattern metacharacters. To search for a string like 'discount_10%', define an escape character using `ESCAPE '!'` and prefix the literal characters with `!`.",
    "importantPoints": [
      "`%`: wildcard for 0 or more arbitrary characters",
      "`_`: wildcard for exactly 1 arbitrary character",
      "Use `ESCAPE '\\'` or `ESCAPE '!'` to search for literal wildcards",
      "Leading wildcard `LIKE '%term'` cannot use standard B-Tree indexes (triggers full table scan)"
    ],
    "commonMistakes": [
      "Writing `LIKE '%term%'` on large tables and wondering why B-Tree indexes are ignored",
      "Forgetting to escape user input that contains literal `%` or `_`"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding",
    "tags": [
      "sql",
      "select-filtering",
      "like",
      "wildcards",
      "escape"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- Escaping literal underscores and percentage signs:\nSELECT * FROM coupons \nWHERE promo_code LIKE 'SALE!_50!%%' ESCAPE '!';\n-- Matches codes starting with 'SALE_50%'"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How do you implement pagination using LIMIT and OFFSET, and why does OFFSET scale poorly on large tables?",
    "title": "How do you implement pagination using LIMIT and OFFSET, and why does OFFSET scale poorly on large ta",
    "answer": "LIMIT/OFFSET skips rows; as OFFSET grows large (e.g. OFFSET 1,000,000), the database must read and discard 1,000,000 rows, causing severe I/O lag. Keyset (cursor) pagination solves this.",
    "explanation": "With `LIMIT 20 OFFSET 500000`, the database engine scans 500,020 rows, discards the first 500,000, and returns 20 rows. As users navigate deeper, response times degrade from 5ms to several seconds. Keyset (seek-based) pagination uses `WHERE id > last_seen_id ORDER BY id ASC LIMIT 20`, leveraging B-Tree index lookup in O(log N) time regardless of page depth.",
    "interviewAnswer": "LIMIT/OFFSET skips rows; as OFFSET grows large (e.g. OFFSET 1,000,000), the database must read and discard 1,000,000 rows, causing severe I/O lag. Keyset (cursor) pagination solves this. With `LIMIT 20 OFFSET 500000`, the database engine scans 500,020 rows, discards the first 500,000, and returns 20 rows. As users navigate deeper, response times degrade from 5ms to several seconds. Keyset (seek-based) pagination uses `WHERE id > last_seen_id ORDER BY id ASC LIMIT 20`, leveraging B-Tree index lookup in O(log N) time regardless of page depth.",
    "importantPoints": [
      "OFFSET N requires scanning and discarding N rows from disk/index",
      "Performance degrades linearly O(N) as offset increases",
      "Keyset pagination: `WHERE id > :last_id ORDER BY id LIMIT :size` operates in O(1) page jumps",
      "Keyset pagination also prevents missing or duplicate rows when new records are inserted between pages"
    ],
    "commonMistakes": [
      "Using `OFFSET 100000` in high-traffic APIs or infinite scroll feeds",
      "Keyset pagination cannot jump directly to arbitrary page 50 without previous cursor"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off",
    "tags": [
      "sql",
      "select-filtering",
      "pagination",
      "limit-offset",
      "keyset-pagination",
      "performance"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- Slow offset pagination (scans 100,020 rows):\nSELECT * FROM transactions ORDER BY id LIMIT 20 OFFSET 100000;\n\n-- Fast keyset pagination (B-Tree seek directly to row 100001):\nSELECT * FROM transactions WHERE id > 100000 ORDER BY id ASC LIMIT 20;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What is the difference between WHERE and HAVING in SQL queries?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "What is the difference between WHERE and HAVING in SQL queries?: Explain the syntax, execution mecha",
    "answer": "Mastering What is the difference between WHERE and HAVING in SQL queries? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, What is the difference between WHERE and HAVING in SQL queries? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering What is the difference between WHERE and HAVING in SQL queries? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, What is the difference between WHERE and HAVING in SQL queries? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for What is the difference between WHERE and HAVING in SQL queries?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How does the DISTINCT keyword eliminate duplicates and what is its performance impact?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How does the DISTINCT keyword eliminate duplicates and what is its performance impact?: Explain the ",
    "answer": "Mastering How does the DISTINCT keyword eliminate duplicates and what is its performance impact? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How does the DISTINCT keyword eliminate duplicates and what is its performance impact? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How does the DISTINCT keyword eliminate duplicates and what is its performance impact? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How does the DISTINCT keyword eliminate duplicates and what is its performance impact? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How does the DISTINCT keyword eliminate duplicates and what is its performance impact?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What is the difference between `ORDER BY col ASC` and `ORDER BY col DESC` with NULLS FIRST / NULLS LAST?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "What is the difference between `ORDER BY col ASC` and `ORDER BY col DESC` with NULLS FIRST / NULLS L",
    "answer": "Mastering What is the difference between `ORDER BY col ASC` and `ORDER BY col DESC` with NULLS FIRST / NULLS LAST? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, What is the difference between `ORDER BY col ASC` and `ORDER BY col DESC` with NULLS FIRST / NULLS LAST? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering What is the difference between `ORDER BY col ASC` and `ORDER BY col DESC` with NULLS FIRST / NULLS LAST? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, What is the difference between `ORDER BY col ASC` and `ORDER BY col DESC` with NULLS FIRST / NULLS LAST? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for What is the difference between `ORDER BY col ASC` and `ORDER BY col DESC` with NULLS FIRST / NULLS LAST?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How does the BETWEEN operator handle boundary inclusion (is it inclusive or exclusive)?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How does the BETWEEN operator handle boundary inclusion (is it inclusive or exclusive)?: Explain the",
    "answer": "Mastering How does the BETWEEN operator handle boundary inclusion (is it inclusive or exclusive)? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How does the BETWEEN operator handle boundary inclusion (is it inclusive or exclusive)? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How does the BETWEEN operator handle boundary inclusion (is it inclusive or exclusive)? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How does the BETWEEN operator handle boundary inclusion (is it inclusive or exclusive)? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How does the BETWEEN operator handle boundary inclusion (is it inclusive or exclusive)?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What is the difference between IN and multiple OR conditions in query execution?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "What is the difference between IN and multiple OR conditions in query execution?: Explain the syntax",
    "answer": "Mastering What is the difference between IN and multiple OR conditions in query execution? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, What is the difference between IN and multiple OR conditions in query execution? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering What is the difference between IN and multiple OR conditions in query execution? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, What is the difference between IN and multiple OR conditions in query execution? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for What is the difference between IN and multiple OR conditions in query execution?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How to perform case-insensitive text matching using ILIKE, LOWER(), or collation?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How to perform case-insensitive text matching using ILIKE, LOWER(), or collation?: Explain the synta",
    "answer": "Mastering How to perform case-insensitive text matching using ILIKE, LOWER(), or collation? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How to perform case-insensitive text matching using ILIKE, LOWER(), or collation? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How to perform case-insensitive text matching using ILIKE, LOWER(), or collation? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How to perform case-insensitive text matching using ILIKE, LOWER(), or collation? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How to perform case-insensitive text matching using ILIKE, LOWER(), or collation?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What happens when you use an expression like `WHERE YEAR(created_at) = 2024` on an indexed column?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "What happens when you use an expression like `WHERE YEAR(created_at) = 2024` on an indexed column?: ",
    "answer": "Mastering What happens when you use an expression like `WHERE YEAR(created_at) = 2024` on an indexed column? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, What happens when you use an expression like `WHERE YEAR(created_at) = 2024` on an indexed column? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering What happens when you use an expression like `WHERE YEAR(created_at) = 2024` on an indexed column? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, What happens when you use an expression like `WHERE YEAR(created_at) = 2024` on an indexed column? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for What happens when you use an expression like `WHERE YEAR(created_at) = 2024` on an indexed column?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What is SARGable query design and why do functions on WHERE columns prevent index seeks?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "What is SARGable query design and why do functions on WHERE columns prevent index seeks?: Explain th",
    "answer": "Mastering What is SARGable query design and why do functions on WHERE columns prevent index seeks? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, What is SARGable query design and why do functions on WHERE columns prevent index seeks? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering What is SARGable query design and why do functions on WHERE columns prevent index seeks? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, What is SARGable query design and why do functions on WHERE columns prevent index seeks? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for What is SARGable query design and why do functions on WHERE columns prevent index seeks?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How to rewrite non-SARGable date filters into SARGable range conditions?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How to rewrite non-SARGable date filters into SARGable range conditions?: Explain the syntax, execut",
    "answer": "Mastering How to rewrite non-SARGable date filters into SARGable range conditions? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How to rewrite non-SARGable date filters into SARGable range conditions? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How to rewrite non-SARGable date filters into SARGable range conditions? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How to rewrite non-SARGable date filters into SARGable range conditions? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How to rewrite non-SARGable date filters into SARGable range conditions?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How does short-circuit evaluation work in SQL WHERE clause conditions?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How does short-circuit evaluation work in SQL WHERE clause conditions?: Explain the syntax, executio",
    "answer": "Mastering How does short-circuit evaluation work in SQL WHERE clause conditions? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How does short-circuit evaluation work in SQL WHERE clause conditions? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How does short-circuit evaluation work in SQL WHERE clause conditions? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How does short-circuit evaluation work in SQL WHERE clause conditions? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How does short-circuit evaluation work in SQL WHERE clause conditions?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What is the difference between UNION and UNION ALL?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "What is the difference between UNION and UNION ALL?: Explain the syntax, execution mechanics, and pe",
    "answer": "Mastering What is the difference between UNION and UNION ALL? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, What is the difference between UNION and UNION ALL? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering What is the difference between UNION and UNION ALL? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, What is the difference between UNION and UNION ALL? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for What is the difference between UNION and UNION ALL?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "Why is UNION ALL significantly faster than UNION?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "Why is UNION ALL significantly faster than UNION?: Explain the syntax, execution mechanics, and perf",
    "answer": "Mastering Why is UNION ALL significantly faster than UNION? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, Why is UNION ALL significantly faster than UNION? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering Why is UNION ALL significantly faster than UNION? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, Why is UNION ALL significantly faster than UNION? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for Why is UNION ALL significantly faster than UNION?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Performance",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What is the INTERSECT operator and how does it compare to an INNER JOIN?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "What is the INTERSECT operator and how does it compare to an INNER JOIN?: Explain the syntax, execut",
    "answer": "Mastering What is the INTERSECT operator and how does it compare to an INNER JOIN? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, What is the INTERSECT operator and how does it compare to an INNER JOIN? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering What is the INTERSECT operator and how does it compare to an INNER JOIN? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, What is the INTERSECT operator and how does it compare to an INNER JOIN? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for What is the INTERSECT operator and how does it compare to an INNER JOIN?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Comparison",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What is the EXCEPT / MINUS operator and how does it compare to NOT EXISTS?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "What is the EXCEPT / MINUS operator and how does it compare to NOT EXISTS?: Explain the syntax, exec",
    "answer": "Mastering What is the EXCEPT / MINUS operator and how does it compare to NOT EXISTS? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, What is the EXCEPT / MINUS operator and how does it compare to NOT EXISTS? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering What is the EXCEPT / MINUS operator and how does it compare to NOT EXISTS? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, What is the EXCEPT / MINUS operator and how does it compare to NOT EXISTS? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for What is the EXCEPT / MINUS operator and how does it compare to NOT EXISTS?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Comparison",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How to safely select random rows from a large table without using `ORDER BY RAND()`?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How to safely select random rows from a large table without using `ORDER BY RAND()`?: Explain the sy",
    "answer": "Mastering How to safely select random rows from a large table without using `ORDER BY RAND()`? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How to safely select random rows from a large table without using `ORDER BY RAND()`? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How to safely select random rows from a large table without using `ORDER BY RAND()`? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How to safely select random rows from a large table without using `ORDER BY RAND()`? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How to safely select random rows from a large table without using `ORDER BY RAND()`?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "Why does `ORDER BY RAND() LIMIT 1` cause a catastrophic full table scan and filesort on 10 million rows?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "Why does `ORDER BY RAND() LIMIT 1` cause a catastrophic full table scan and filesort on 10 million r",
    "answer": "Mastering Why does `ORDER BY RAND() LIMIT 1` cause a catastrophic full table scan and filesort on 10 million rows? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, Why does `ORDER BY RAND() LIMIT 1` cause a catastrophic full table scan and filesort on 10 million rows? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering Why does `ORDER BY RAND() LIMIT 1` cause a catastrophic full table scan and filesort on 10 million rows? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, Why does `ORDER BY RAND() LIMIT 1` cause a catastrophic full table scan and filesort on 10 million rows? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for Why does `ORDER BY RAND() LIMIT 1` cause a catastrophic full table scan and filesort on 10 million rows?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How to use `SELECT FOR UPDATE` to lock selected rows against concurrent modifications?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How to use `SELECT FOR UPDATE` to lock selected rows against concurrent modifications?: Explain the ",
    "answer": "Mastering How to use `SELECT FOR UPDATE` to lock selected rows against concurrent modifications? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How to use `SELECT FOR UPDATE` to lock selected rows against concurrent modifications? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How to use `SELECT FOR UPDATE` to lock selected rows against concurrent modifications? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How to use `SELECT FOR UPDATE` to lock selected rows against concurrent modifications? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How to use `SELECT FOR UPDATE` to lock selected rows against concurrent modifications?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What is the difference between `SELECT FOR UPDATE` and `SELECT FOR SHARE`?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "What is the difference between `SELECT FOR UPDATE` and `SELECT FOR SHARE`?: Explain the syntax, exec",
    "answer": "Mastering What is the difference between `SELECT FOR UPDATE` and `SELECT FOR SHARE`? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, What is the difference between `SELECT FOR UPDATE` and `SELECT FOR SHARE`? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering What is the difference between `SELECT FOR UPDATE` and `SELECT FOR SHARE`? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, What is the difference between `SELECT FOR UPDATE` and `SELECT FOR SHARE`? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for What is the difference between `SELECT FOR UPDATE` and `SELECT FOR SHARE`?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Comparison",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What do the SKIP LOCKED and NOWAIT clauses do in concurrent queue processing?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "What do the SKIP LOCKED and NOWAIT clauses do in concurrent queue processing?: Explain the syntax, e",
    "answer": "Mastering What do the SKIP LOCKED and NOWAIT clauses do in concurrent queue processing? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, What do the SKIP LOCKED and NOWAIT clauses do in concurrent queue processing? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering What do the SKIP LOCKED and NOWAIT clauses do in concurrent queue processing? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, What do the SKIP LOCKED and NOWAIT clauses do in concurrent queue processing? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for What do the SKIP LOCKED and NOWAIT clauses do in concurrent queue processing?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Production",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How to implement a high-throughput job queue in PostgreSQL using `SELECT ... FOR UPDATE SKIP LOCKED`?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How to implement a high-throughput job queue in PostgreSQL using `SELECT ... FOR UPDATE SKIP LOCKED`",
    "answer": "Mastering How to implement a high-throughput job queue in PostgreSQL using `SELECT ... FOR UPDATE SKIP LOCKED`? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How to implement a high-throughput job queue in PostgreSQL using `SELECT ... FOR UPDATE SKIP LOCKED`? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How to implement a high-throughput job queue in PostgreSQL using `SELECT ... FOR UPDATE SKIP LOCKED`? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How to implement a high-throughput job queue in PostgreSQL using `SELECT ... FOR UPDATE SKIP LOCKED`? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How to implement a high-throughput job queue in PostgreSQL using `SELECT ... FOR UPDATE SKIP LOCKED`?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What is the difference between sorting by column position (`ORDER BY 1, 2`) vs column names?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "What is the difference between sorting by column position (`ORDER BY 1, 2`) vs column names?: Explai",
    "answer": "Mastering What is the difference between sorting by column position (`ORDER BY 1, 2`) vs column names? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, What is the difference between sorting by column position (`ORDER BY 1, 2`) vs column names? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering What is the difference between sorting by column position (`ORDER BY 1, 2`) vs column names? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, What is the difference between sorting by column position (`ORDER BY 1, 2`) vs column names? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for What is the difference between sorting by column position (`ORDER BY 1, 2`) vs column names?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Trade-off",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How do multi-column ORDER BY clauses sort data with mixed ASC and DESC directions?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How do multi-column ORDER BY clauses sort data with mixed ASC and DESC directions?: Explain the synt",
    "answer": "Mastering How do multi-column ORDER BY clauses sort data with mixed ASC and DESC directions? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How do multi-column ORDER BY clauses sort data with mixed ASC and DESC directions? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How do multi-column ORDER BY clauses sort data with mixed ASC and DESC directions? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How do multi-column ORDER BY clauses sort data with mixed ASC and DESC directions? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How do multi-column ORDER BY clauses sort data with mixed ASC and DESC directions?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How to filter for rows where a column value matches any element in an array (PostgreSQL ANY / ALL)?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How to filter for rows where a column value matches any element in an array (PostgreSQL ANY / ALL)?:",
    "answer": "Mastering How to filter for rows where a column value matches any element in an array (PostgreSQL ANY / ALL)? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How to filter for rows where a column value matches any element in an array (PostgreSQL ANY / ALL)? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How to filter for rows where a column value matches any element in an array (PostgreSQL ANY / ALL)? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How to filter for rows where a column value matches any element in an array (PostgreSQL ANY / ALL)? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How to filter for rows where a column value matches any element in an array (PostgreSQL ANY / ALL)?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How to use the FILTER clause with aggregate functions in modern SQL (PostgreSQL/SQLite)?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How to use the FILTER clause with aggregate functions in modern SQL (PostgreSQL/SQLite)?: Explain th",
    "answer": "Mastering How to use the FILTER clause with aggregate functions in modern SQL (PostgreSQL/SQLite)? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How to use the FILTER clause with aggregate functions in modern SQL (PostgreSQL/SQLite)? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How to use the FILTER clause with aggregate functions in modern SQL (PostgreSQL/SQLite)? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How to use the FILTER clause with aggregate functions in modern SQL (PostgreSQL/SQLite)? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How to use the FILTER clause with aggregate functions in modern SQL (PostgreSQL/SQLite)?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How does SQL handle implicit type conversion / coercion in the WHERE clause (e.g. string comparing to integer)?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How does SQL handle implicit type conversion / coercion in the WHERE clause (e.g. string comparing t",
    "answer": "Mastering How does SQL handle implicit type conversion / coercion in the WHERE clause (e.g. string comparing to integer)? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How does SQL handle implicit type conversion / coercion in the WHERE clause (e.g. string comparing to integer)? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How does SQL handle implicit type conversion / coercion in the WHERE clause (e.g. string comparing to integer)? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How does SQL handle implicit type conversion / coercion in the WHERE clause (e.g. string comparing to integer)? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How does SQL handle implicit type conversion / coercion in the WHERE clause (e.g. string comparing to integer)?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "Why does implicit type conversion prevent the database from using an index?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "Why does implicit type conversion prevent the database from using an index?: Explain the syntax, exe",
    "answer": "Mastering Why does implicit type conversion prevent the database from using an index? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, Why does implicit type conversion prevent the database from using an index? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering Why does implicit type conversion prevent the database from using an index? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, Why does implicit type conversion prevent the database from using an index? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for Why does implicit type conversion prevent the database from using an index?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How to safely filter JSON fields in PostgreSQL using `->`, `->>`, and `@>` operators?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How to safely filter JSON fields in PostgreSQL using `->`, `->>`, and `@>` operators?: Explain the s",
    "answer": "Mastering How to safely filter JSON fields in PostgreSQL using `->`, `->>`, and `@>` operators? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How to safely filter JSON fields in PostgreSQL using `->`, `->>`, and `@>` operators? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How to safely filter JSON fields in PostgreSQL using `->`, `->>`, and `@>` operators? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How to safely filter JSON fields in PostgreSQL using `->`, `->>`, and `@>` operators? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How to safely filter JSON fields in PostgreSQL using `->`, `->>`, and `@>` operators?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What is the difference between `COUNT(*)`, `COUNT(1)`, and `COUNT(column_name)`?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "What is the difference between `COUNT(*)`, `COUNT(1)`, and `COUNT(column_name)`?: Explain the syntax",
    "answer": "Mastering What is the difference between `COUNT(*)`, `COUNT(1)`, and `COUNT(column_name)`? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, What is the difference between `COUNT(*)`, `COUNT(1)`, and `COUNT(column_name)`? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering What is the difference between `COUNT(*)`, `COUNT(1)`, and `COUNT(column_name)`? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, What is the difference between `COUNT(*)`, `COUNT(1)`, and `COUNT(column_name)`? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for What is the difference between `COUNT(*)`, `COUNT(1)`, and `COUNT(column_name)`?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How to select rows containing the top N items per group without window functions in legacy SQL?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How to select rows containing the top N items per group without window functions in legacy SQL?: Exp",
    "answer": "Mastering How to select rows containing the top N items per group without window functions in legacy SQL? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How to select rows containing the top N items per group without window functions in legacy SQL? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How to select rows containing the top N items per group without window functions in legacy SQL? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How to select rows containing the top N items per group without window functions in legacy SQL? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How to select rows containing the top N items per group without window functions in legacy SQL?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "How to use the `FETCH FIRST N ROWS ONLY` ANSI SQL standard syntax instead of LIMIT?: Explain the syntax, execution mechanics, and performance implications.",
    "title": "How to use the `FETCH FIRST N ROWS ONLY` ANSI SQL standard syntax instead of LIMIT?: Explain the syn",
    "answer": "Mastering How to use the `FETCH FIRST N ROWS ONLY` ANSI SQL standard syntax instead of LIMIT? is critical for writing precise, performant SQL queries and avoiding full table scans.",
    "explanation": "In database query processing, How to use the `FETCH FIRST N ROWS ONLY` ANSI SQL standard syntax instead of LIMIT? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "interviewAnswer": "Mastering How to use the `FETCH FIRST N ROWS ONLY` ANSI SQL standard syntax instead of LIMIT? is critical for writing precise, performant SQL queries and avoiding full table scans. In database query processing, How to use the `FETCH FIRST N ROWS ONLY` ANSI SQL standard syntax instead of LIMIT? governs how data rows are retrieved, evaluated, and ordered. Writing SARGable expressions, understanding execution order, and leveraging efficient filtering operators prevents unnecessary disk I/O and maintains low query latency.",
    "importantPoints": [
      "Governs filtering and result projection for How to use the `FETCH FIRST N ROWS ONLY` ANSI SQL standard syntax instead of LIMIT?",
      "Maintains SARGability to leverage B-Tree indexes effectively",
      "Avoids silent logical bugs associated with NULL evaluation",
      "Optimizes memory usage and reduces sorting/filesort overhead"
    ],
    "commonMistakes": [
      "Applying functions or type casts to indexed columns in WHERE clauses",
      "Using high-offset pagination on massive datasets"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "sql",
      "select-filtering",
      "performance",
      "queries"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "SELECT id, name FROM users WHERE created_at >= '2024-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
