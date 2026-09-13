import { SeedQuestion } from '../types';

export const sqlFundamentalsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What are the differences between DDL, DML, DCL, and TCL commands in SQL?",
    "title": "What are the differences between DDL, DML, DCL, and TCL commands in SQL?",
    "answer": "DDL defines schema structure (CREATE, ALTER, DROP); DML manipulates data rows (SELECT, INSERT, UPDATE, DELETE); DCL manages permissions (GRANT, REVOKE); TCL controls transaction boundaries (COMMIT, ROLLBACK, SAVEPOINT).",
    "explanation": "SQL is divided into sublanguages based on operational scope. DDL commands usually execute an implicit commit in relational engines (like MySQL and Oracle) and cannot be rolled back, while DML modifications are transactional and can be undone using ROLLBACK before committing.",
    "interviewAnswer": "DDL defines schema structure (CREATE, ALTER, DROP); DML manipulates data rows (SELECT, INSERT, UPDATE, DELETE); DCL manages permissions (GRANT, REVOKE); TCL controls transaction boundaries (COMMIT, ROLLBACK, SAVEPOINT). SQL is divided into sublanguages based on operational scope. DDL commands usually execute an implicit commit in relational engines (like MySQL and Oracle) and cannot be rolled back, while DML modifications are transactional and can be undone using ROLLBACK before committing.",
    "importantPoints": [
      "DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE (modifies schema)",
      "DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE (modifies data)",
      "DCL (Data Control Language): GRANT, REVOKE (modifies permissions)",
      "TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT (manages ACID transactions)"
    ],
    "commonMistakes": [
      "Confusing TRUNCATE (DDL, fast, resets identity, cannot rollback in some engines) with DELETE (DML, row-by-row, transactional)"
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
      "fundamentals",
      "ddl",
      "dml",
      "dcl",
      "tcl"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- DDL: Structure definition\nCREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100));\n\n-- DML: Data manipulation\nINSERT INTO users (id, name) VALUES (1, 'Alice');\n\n-- TCL: Transaction control\nCOMMIT;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is Three-Valued Logic (3VL) in SQL and how does NULL behave with comparison operators?",
    "title": "What is Three-Valued Logic (3VL) in SQL and how does NULL behave with comparison operators?",
    "answer": "SQL uses Three-Valued Logic: TRUE, FALSE, and UNKNOWN; comparing any value to NULL using '=' or '!=' evaluates to UNKNOWN, not TRUE or FALSE.",
    "explanation": "NULL in SQL represents the absence of data or an unknown value. Because it is unknown, `NULL = NULL` is UNKNOWN, not TRUE. In WHERE clauses, rows are only returned if the condition evaluates to TRUE (UNKNOWN is discarded like FALSE). Therefore, always use `IS NULL` or `IS NOT NULL` instead of `= NULL` or `!= NULL`.",
    "interviewAnswer": "SQL uses Three-Valued Logic: TRUE, FALSE, and UNKNOWN; comparing any value to NULL using '=' or '!=' evaluates to UNKNOWN, not TRUE or FALSE. NULL in SQL represents the absence of data or an unknown value. Because it is unknown, `NULL = NULL` is UNKNOWN, not TRUE. In WHERE clauses, rows are only returned if the condition evaluates to TRUE (UNKNOWN is discarded like FALSE). Therefore, always use `IS NULL` or `IS NOT NULL` instead of `= NULL` or `!= NULL`.",
    "importantPoints": [
      "Three truth values: TRUE, FALSE, UNKNOWN",
      "`NULL = NULL` and `NULL != NULL` both evaluate to UNKNOWN",
      "WHERE clause filters out UNKNOWN alongside FALSE",
      "Must test nullability using `IS NULL` and `IS NOT NULL`"
    ],
    "commonMistakes": [
      "Writing `WHERE column = NULL`, which returns 0 rows without throwing an error",
      "Using `NOT IN (subquery)` when the subquery returns a single NULL row (evaluates to UNKNOWN, returning empty set)"
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
      "fundamentals",
      "null",
      "three-valued-logic",
      "boolean-logic"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- WRONG: Always returns 0 rows!\nSELECT * FROM employees WHERE manager_id = NULL;\n\n-- CORRECT:\nSELECT * FROM employees WHERE manager_id IS NULL;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is the difference between CHAR, VARCHAR, and TEXT data types?",
    "title": "What is the difference between CHAR, VARCHAR, and TEXT data types?",
    "answer": "CHAR is fixed-length (space-padded to declared size); VARCHAR is variable-length up to a specified maximum; TEXT stores large, unbounded variable-length strings.",
    "explanation": "CHAR(10) always occupies 10 characters on disk regardless of input length, making it faster for fixed-length strings like country codes ('US', 'CA') or UUIDs. VARCHAR(255) only consumes bytes for the actual string length plus 1-2 prefix length bytes. TEXT is used for long paragraphs or JSON payloads, often stored off-page in overflow storage pages.",
    "interviewAnswer": "CHAR is fixed-length (space-padded to declared size); VARCHAR is variable-length up to a specified maximum; TEXT stores large, unbounded variable-length strings. CHAR(10) always occupies 10 characters on disk regardless of input length, making it faster for fixed-length strings like country codes ('US', 'CA') or UUIDs. VARCHAR(255) only consumes bytes for the actual string length plus 1-2 prefix length bytes. TEXT is used for long paragraphs or JSON payloads, often stored off-page in overflow storage pages.",
    "importantPoints": [
      "CHAR: Fixed length, right-padded with spaces, best for fixed-length codes (ISO, hashes)",
      "VARCHAR: Variable length with length limit, optimal for names, emails, titles",
      "TEXT: Large unbounded string storage, often stored out-of-row on overflow pages",
      "Index limits: Full TEXT columns cannot be indexed directly without prefix length specifications in some engines"
    ],
    "commonMistakes": [
      "Using CHAR(255) for variable text, wasting massive disk and buffer pool memory on padding",
      "Using TEXT for short fields that require B-Tree indexes"
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
      "fundamentals",
      "data-types",
      "char",
      "varchar",
      "text"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "CREATE TABLE profiles (\n  country_code CHAR(2),          -- Always 2 chars ('US', 'UK')\n  email        VARCHAR(255),      -- Variable length with upper limit\n  biography    TEXT               -- Unbounded multi-paragraph text\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is the difference between DELETE, TRUNCATE, and DROP?",
    "title": "What is the difference between DELETE, TRUNCATE, and DROP?",
    "answer": "DELETE is transactional DML that removes rows one-by-one and fires triggers; TRUNCATE is DDL that deallocates data pages quickly; DROP removes the table definition and data entirely.",
    "explanation": "DELETE removes specified rows matching a WHERE clause, logs each row deletion in write-ahead logs (WAL), fires ON DELETE triggers, and retains the table structure. TRUNCATE is a DDL command that deallocates data pages, resets auto-increment sequences, bypasses row triggers, and is drastically faster on large tables. DROP removes both the data rows and the table schema definition from the database catalog.",
    "interviewAnswer": "DELETE is transactional DML that removes rows one-by-one and fires triggers; TRUNCATE is DDL that deallocates data pages quickly; DROP removes the table definition and data entirely. DELETE removes specified rows matching a WHERE clause, logs each row deletion in write-ahead logs (WAL), fires ON DELETE triggers, and retains the table structure. TRUNCATE is a DDL command that deallocates data pages, resets auto-increment sequences, bypasses row triggers, and is drastically faster on large tables. DROP removes both the data rows and the table schema definition from the database catalog.",
    "importantPoints": [
      "DELETE: DML, supports WHERE clause, logs each row, fires triggers, can be slow on large tables",
      "TRUNCATE: DDL, removes all rows by deallocating pages, resets identity counter, cannot filter with WHERE",
      "DROP: DDL, removes table structure, indexes, triggers, and permissions completely",
      "TRUNCATE cannot be executed on tables referenced by active FOREIGN KEY constraints in MySQL"
    ],
    "commonMistakes": [
      "Running DELETE without a WHERE clause on a 50-million-row table, filling transaction logs and locking the table for hours",
      "Expecting ON DELETE triggers to fire during a TRUNCATE operation"
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
      "fundamentals",
      "delete",
      "truncate",
      "drop",
      "ddl-vs-dml"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- Row-by-row with filter (logs each row):\nDELETE FROM orders WHERE status = 'cancelled';\n\n-- High-speed whole table wipe (deallocates pages):\nTRUNCATE TABLE audit_logs;\n\n-- Total elimination of schema and data:\nDROP TABLE legacy_users;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "How do INT, BIGINT, and DECIMAL/NUMERIC differ for storing financial amounts?",
    "title": "How do INT, BIGINT, and DECIMAL/NUMERIC differ for storing financial amounts?",
    "answer": "INT and BIGINT store exact whole integers; DECIMAL/NUMERIC stores exact fixed-point numbers without binary floating-point rounding errors.",
    "explanation": "FLOAT and DOUBLE use IEEE 754 binary floating-point representations, causing rounding errors (e.g. `0.1 + 0.2 = 0.30000000000000004`), making them strictly unacceptable for monetary values. Financial systems use `DECIMAL(19, 4)` for exact fixed-point calculations or store amounts as integer cents (`BIGINT`).",
    "interviewAnswer": "INT and BIGINT store exact whole integers; DECIMAL/NUMERIC stores exact fixed-point numbers without binary floating-point rounding errors. FLOAT and DOUBLE use IEEE 754 binary floating-point representations, causing rounding errors (e.g. `0.1 + 0.2 = 0.30000000000000004`), making them strictly unacceptable for monetary values. Financial systems use `DECIMAL(19, 4)` for exact fixed-point calculations or store amounts as integer cents (`BIGINT`).",
    "importantPoints": [
      "Never use FLOAT or DOUBLE for money or currency calculations",
      "DECIMAL(M, D): M is precision (total digits), D is scale (digits after decimal)",
      "DECIMAL(19, 4) or DECIMAL(12, 2) is standard for currency in SQL",
      "Alternative: Store currency in lowest denomination (e.g. cents) as BIGINT"
    ],
    "commonMistakes": [
      "Using FLOAT for account balances, causing fractional penny accounting discrepancies",
      "Choosing INT for global primary keys, exhausting the 2.14 billion ID limit under high write volume"
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
      "fundamentals",
      "decimal",
      "bigint",
      "financial-data",
      "precision"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "CREATE TABLE accounts (\n  id BIGINT PRIMARY KEY,\n  -- Exact fixed-point: max 15 digits before decimal, 4 digits after\n  balance DECIMAL(19, 4) NOT NULL DEFAULT 0.0000\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is the difference between Primary Key, Candidate Key, and Super Key?: Explain the core concept, mechanics, and best practices.",
    "title": "What is the difference between Primary Key, Candidate Key, and Super Key?: Explain the core concept,",
    "answer": "Understanding What is the difference between Primary Key, Candidate Key, and Super Key? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is the difference between Primary Key, Candidate Key, and Super Key? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is the difference between Primary Key, Candidate Key, and Super Key? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is the difference between Primary Key, Candidate Key, and Super Key? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is the difference between Primary Key, Candidate Key, and Super Key?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is a Surrogate Key versus a Natural Key and what are the architectural trade-offs?: Explain the core concept, mechanics, and best practices.",
    "title": "What is a Surrogate Key versus a Natural Key and what are the architectural trade-offs?: Explain the",
    "answer": "Understanding What is a Surrogate Key versus a Natural Key and what are the architectural trade-offs? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is a Surrogate Key versus a Natural Key and what are the architectural trade-offs? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is a Surrogate Key versus a Natural Key and what are the architectural trade-offs? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is a Surrogate Key versus a Natural Key and what are the architectural trade-offs? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is a Surrogate Key versus a Natural Key and what are the architectural trade-offs?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is a Foreign Key constraint and what do ON DELETE CASCADE and ON DELETE SET NULL do?: Explain the core concept, mechanics, and best practices.",
    "title": "What is a Foreign Key constraint and what do ON DELETE CASCADE and ON DELETE SET NULL do?: Explain t",
    "answer": "Understanding What is a Foreign Key constraint and what do ON DELETE CASCADE and ON DELETE SET NULL do? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is a Foreign Key constraint and what do ON DELETE CASCADE and ON DELETE SET NULL do? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is a Foreign Key constraint and what do ON DELETE CASCADE and ON DELETE SET NULL do? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is a Foreign Key constraint and what do ON DELETE CASCADE and ON DELETE SET NULL do? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is a Foreign Key constraint and what do ON DELETE CASCADE and ON DELETE SET NULL do?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is the difference between TIMESTAMP and DATETIME in MySQL and PostgreSQL?: Explain the core concept, mechanics, and best practices.",
    "title": "What is the difference between TIMESTAMP and DATETIME in MySQL and PostgreSQL?: Explain the core con",
    "answer": "Understanding What is the difference between TIMESTAMP and DATETIME in MySQL and PostgreSQL? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is the difference between TIMESTAMP and DATETIME in MySQL and PostgreSQL? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is the difference between TIMESTAMP and DATETIME in MySQL and PostgreSQL? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is the difference between TIMESTAMP and DATETIME in MySQL and PostgreSQL? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is the difference between TIMESTAMP and DATETIME in MySQL and PostgreSQL?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "How does UTC timezone conversion work when storing dates in relational databases?: Explain the core concept, mechanics, and best practices.",
    "title": "How does UTC timezone conversion work when storing dates in relational databases?: Explain the core ",
    "answer": "Understanding How does UTC timezone conversion work when storing dates in relational databases? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, How does UTC timezone conversion work when storing dates in relational databases? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding How does UTC timezone conversion work when storing dates in relational databases? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, How does UTC timezone conversion work when storing dates in relational databases? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for How does UTC timezone conversion work when storing dates in relational databases?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Production",
    "tags": [
      "sql",
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is the difference between UUID v4 (random) and UUID v7 (time-ordered) as Primary Keys?: Explain the core concept, mechanics, and best practices.",
    "title": "What is the difference between UUID v4 (random) and UUID v7 (time-ordered) as Primary Keys?: Explain",
    "answer": "Understanding What is the difference between UUID v4 (random) and UUID v7 (time-ordered) as Primary Keys? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is the difference between UUID v4 (random) and UUID v7 (time-ordered) as Primary Keys? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is the difference between UUID v4 (random) and UUID v7 (time-ordered) as Primary Keys? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is the difference between UUID v4 (random) and UUID v7 (time-ordered) as Primary Keys? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is the difference between UUID v4 (random) and UUID v7 (time-ordered) as Primary Keys?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Trade-off",
    "tags": [
      "sql",
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "Why do B-Tree indexes suffer page fragmentation when using random UUIDs as Primary Keys?: Explain the core concept, mechanics, and best practices.",
    "title": "Why do B-Tree indexes suffer page fragmentation when using random UUIDs as Primary Keys?: Explain th",
    "answer": "Understanding Why do B-Tree indexes suffer page fragmentation when using random UUIDs as Primary Keys? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, Why do B-Tree indexes suffer page fragmentation when using random UUIDs as Primary Keys? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding Why do B-Tree indexes suffer page fragmentation when using random UUIDs as Primary Keys? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, Why do B-Tree indexes suffer page fragmentation when using random UUIDs as Primary Keys? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for Why do B-Tree indexes suffer page fragmentation when using random UUIDs as Primary Keys?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is the purpose of the SQL Information Schema (INFORMATION_SCHEMA)?: Explain the core concept, mechanics, and best practices.",
    "title": "What is the purpose of the SQL Information Schema (INFORMATION_SCHEMA)?: Explain the core concept, m",
    "answer": "Understanding What is the purpose of the SQL Information Schema (INFORMATION_SCHEMA)? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is the purpose of the SQL Information Schema (INFORMATION_SCHEMA)? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is the purpose of the SQL Information Schema (INFORMATION_SCHEMA)? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is the purpose of the SQL Information Schema (INFORMATION_SCHEMA)? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is the purpose of the SQL Information Schema (INFORMATION_SCHEMA)?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is the difference between a Database, a Schema, and a Catalog across PostgreSQL and MySQL?: Explain the core concept, mechanics, and best practices.",
    "title": "What is the difference between a Database, a Schema, and a Catalog across PostgreSQL and MySQL?: Exp",
    "answer": "Understanding What is the difference between a Database, a Schema, and a Catalog across PostgreSQL and MySQL? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is the difference between a Database, a Schema, and a Catalog across PostgreSQL and MySQL? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is the difference between a Database, a Schema, and a Catalog across PostgreSQL and MySQL? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is the difference between a Database, a Schema, and a Catalog across PostgreSQL and MySQL? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is the difference between a Database, a Schema, and a Catalog across PostgreSQL and MySQL?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "How does collation and character set (e.g. utf8mb4 vs utf8) affect sorting and storage?: Explain the core concept, mechanics, and best practices.",
    "title": "How does collation and character set (e.g. utf8mb4 vs utf8) affect sorting and storage?: Explain the",
    "answer": "Understanding How does collation and character set (e.g. utf8mb4 vs utf8) affect sorting and storage? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, How does collation and character set (e.g. utf8mb4 vs utf8) affect sorting and storage? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding How does collation and character set (e.g. utf8mb4 vs utf8) affect sorting and storage? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, How does collation and character set (e.g. utf8mb4 vs utf8) affect sorting and storage? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for How does collation and character set (e.g. utf8mb4 vs utf8) affect sorting and storage?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is the purpose of the COALESCE function and how does it evaluate expressions?: Explain the core concept, mechanics, and best practices.",
    "title": "What is the purpose of the COALESCE function and how does it evaluate expressions?: Explain the core",
    "answer": "Understanding What is the purpose of the COALESCE function and how does it evaluate expressions? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is the purpose of the COALESCE function and how does it evaluate expressions? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is the purpose of the COALESCE function and how does it evaluate expressions? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is the purpose of the COALESCE function and how does it evaluate expressions? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is the purpose of the COALESCE function and how does it evaluate expressions?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is the difference between COALESCE and IFNULL / NVL?: Explain the core concept, mechanics, and best practices.",
    "title": "What is the difference between COALESCE and IFNULL / NVL?: Explain the core concept, mechanics, and ",
    "answer": "Understanding What is the difference between COALESCE and IFNULL / NVL? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is the difference between COALESCE and IFNULL / NVL? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is the difference between COALESCE and IFNULL / NVL? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is the difference between COALESCE and IFNULL / NVL? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is the difference between COALESCE and IFNULL / NVL?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is the NULLIF function and how does it prevent division by zero errors?: Explain the core concept, mechanics, and best practices.",
    "title": "What is the NULLIF function and how does it prevent division by zero errors?: Explain the core conce",
    "answer": "Understanding What is the NULLIF function and how does it prevent division by zero errors? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is the NULLIF function and how does it prevent division by zero errors? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is the NULLIF function and how does it prevent division by zero errors? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is the NULLIF function and how does it prevent division by zero errors? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is the NULLIF function and how does it prevent division by zero errors?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "How do auto-incrementing identity columns (SERIAL, AUTO_INCREMENT, IDENTITY) work?: Explain the core concept, mechanics, and best practices.",
    "title": "How do auto-incrementing identity columns (SERIAL, AUTO_INCREMENT, IDENTITY) work?: Explain the core",
    "answer": "Understanding How do auto-incrementing identity columns (SERIAL, AUTO_INCREMENT, IDENTITY) work? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, How do auto-incrementing identity columns (SERIAL, AUTO_INCREMENT, IDENTITY) work? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding How do auto-incrementing identity columns (SERIAL, AUTO_INCREMENT, IDENTITY) work? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, How do auto-incrementing identity columns (SERIAL, AUTO_INCREMENT, IDENTITY) work? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for How do auto-incrementing identity columns (SERIAL, AUTO_INCREMENT, IDENTITY) work?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What happens when an auto-increment sequence wraps around or reaches max capacity?: Explain the core concept, mechanics, and best practices.",
    "title": "What happens when an auto-increment sequence wraps around or reaches max capacity?: Explain the core",
    "answer": "Understanding What happens when an auto-increment sequence wraps around or reaches max capacity? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What happens when an auto-increment sequence wraps around or reaches max capacity? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What happens when an auto-increment sequence wraps around or reaches max capacity? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What happens when an auto-increment sequence wraps around or reaches max capacity? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What happens when an auto-increment sequence wraps around or reaches max capacity?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is the difference between physical deletion and soft deletion (deleted_at)?: Explain the core concept, mechanics, and best practices.",
    "title": "What is the difference between physical deletion and soft deletion (deleted_at)?: Explain the core c",
    "answer": "Understanding What is the difference between physical deletion and soft deletion (deleted_at)? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is the difference between physical deletion and soft deletion (deleted_at)? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is the difference between physical deletion and soft deletion (deleted_at)? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is the difference between physical deletion and soft deletion (deleted_at)? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is the difference between physical deletion and soft deletion (deleted_at)?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "How does soft deletion impact query performance, indexing, and UNIQUE constraints?: Explain the core concept, mechanics, and best practices.",
    "title": "How does soft deletion impact query performance, indexing, and UNIQUE constraints?: Explain the core",
    "answer": "Understanding How does soft deletion impact query performance, indexing, and UNIQUE constraints? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, How does soft deletion impact query performance, indexing, and UNIQUE constraints? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding How does soft deletion impact query performance, indexing, and UNIQUE constraints? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, How does soft deletion impact query performance, indexing, and UNIQUE constraints? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for How does soft deletion impact query performance, indexing, and UNIQUE constraints?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture",
    "tags": [
      "sql",
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is a Composite Primary Key and when is it preferred over a surrogate ID?: Explain the core concept, mechanics, and best practices.",
    "title": "What is a Composite Primary Key and when is it preferred over a surrogate ID?: Explain the core conc",
    "answer": "Understanding What is a Composite Primary Key and when is it preferred over a surrogate ID? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is a Composite Primary Key and when is it preferred over a surrogate ID? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is a Composite Primary Key and when is it preferred over a surrogate ID? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is a Composite Primary Key and when is it preferred over a surrogate ID? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is a Composite Primary Key and when is it preferred over a surrogate ID?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "How does SQL handle BOOLEAN data types across database engines (e.g. TINYINT(1) in MySQL)?: Explain the core concept, mechanics, and best practices.",
    "title": "How does SQL handle BOOLEAN data types across database engines (e.g. TINYINT(1) in MySQL)?: Explain ",
    "answer": "Understanding How does SQL handle BOOLEAN data types across database engines (e.g. TINYINT(1) in MySQL)? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, How does SQL handle BOOLEAN data types across database engines (e.g. TINYINT(1) in MySQL)? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding How does SQL handle BOOLEAN data types across database engines (e.g. TINYINT(1) in MySQL)? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, How does SQL handle BOOLEAN data types across database engines (e.g. TINYINT(1) in MySQL)? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for How does SQL handle BOOLEAN data types across database engines (e.g. TINYINT(1) in MySQL)?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What are generated columns (STORED vs VIRTUAL) and how can they be indexed?: Explain the core concept, mechanics, and best practices.",
    "title": "What are generated columns (STORED vs VIRTUAL) and how can they be indexed?: Explain the core concep",
    "answer": "Understanding What are generated columns (STORED vs VIRTUAL) and how can they be indexed? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What are generated columns (STORED vs VIRTUAL) and how can they be indexed? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What are generated columns (STORED vs VIRTUAL) and how can they be indexed? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What are generated columns (STORED vs VIRTUAL) and how can they be indexed? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What are generated columns (STORED vs VIRTUAL) and how can they be indexed?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is the difference between a table and a view in SQL?: Explain the core concept, mechanics, and best practices.",
    "title": "What is the difference between a table and a view in SQL?: Explain the core concept, mechanics, and ",
    "answer": "Understanding What is the difference between a table and a view in SQL? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is the difference between a table and a view in SQL? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is the difference between a table and a view in SQL? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is the difference between a table and a view in SQL? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is the difference between a table and a view in SQL?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is a Materialized View and how does refresh strategy affect read/write performance?: Explain the core concept, mechanics, and best practices.",
    "title": "What is a Materialized View and how does refresh strategy affect read/write performance?: Explain th",
    "answer": "Understanding What is a Materialized View and how does refresh strategy affect read/write performance? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is a Materialized View and how does refresh strategy affect read/write performance? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is a Materialized View and how does refresh strategy affect read/write performance? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is a Materialized View and how does refresh strategy affect read/write performance? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is a Materialized View and how does refresh strategy affect read/write performance?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Trade-off",
    "tags": [
      "sql",
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "How do schema migrations (Flyway, Liquibase, Prisma Migrate) ensure consistent environments?: Explain the core concept, mechanics, and best practices.",
    "title": "How do schema migrations (Flyway, Liquibase, Prisma Migrate) ensure consistent environments?: Explai",
    "answer": "Understanding How do schema migrations (Flyway, Liquibase, Prisma Migrate) ensure consistent environments? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, How do schema migrations (Flyway, Liquibase, Prisma Migrate) ensure consistent environments? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding How do schema migrations (Flyway, Liquibase, Prisma Migrate) ensure consistent environments? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, How do schema migrations (Flyway, Liquibase, Prisma Migrate) ensure consistent environments? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for How do schema migrations (Flyway, Liquibase, Prisma Migrate) ensure consistent environments?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Production",
    "tags": [
      "sql",
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is the difference between synchronous replication and asynchronous replication in SQL databases?: Explain the core concept, mechanics, and best practices.",
    "title": "What is the difference between synchronous replication and asynchronous replication in SQL databases",
    "answer": "Understanding What is the difference between synchronous replication and asynchronous replication in SQL databases? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is the difference between synchronous replication and asynchronous replication in SQL databases? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is the difference between synchronous replication and asynchronous replication in SQL databases? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is the difference between synchronous replication and asynchronous replication in SQL databases? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is the difference between synchronous replication and asynchronous replication in SQL databases?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture",
    "tags": [
      "sql",
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is Connection Pooling and why is opening raw database connections on every HTTP request an anti-pattern?: Explain the core concept, mechanics, and best practices.",
    "title": "What is Connection Pooling and why is opening raw database connections on every HTTP request an anti",
    "answer": "Understanding What is Connection Pooling and why is opening raw database connections on every HTTP request an anti-pattern? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is Connection Pooling and why is opening raw database connections on every HTTP request an anti-pattern? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is Connection Pooling and why is opening raw database connections on every HTTP request an anti-pattern? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is Connection Pooling and why is opening raw database connections on every HTTP request an anti-pattern? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is Connection Pooling and why is opening raw database connections on every HTTP request an anti-pattern?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "How do write-ahead logs (WAL) ensure durability and crash recovery?: Explain the core concept, mechanics, and best practices.",
    "title": "How do write-ahead logs (WAL) ensure durability and crash recovery?: Explain the core concept, mecha",
    "answer": "Understanding How do write-ahead logs (WAL) ensure durability and crash recovery? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, How do write-ahead logs (WAL) ensure durability and crash recovery? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding How do write-ahead logs (WAL) ensure durability and crash recovery? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, How do write-ahead logs (WAL) ensure durability and crash recovery? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for How do write-ahead logs (WAL) ensure durability and crash recovery?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is a temporary table (TEMPORARY TABLE) and what is its scope and lifecycle?: Explain the core concept, mechanics, and best practices.",
    "title": "What is a temporary table (TEMPORARY TABLE) and what is its scope and lifecycle?: Explain the core c",
    "answer": "Understanding What is a temporary table (TEMPORARY TABLE) and what is its scope and lifecycle? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is a temporary table (TEMPORARY TABLE) and what is its scope and lifecycle? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is a temporary table (TEMPORARY TABLE) and what is its scope and lifecycle? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is a temporary table (TEMPORARY TABLE) and what is its scope and lifecycle? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is a temporary table (TEMPORARY TABLE) and what is its scope and lifecycle?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What are table aliases and column aliases, and where can they be referenced in a query?: Explain the core concept, mechanics, and best practices.",
    "title": "What are table aliases and column aliases, and where can they be referenced in a query?: Explain the",
    "answer": "Understanding What are table aliases and column aliases, and where can they be referenced in a query? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What are table aliases and column aliases, and where can they be referenced in a query? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What are table aliases and column aliases, and where can they be referenced in a query? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What are table aliases and column aliases, and where can they be referenced in a query? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What are table aliases and column aliases, and where can they be referenced in a query?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "How does the database buffer pool / shared buffers cache data pages in RAM?: Explain the core concept, mechanics, and best practices.",
    "title": "How does the database buffer pool / shared buffers cache data pages in RAM?: Explain the core concep",
    "answer": "Understanding How does the database buffer pool / shared buffers cache data pages in RAM? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, How does the database buffer pool / shared buffers cache data pages in RAM? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding How does the database buffer pool / shared buffers cache data pages in RAM? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, How does the database buffer pool / shared buffers cache data pages in RAM? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for How does the database buffer pool / shared buffers cache data pages in RAM?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "sql-fundamentals",
    "question": "What is the difference between row-oriented storage (PostgreSQL/MySQL) and column-oriented storage (ClickHouse/Snowflake)?: Explain the core concept, mechanics, and best practices.",
    "title": "What is the difference between row-oriented storage (PostgreSQL/MySQL) and column-oriented storage (",
    "answer": "Understanding What is the difference between row-oriented storage (PostgreSQL/MySQL) and column-oriented storage (ClickHouse/Snowflake)? is fundamental to mastering relational database architecture and SQL design.",
    "explanation": "In relational database engineering, What is the difference between row-oriented storage (PostgreSQL/MySQL) and column-oriented storage (ClickHouse/Snowflake)? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "interviewAnswer": "Understanding What is the difference between row-oriented storage (PostgreSQL/MySQL) and column-oriented storage (ClickHouse/Snowflake)? is fundamental to mastering relational database architecture and SQL design. In relational database engineering, What is the difference between row-oriented storage (PostgreSQL/MySQL) and column-oriented storage (ClickHouse/Snowflake)? governs data integrity, storage layout, and query execution semantics. Deep comprehension prevents data corruption, performance bottlenecks, and design anti-patterns across enterprise database systems.",
    "importantPoints": [
      "Essential foundation for What is the difference between row-oriented storage (PostgreSQL/MySQL) and column-oriented storage (ClickHouse/Snowflake)?",
      "Guarantees data correctness and structural integrity",
      "Prevents common schema design and storage anti-patterns",
      "Ensures optimal compatibility across relational database engines"
    ],
    "commonMistakes": [
      "Choosing improper data types that lead to storage bloat or precision loss",
      "Misinterpreting NULL behavior in logical expressions"
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
      "fundamentals",
      "database-design"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "sql",
        "title": "SQL Query Example",
        "code": "-- SQL implementation example\nSELECT * FROM information_schema.tables WHERE table_schema = 'public';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
