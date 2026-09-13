import { SeedQuestion } from '../types';

export const subqueriesQuestions: SeedQuestion[] = [
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Correlated vs Non-Correlated Subqueries",
    "question": "What is the difference between a correlated subquery and a non-correlated subquery, and what are the performance implications?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "correlated",
      "performance",
      "execution-plan"
    ],
    "interviewAnswer": "A non-correlated subquery is independent of the outer query; it executes exactly once and its result is cached and reused. A correlated subquery references columns from the outer query; it conceptually executes once for every candidate row evaluated by the outer query, often leading to O(N * M) performance unless optimized by the query planner into a join.",
    "answer": "A non-correlated subquery does not depend on any column from the surrounding outer query. It evaluates a single time prior to outer query execution, producing a scalar value or set. In contrast, a correlated subquery contains one or more column references (correlations) to the outer table. Relational engines evaluate the correlated subquery repeatedly for each outer table row. Modern optimizers attempt to \"decorrelate\" these subqueries into joins or semi-joins, but complex correlations can degrade performance.",
    "explanation": "When writing correlated subqueries, if the database cannot decorrelate the query (for example, due to complex aggregation or inequalities), it performs an index lookup or nested loop scan for every single row. If the outer table has 100,000 rows, the subquery executes 100,000 times.",
    "importantPoints": [
      "Non-correlated subquery: Evaluates once; independent of outer table.",
      "Correlated subquery: References outer table columns; evaluates per row.",
      "Decorrelation: Query optimizers attempt to rewrite correlated subqueries into joins.",
      "Un-decorrelated subqueries cause severe O(N*M) performance bottlenecks."
    ],
    "commonMistakes": [
      "Using correlated subqueries in the SELECT clause on high-volume tables instead of LEFT JOINs.",
      "Assuming modern optimizers always decorrelate every subquery automatically.",
      "Not indexing the referenced foreign key columns in the correlated inner query."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Non-Correlated vs Correlated Subquery",
        "code": "-- Non-Correlated: Inner query executes ONCE\nSELECT employee_id, salary\nFROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);\n\n-- Correlated: Inner query references outer table (e.department_id)\nSELECT e.employee_id, e.salary, e.department_id\nFROM employees e\nWHERE e.salary > (\n  SELECT AVG(sub.salary)\n  FROM employees sub\n  WHERE sub.department_id = e.department_id -- Correlation!\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "EXISTS vs IN: Differences and The NULL Trap",
    "question": "Compare EXISTS and IN in SQL subqueries. What is the dangerous \"NULL trap\" with NOT IN?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "exists",
      "in",
      "not-in",
      "null-trap"
    ],
    "interviewAnswer": "EXISTS tests for the presence of at least one row matching the condition and short-circuits to true upon finding a match. IN evaluates membership against a set of values. The critical trap is NOT IN: if the subquery returns even a single NULL value, NOT IN evaluates to UNKNOWN/false for all rows, returning zero results! NOT EXISTS handles NULL safely.",
    "answer": "EXISTS evaluates boolean existence via semi-join semantics; as soon as a single matching row is located in the inner table, the engine short-circuits and returns TRUE without scanning further. IN compares a scalar value against an explicit list or single-column subquery. When using `NOT IN (SELECT col FROM ...)`, if `col` contains a single NULL, SQL three-valued logic treats `val NOT IN (1, 2, NULL)` as `val != 1 AND val != 2 AND val != NULL`. Since `val != NULL` evaluates to UNKNOWN, the entire condition evaluates to UNKNOWN and zero rows are returned. `NOT EXISTS` avoids this completely.",
    "explanation": "The NOT IN NULL trap is one of the most common production bugs in SQL. Whenever checking for non-existence where foreign keys or target columns could be nullable, always use `NOT EXISTS` or ensure `WHERE col IS NOT NULL` is included in the subquery.",
    "importantPoints": [
      "EXISTS short-circuits upon finding the first matching row.",
      "NOT IN returns 0 rows if the subquery contains even a single NULL value.",
      "NOT EXISTS is immune to NULL traps because it tests row existence, not value equality.",
      "Modern optimizers execute EXISTS and IN with identical semi-join plans when nullability is not an issue."
    ],
    "commonMistakes": [
      "Using NOT IN against a nullable column and unexpectedly receiving an empty result set.",
      "Writing SELECT * in an EXISTS subquery thinking it loads all columns (it doesn't; SELECT 1 or SELECT * are identical in EXISTS).",
      "Using IN for large subqueries when an EXISTS semi-join performs significantly faster in older database versions."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Demonstrating the NOT IN NULL Trap vs NOT EXISTS",
        "code": "-- Suppose inactive_users contains IDs: (5, 6, NULL)\n\n-- DANGEROUS: Returns 0 rows because of the single NULL value!\nSELECT * FROM users\nWHERE user_id NOT IN (SELECT user_id FROM inactive_users);\n\n-- SAFE: Correctly returns all active users regardless of NULLs\nSELECT * FROM users u\nWHERE NOT EXISTS (\n  SELECT 1 FROM inactive_users iu\n  WHERE iu.user_id = u.user_id\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Common Table Expressions (CTEs) vs Subqueries",
    "question": "What are Common Table Expressions (CTEs), and how do they compare to inline derived table subqueries in readability and execution?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "cte",
      "with-clause",
      "derived-tables"
    ],
    "interviewAnswer": "CTEs (defined using the WITH clause) name temporary result sets within a single query, drastically improving readability and modularity compared to deeply nested subqueries. They can also be referenced multiple times in the same query. In modern databases, non-recursive CTEs are inlined by the optimizer just like derived tables.",
    "answer": "A Common Table Expression (CTE) defines a named temporary result set using the `WITH` keyword. Derived tables (subqueries in the FROM clause) require deep nesting, which is hard to read and cannot be referenced multiple times without repeating the subquery. In terms of performance, modern engines (PostgreSQL 12+, MySQL 8+, SQL Server) inline CTEs into the main query tree, producing execution plans identical to derived tables unless explicitly materialized.",
    "explanation": "Historically in PostgreSQL (versions 11 and older), CTEs acted as rigid optimization barriers: the engine always materialized the CTE into a temporary memory table, preventing predicate pushdown. Since PostgreSQL 12, CTEs are inlined by default unless declared with `WITH cte AS MATERIALIZED (...)`.",
    "importantPoints": [
      "CTEs improve code readability and self-documentation.",
      "A CTE can be referenced multiple times in the same query.",
      "Modern optimizers inline CTEs, producing identical execution plans to subqueries.",
      "PostgreSQL allows explicit WITH ... AS MATERIALIZED to force materialization or AS NOT MATERIALIZED to force inlining."
    ],
    "commonMistakes": [
      "Assuming CTEs are always materialized as temporary physical tables on disk.",
      "Nesting multiple subqueries 5 levels deep instead of structuring with clean sequential CTEs.",
      "Not knowing that recursive queries require CTEs (WITH RECURSIVE)."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Refactoring Nested Subqueries to a Clean CTE",
        "code": "-- Unreadable nested subqueries:\nSELECT * FROM (\n  SELECT dept_id, AVG(salary) AS avg_sal\n  FROM employees GROUP BY dept_id\n) d WHERE avg_sal > (SELECT AVG(salary) FROM employees);\n\n-- Clean CTE Refactoring:\nWITH DeptAverages AS (\n  SELECT dept_id, AVG(salary) AS avg_sal\n  FROM employees\n  GROUP BY dept_id\n),\nCompanyAverage AS (\n  SELECT AVG(salary) AS overall_avg\n  FROM employees\n)\nSELECT d.dept_id, d.avg_sal\nFROM DeptAverages d\nCROSS JOIN CompanyAverage c\nWHERE d.avg_sal > c.overall_avg;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Recursive CTEs: Traversing Hierarchies and Graphs",
    "question": "How do Recursive CTEs work, and how would you use one to traverse an employee organizational chart?",
    "difficulty": "hard",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "cte",
      "recursive-cte",
      "hierarchy",
      "graph"
    ],
    "interviewAnswer": "A Recursive CTE consists of an Anchor Member (the base case query), a UNION ALL operator, and a Recursive Member (referencing the CTE itself). The engine executes the anchor first, then iteratively executes the recursive member using the previous iteration's results until no new rows are produced.",
    "answer": "Recursive CTEs solve hierarchical, tree, and graph problems in SQL. The syntax begins with `WITH RECURSIVE cte_name AS (...)`. The anchor query selects the root nodes (e.g. top CEO where manager_id IS NULL). The recursive query joins the CTE back to the base table on parent-child foreign keys. The database engine executes this recursively until the working table returns an empty set or hits the recursion limit.",
    "explanation": "Always guard against infinite loops caused by cyclic data (e.g. A manages B who manages A) using a depth counter (`WHERE depth < 20`) or cycle detection paths (`WHERE NOT (id = ANY(path))`). In SQL Server, the recursion limit defaults to 100 and can be adjusted with `OPTION (MAXRECURSION n)`.",
    "importantPoints": [
      "Structure: Anchor query -> UNION ALL -> Recursive query referencing CTE.",
      "Continues until an iteration produces zero rows or reaches maximum recursion depth.",
      "Essential for organizational charts, bill of materials, taxonomies, and network routing.",
      "Always implement cycle prevention or depth counters to prevent infinite loops."
    ],
    "commonMistakes": [
      "Using UNION instead of UNION ALL in the recursive member (UNION incurs duplicate elimination overhead and is forbidden in some dialects).",
      "Forgetting an anchor termination condition, creating infinite loops on cyclic graphs.",
      "Placing aggregate functions or GROUP BY directly in the recursive member (forbidden in ANSI SQL)."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Traversing an Employee Hierarchy with Recursive CTE",
        "code": "WITH RECURSIVE OrgChart AS (\n  -- 1. Anchor Member: Find the CEO / Top Level\n  SELECT \n    employee_id,\n    name,\n    manager_id,\n    1 AS level,\n    CAST(name AS VARCHAR(255)) AS management_chain\n  FROM employees\n  WHERE manager_id IS NULL\n\n  UNION ALL\n\n  -- 2. Recursive Member: Find direct reports of previous level\n  SELECT \n    e.employee_id,\n    e.name,\n    e.manager_id,\n    o.level + 1,\n    CAST(o.management_chain || ' -> ' || e.name AS VARCHAR(255))\n  FROM employees e\n  INNER JOIN OrgChart o ON e.manager_id = o.employee_id\n  WHERE o.level < 10 -- Guard against infinite loop\n)\nSELECT * FROM OrgChart ORDER BY level, employee_id;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "LATERAL Joins and CROSS APPLY vs Correlated Subqueries",
    "question": "What is a LATERAL join (or CROSS APPLY), and how does it improve upon correlated subqueries?",
    "difficulty": "hard",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "lateral",
      "cross-apply",
      "correlated"
    ],
    "interviewAnswer": "A LATERAL join (CROSS APPLY in SQL Server) allows a subquery in the FROM clause to reference columns from preceding tables in the same FROM clause. Unlike a scalar correlated subquery in the SELECT list that can only return one value, a LATERAL join can return multiple columns and multiple rows per outer row.",
    "answer": "Standard SQL derived tables cannot see columns from sibling tables in the FROM clause. The `LATERAL` keyword (supported in PostgreSQL, MySQL 8.0.14+, Oracle 12c+) removes this limitation, functioning as a foreach loop over outer rows. In SQL Server, `CROSS APPLY` and `OUTER APPLY` serve this exact purpose. It is especially useful for fetching the \"top N items per parent row\" (e.g. top 3 orders per customer) without computing rank window functions across the entire table.",
    "explanation": "When correlated subqueries are placed in the SELECT clause, you cannot extract multiple fields without duplicating the entire subquery per column. LATERAL joins eliminate this inefficiency by projecting multiple calculated columns or rows at once while maintaining access to outer table attributes.",
    "importantPoints": [
      "LATERAL allows subqueries in FROM to access prior FROM table columns.",
      "CROSS APPLY (SQL Server) is functionally equivalent to INNER JOIN LATERAL.",
      "OUTER APPLY is equivalent to LEFT JOIN LATERAL (preserves outer rows if subquery returns empty).",
      "Greatly simplifies \"Top N child rows per parent\" queries."
    ],
    "commonMistakes": [
      "Writing multiple correlated scalar subqueries in SELECT to get different fields from the same child record.",
      "Attempting to reference outer columns in a standard non-LATERAL subquery in FROM (causes syntax error).",
      "Using CROSS APPLY when child rows might not exist and expecting parent rows to be retained (use OUTER APPLY / LEFT JOIN LATERAL)."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Top 2 Orders per Customer Using LATERAL / CROSS APPLY",
        "code": "-- PostgreSQL / MySQL 8.0.14+\nSELECT c.customer_id, c.name, o.order_id, o.order_date, o.amount\nFROM customers c\nLEFT JOIN LATERAL (\n  SELECT order_id, order_date, amount\n  FROM orders\n  WHERE customer_id = c.customer_id\n  ORDER BY order_date DESC\n  LIMIT 2\n) o ON true;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Scalar Subquery: Rules and Failure Modes",
    "question": "What is a scalar subquery, where can it be used, and what runtime error occurs when it returns multiple rows?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "subqueries",
      "scalar-subquery",
      "cardinality",
      "runtime-errors"
    ],
    "interviewAnswer": "A scalar subquery is a subquery that returns exactly one row and one column. It can be used anywhere a scalar expression or constant is expected (SELECT list, WHERE comparison, SET in UPDATE). If it returns more than one row at runtime, the query aborts with a cardinality violation error.",
    "answer": "A scalar subquery evaluates to a single atomic value. If the subquery returns zero rows, it evaluates to NULL. If it returns two or more rows, the database raises an error: \"Subquery returned more than 1 value\" (SQL Server) or \"more than one row returned by a subquery used as an expression\" (PostgreSQL).",
    "explanation": "Scalar subqueries are common in WHERE comparisons (e.g. `WHERE salary > (SELECT AVG(salary) FROM emp)`). However, if an unconstrained subquery is used with an equality operator (`WHERE id = (SELECT id FROM users WHERE name = 'John')`), having two users named \"John\" will crash the query at runtime in production.",
    "importantPoints": [
      "Returns exactly one column and one row.",
      "Returns NULL if zero rows match.",
      "Raises a fatal runtime error if 2 or more rows are returned.",
      "Can be used in SELECT, WHERE, HAVING, and CASE expressions."
    ],
    "commonMistakes": [
      "Writing equality comparisons (`col = (SELECT ...)`) without ensuring uniqueness via primary key or LIMIT 1.",
      "Forgetting that a scalar subquery returning 0 rows yields NULL, which causes comparisons like `= NULL` to fail silently."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Scalar Subquery Usage and Safeguarding",
        "code": "-- Safe: Guaranteed scalar aggregate\nSELECT \n  employee_id, \n  salary,\n  (SELECT AVG(salary) FROM employees) AS company_avg_salary\nFROM employees;\n\n-- Guarding against multi-row errors:\nSELECT * FROM orders\nWHERE user_id = (\n  SELECT user_id FROM users WHERE email = 'test@example.com' LIMIT 1\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "ANY / SOME vs ALL Comparison Operators",
    "question": "How do the ANY, SOME, and ALL operators work when comparing against subquery result sets?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate"
    ],
    "tags": [
      "subqueries",
      "any",
      "some",
      "all",
      "operators"
    ],
    "interviewAnswer": "ANY and SOME are synonyms; they return TRUE if the comparison is satisfied for at least one row returned by the subquery. ALL returns TRUE only if the comparison is satisfied for every single row returned by the subquery.",
    "answer": "`x > ANY (subquery)` is equivalent to `x > (SELECT MIN(col) FROM subquery)`: if x is greater than the smallest value in the set, it returns true. `x > ALL (subquery)` is equivalent to `x > (SELECT MAX(col) FROM subquery)`: x must exceed every single value in the set. `x = ANY (subquery)` is completely synonymous with `x IN (subquery)`.",
    "explanation": "A subtle edge case occurs when the subquery returns zero rows. `x > ALL (empty set)` evaluates to TRUE because vacuous truth applies: there are no rows that violate the condition. `x > ANY (empty set)` evaluates to FALSE.",
    "importantPoints": [
      "ANY and SOME are identical keywords.",
      "col = ANY(subquery) is equivalent to col IN (subquery).",
      "col > ALL(subquery) requires col to be greater than MAX(subquery).",
      "ALL against an empty subquery evaluates to TRUE (vacuous truth)."
    ],
    "commonMistakes": [
      "Thinking SOME and ANY behave differently.",
      "Overlooking that col != ALL(subquery) is equivalent to col NOT IN (subquery), inheriting the same NULL hazard."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Using ANY and ALL Operators",
        "code": "-- Find products more expensive than ALL products in category 5:\nSELECT product_name, price\nFROM products\nWHERE price > ALL (\n  SELECT price FROM products WHERE category_id = 5\n);\n\n-- Find products cheaper than AT LEAST ONE product in category 5:\nSELECT product_name, price\nFROM products\nWHERE price < ANY (\n  SELECT price FROM products WHERE category_id = 5\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Subqueries with UPDATE and DELETE Statements",
    "question": "How are subqueries used within UPDATE and DELETE statements, and what MySQL limitation affects updating a table you are querying from?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "update",
      "delete",
      "mysql-limitations"
    ],
    "interviewAnswer": "Subqueries filter or compute values for UPDATE/DELETE operations. In MySQL, you cannot directly update a table and select from the same table in a subquery (Error 1093). The workaround in MySQL is wrapping the subquery in a nested derived table or using a multi-table UPDATE/JOIN.",
    "answer": "Subqueries commonly locate records to modify or purge: `DELETE FROM orders WHERE user_id IN (SELECT id FROM users WHERE is_banned = true)`. In MySQL, attempting `UPDATE users SET status = 'inactive' WHERE id IN (SELECT id FROM users WHERE last_login < ...)` triggers: \"You can't specify target table 'users' for update in FROM clause\". Wrapping the inner query in an extra derived table forces MySQL to materialize a temporary result set, circumventing the limitation.",
    "explanation": "PostgreSQL, Oracle, and SQL Server do not suffer from MySQL's Error 1093. In PostgreSQL and SQL Server, using `USING` or `MERGE` statements is the preferred idiom for complex multi-table updates.",
    "importantPoints": [
      "Enables batch modification based on complex multi-table criteria.",
      "MySQL Error 1093 prevents selecting from the update target table directly.",
      "MySQL workaround: Wrap the inner subquery in an intermediate derived table alias.",
      "PostgreSQL supports UPDATE ... FROM syntax for cleaner joins."
    ],
    "commonMistakes": [
      "Hitting MySQL Error 1093 and not knowing how to wrap in a temporary derived table.",
      "Accidentally running DELETE with a subquery that evaluates to NULL and deleting nothing or everything."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Bypassing MySQL Error 1093",
        "code": "-- FAILS in MySQL:\n-- UPDATE employees SET salary = salary * 1.1 \n-- WHERE department_id IN (SELECT department_id FROM employees WHERE performance = 'High');\n\n-- SUCCEEDS in MySQL (extra derived table wrapper materializes the set):\nUPDATE employees \nSET salary = salary * 1.1 \nWHERE department_id IN (\n  SELECT department_id FROM (\n    SELECT department_id FROM employees WHERE performance = 'High'\n  ) AS temp\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Rewriting Correlated Subqueries into Window Functions",
    "question": "How do you rewrite a correlated subquery comparing rows against their department average into a window function?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "window-functions",
      "refactoring",
      "optimization"
    ],
    "interviewAnswer": "Instead of re-querying the table for each row in a correlated subquery, compute AVG(salary) OVER (PARTITION BY department_id) in a CTE or subquery and filter in a single pass.",
    "answer": "Correlated subqueries evaluate once per outer row, leading to high CPU usage. By replacing the subquery with `AVG(salary) OVER (PARTITION BY department_id)`, the engine sorts/hashes once and computes averages for all rows in a single O(N log N) pass.",
    "explanation": "Correlated subqueries evaluate once per outer row, leading to high CPU usage. By replacing the subquery with `AVG(salary) OVER (PARTITION BY department_id)`, the engine sorts/hashes once and computes averages for all rows in a single O(N log N) pass.",
    "importantPoints": [
      "Replaces O(N*M) nested scans with O(N log N) single pass.",
      "Improves execution speed on large datasets by orders of magnitude."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Rewriting Correlated Subqueries into Window Functions",
        "code": "-- Example demonstration for: Rewriting Correlated Subqueries into Window Functions\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Subqueries in the SELECT Clause (Scalar Projections)",
    "question": "When is it appropriate to use a subquery in the SELECT clause, and what are the drawbacks?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "select-clause",
      "n-plus-1",
      "performance"
    ],
    "interviewAnswer": "Subqueries in SELECT are acceptable for quick scalar lookups on small tables. On large tables, they cause N+1 execution bottlenecks where the subquery executes once for every row in the result set. A LEFT JOIN or CTE is almost always more performant.",
    "answer": "Placing subqueries in the SELECT list (e.g., `SELECT u.name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) FROM users u`) acts as an implicit nested loop. If `users` contains 50,000 rows, the inner count query executes 50,000 times. Refactoring to `LEFT JOIN orders GROUP BY u.id` scans the orders table once.",
    "explanation": "Placing subqueries in the SELECT list (e.g., `SELECT u.name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) FROM users u`) acts as an implicit nested loop. If `users` contains 50,000 rows, the inner count query executes 50,000 times. Refactoring to `LEFT JOIN orders GROUP BY u.id` scans the orders table once.",
    "importantPoints": [
      "Causes relational N+1 query execution.",
      "Should be replaced with LEFT JOIN + GROUP BY for scalability."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Subqueries in the SELECT Clause (Scalar Projections)",
        "code": "-- Example demonstration for: Subqueries in the SELECT Clause (Scalar Projections)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Derived Tables and Alias Requirements",
    "question": "Why do relational databases require aliases for derived tables in the FROM clause?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "derived-tables",
      "aliases",
      "syntax"
    ],
    "interviewAnswer": "Every table source in the FROM clause must have a unique identifier in the query scope so columns can be unambiguously referenced and resolved by the query parser and optimizer.",
    "answer": "A derived table creates a temporary virtual relation. The parser requires an alias (`AS sub`) so that outer clauses (SELECT, WHERE, ON) can qualify column references (e.g. `sub.total_amount`) and avoid ambiguous name collisions.",
    "explanation": "A derived table creates a temporary virtual relation. The parser requires an alias (`AS sub`) so that outer clauses (SELECT, WHERE, ON) can qualify column references (e.g. `sub.total_amount`) and avoid ambiguous name collisions.",
    "importantPoints": [
      "Mandatory in PostgreSQL and MySQL; optional in some Oracle contexts.",
      "Permits explicit column qualification."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Derived Tables and Alias Requirements",
        "code": "-- Example demonstration for: Derived Tables and Alias Requirements\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Subquery Decorrelation: How the Optimizer Transforms Queries",
    "question": "What is subquery decorrelation, and how does the optimizer perform it?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "decorrelation",
      "query-optimizer",
      "semi-join"
    ],
    "interviewAnswer": "Subquery decorrelation is an optimizer optimization where a correlated subquery is transformed into an equivalent relational algebra JOIN (such as a Semi-Join or Anti-Join), allowing the engine to use Hash Joins or Merge Joins instead of nested loops.",
    "answer": "Rather than executing a correlated subquery per row, decorrelation pulls the inner table into the primary query plan. For `WHERE EXISTS (...)`, the optimizer creates a Left Semi-Join, finding matches via a hash table in a single scan.",
    "explanation": "Rather than executing a correlated subquery per row, decorrelation pulls the inner table into the primary query plan. For `WHERE EXISTS (...)`, the optimizer creates a Left Semi-Join, finding matches via a hash table in a single scan.",
    "importantPoints": [
      "Transforms nested loops into Hash Joins or Merge Joins.",
      "Crucial for scalable performance.",
      "May fail if subqueries contain non-deterministic functions or complex outer joins."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Subquery Decorrelation: How the Optimizer Transforms Queries",
        "code": "-- Example demonstration for: Subquery Decorrelation: How the Optimizer Transforms Queries\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Multi-Column Subqueries (Tuple Matching)",
    "question": "What are multi-column subqueries and row constructors in SQL?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "row-constructor",
      "tuple-matching"
    ],
    "interviewAnswer": "Multi-column subqueries compare multiple columns simultaneously as a tuple: WHERE (dept_id, role) IN (SELECT dept_id, role FROM active_teams).",
    "answer": "Instead of chaining multiple AND conditions or concatenating strings, SQL row constructors allow tuple comparison: `(col1, col2) IN (SELECT col1, col2 FROM ...)`. This is clean, safe against delimiter collision bugs, and supported in PostgreSQL, MySQL, and Oracle.",
    "explanation": "Instead of chaining multiple AND conditions or concatenating strings, SQL row constructors allow tuple comparison: `(col1, col2) IN (SELECT col1, col2 FROM ...)`. This is clean, safe against delimiter collision bugs, and supported in PostgreSQL, MySQL, and Oracle.",
    "importantPoints": [
      "Compares tuples directly: (a, b) = (sub_a, sub_b).",
      "Avoids error-prone string concatenation tricks."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Multi-Column Subqueries (Tuple Matching)",
        "code": "-- Example demonstration for: Multi-Column Subqueries (Tuple Matching)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Anti-Joins: How NOT EXISTS is Implemented",
    "question": "What is an Anti-Join, and how do database engines execute NOT EXISTS subqueries?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "anti-join",
      "execution-plan",
      "not-exists"
    ],
    "interviewAnswer": "An Anti-Join returns rows from the left table that have NO matching rows in the right table. The optimizer transforms NOT EXISTS into a Hash Anti-Join or Merge Anti-Join, filtering out rows as soon as a hash match is discovered.",
    "answer": "Relational algebra includes the Anti-Join operator. When executing `WHERE NOT EXISTS`, the engine builds a hash table of right-side keys. As it scans the left table, any key present in the hash table is immediately discarded; unmatched left rows are output.",
    "explanation": "Relational algebra includes the Anti-Join operator. When executing `WHERE NOT EXISTS`, the engine builds a hash table of right-side keys. As it scans the left table, any key present in the hash table is immediately discarded; unmatched left rows are output.",
    "importantPoints": [
      "Anti-Join discards matches and keeps non-matches.",
      "Executed as Hash Anti-Join or Merge Anti-Join.",
      "Far more efficient than nested loops."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Anti-Joins: How NOT EXISTS is Implemented",
        "code": "-- Example demonstration for: Anti-Joins: How NOT EXISTS is Implemented\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Semi-Joins: How EXISTS is Implemented",
    "question": "What is a Semi-Join, and why is it more efficient than an INNER JOIN followed by DISTINCT?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "semi-join",
      "exists",
      "distinct"
    ],
    "interviewAnswer": "A Semi-Join returns each row from the left table at most once as soon as the first match in the right table is found, without duplicating left rows or requiring an expensive post-join deduplication (DISTINCT) step.",
    "answer": "If you join Customers to Orders using INNER JOIN to find customers with orders, a customer with 100 orders is duplicated 100 times, requiring `SELECT DISTINCT` to clean up. A Semi-Join (`WHERE EXISTS`) stops searching the right table as soon as 1 order is found, never duplicating customer rows.",
    "explanation": "If you join Customers to Orders using INNER JOIN to find customers with orders, a customer with 100 orders is duplicated 100 times, requiring `SELECT DISTINCT` to clean up. A Semi-Join (`WHERE EXISTS`) stops searching the right table as soon as 1 order is found, never duplicating customer rows.",
    "importantPoints": [
      "Never duplicates left-table rows.",
      "Avoids memory-intensive DISTINCT sorting.",
      "Short-circuits immediately upon first match."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Semi-Joins: How EXISTS is Implemented",
        "code": "-- Example demonstration for: Semi-Joins: How EXISTS is Implemented\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Subquery Factoring and Inlining (PostgreSQL MATERIALIZED vs NOT MATERIALIZED)",
    "question": "Explain the MATERIALIZED vs NOT MATERIALIZED CTE controls introduced in PostgreSQL 12.",
    "difficulty": "hard",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "cte",
      "postgresql",
      "materialized"
    ],
    "interviewAnswer": "PostgreSQL 12+ inlines CTEs by default (treating them as derived tables). Adding AS MATERIALIZED forces PostgreSQL to calculate and buffer the CTE once in memory/disk as an optimization barrier. AS NOT MATERIALIZED forces inlining.",
    "answer": "Inlining allows the planner to push WHERE filters into the CTE and perform index scans. However, if a CTE is referenced multiple times and is expensive to re-compute, adding `AS MATERIALIZED` tells Postgres to calculate it once, cache it, and share the result across all references.",
    "explanation": "Inlining allows the planner to push WHERE filters into the CTE and perform index scans. However, if a CTE is referenced multiple times and is expensive to re-compute, adding `AS MATERIALIZED` tells Postgres to calculate it once, cache it, and share the result across all references.",
    "importantPoints": [
      "Inlining enables predicate pushdown.",
      "MATERIALIZED acts as an optimization barrier to freeze plan execution."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Subquery Factoring and Inlining (PostgreSQL MATERIALIZED vs NOT MATERIALIZED)",
        "code": "-- Example demonstration for: Subquery Factoring and Inlining (PostgreSQL MATERIALIZED vs NOT MATERIALIZED)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Scalar Subquery in CASE Expression",
    "question": "How do you conditionally execute subqueries using CASE statements?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "case-when",
      "conditional-evaluation"
    ],
    "interviewAnswer": "CASE WHEN type = 'Enterprise' THEN (SELECT discount FROM enterprise_plans WHERE id = u.plan_id) ELSE 0 END. The engine only executes the subquery branch when the WHEN condition evaluates to true.",
    "answer": "Subqueries can be embedded inside THEN/ELSE branches. Because SQL engines employ short-circuit evaluation for CASE expressions in most execution plans, the subquery is skipped entirely for rows that do not satisfy the predicate.",
    "explanation": "Subqueries can be embedded inside THEN/ELSE branches. Because SQL engines employ short-circuit evaluation for CASE expressions in most execution plans, the subquery is skipped entirely for rows that do not satisfy the predicate.",
    "importantPoints": [
      "Subqueries inside CASE branches evaluate only when condition matches.",
      "Ensures expensive lookups are bypassed for irrelevant rows."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Scalar Subquery in CASE Expression",
        "code": "-- Example demonstration for: Scalar Subquery in CASE Expression\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Subqueries in HAVING Clauses",
    "question": "When would you use a subquery inside a HAVING clause?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "having",
      "aggregations"
    ],
    "interviewAnswer": "Use a subquery in HAVING when comparing an aggregated metric against a dynamic threshold computed from another table or overall population: HAVING AVG(salary) > (SELECT AVG(salary) FROM employees).",
    "answer": "HAVING evaluates aggregate conditions. To filter departments whose average salary exceeds the overall company average, you place a scalar subquery directly in HAVING: `GROUP BY department_id HAVING AVG(salary) > (SELECT AVG(salary) FROM employees)`.",
    "explanation": "HAVING evaluates aggregate conditions. To filter departments whose average salary exceeds the overall company average, you place a scalar subquery directly in HAVING: `GROUP BY department_id HAVING AVG(salary) > (SELECT AVG(salary) FROM employees)`.",
    "importantPoints": [
      "Compares group aggregate to a dynamically computed threshold.",
      "Subquery must return a scalar value."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Subqueries in HAVING Clauses",
        "code": "-- Example demonstration for: Subqueries in HAVING Clauses\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Self-Contained vs Correlated Subquery Optimization by Cache",
    "question": "How do database engines cache results of scalar subqueries?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "subquery-caching",
      "scalar-subquery",
      "performance"
    ],
    "interviewAnswer": "For deterministic scalar subqueries, engines evaluate the subquery once and store the scalar result in a query execution context cache, avoiding redundant evaluations.",
    "answer": "Engines like SQL Server and Oracle maintain an execution-time cache for scalar subqueries. If the subquery is uncorrelated, it evaluates once. If it is correlated with low distinct input keys, engines like Oracle use scalar subquery caching to hash inputs and avoid re-executing for repeated keys.",
    "explanation": "Engines like SQL Server and Oracle maintain an execution-time cache for scalar subqueries. If the subquery is uncorrelated, it evaluates once. If it is correlated with low distinct input keys, engines like Oracle use scalar subquery caching to hash inputs and avoid re-executing for repeated keys.",
    "importantPoints": [
      "Uncorrelated subqueries are evaluated once.",
      "Correlated subqueries can benefit from hash-based scalar caching in some engines."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Self-Contained vs Correlated Subquery Optimization by Cache",
        "code": "-- Example demonstration for: Self-Contained vs Correlated Subquery Optimization by Cache\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Subqueries vs Temporary Tables",
    "question": "When should you break a complex multi-stage subquery into physical temporary tables?",
    "difficulty": "hard",
    "questionType": "Trade-off",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "temp-tables",
      "query-optimization",
      "trade-offs"
    ],
    "interviewAnswer": "Use temporary tables when intermediate results are reused multiple times, when the optimizer produces terrible cardinality estimates on complex nested subqueries, or when you need to index intermediate results to accelerate subsequent joins.",
    "answer": "While CTEs and subqueries are convenient, the optimizer must estimate statistics on derived tables without real histograms. If an intermediate stage filters 10M rows down to 50k, writing to a `#temp` table allows the engine to create real statistics and indexes, enabling optimal join strategies for subsequent query phases.",
    "explanation": "While CTEs and subqueries are convenient, the optimizer must estimate statistics on derived tables without real histograms. If an intermediate stage filters 10M rows down to 50k, writing to a `#temp` table allows the engine to create real statistics and indexes, enabling optimal join strategies for subsequent query phases.",
    "importantPoints": [
      "Temp tables have real statistics and histograms.",
      "Allow creating indexes on intermediate results.",
      "Prevents optimizer cardinality estimation breakdown in multi-stage transformations."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Subqueries vs Temporary Tables",
        "code": "-- Example demonstration for: Subqueries vs Temporary Tables\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Generating Series or Sequences with Recursive CTE",
    "question": "How do you generate a sequence of numbers from 1 to 100 or a range of dates using a Recursive CTE?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "recursive-cte",
      "generate-series",
      "sequence"
    ],
    "interviewAnswer": "WITH RECURSIVE Numbers AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM Numbers WHERE n < 100) SELECT n FROM Numbers;",
    "answer": "Engines without built-in `generate_series()` (like MySQL 8 and SQL Server) use Recursive CTEs to synthesize dense sequences of numbers or dates, which are then LEFT JOINed against transactional tables to expose dates with zero activity.",
    "explanation": "Engines without built-in `generate_series()` (like MySQL 8 and SQL Server) use Recursive CTEs to synthesize dense sequences of numbers or dates, which are then LEFT JOINed against transactional tables to expose dates with zero activity.",
    "importantPoints": [
      "Anchor starts at 1.",
      "Recursive step adds 1 and checks termination condition (n < 100).",
      "Used to create calendar date dimensions on the fly."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Generating Series or Sequences with Recursive CTE",
        "code": "-- Example demonstration for: Generating Series or Sequences with Recursive CTE\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Subquery with MERGE Statements",
    "question": "How are subqueries utilized as the source in SQL MERGE (UPSERT) statements?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "merge",
      "upsert"
    ],
    "interviewAnswer": "MERGE INTO target USING (SELECT ... FROM source) AS src ON target.id = src.id WHEN MATCHED THEN UPDATE ... WHEN NOT MATCHED THEN INSERT ...",
    "answer": "The USING clause of a MERGE statement accepts a derived table or CTE. This allows preprocessing, transforming, and deduplicating incoming staging data before matching against the production target table for upsert operations.",
    "explanation": "The USING clause of a MERGE statement accepts a derived table or CTE. This allows preprocessing, transforming, and deduplicating incoming staging data before matching against the production target table for upsert operations.",
    "importantPoints": [
      "Pre-filters or transforms staging data before matching.",
      "Must ensure the source subquery produces unique match keys to avoid MERGE collision errors."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Subquery with MERGE Statements",
        "code": "-- Example demonstration for: Subquery with MERGE Statements\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Correlated Subquery with NOT EXISTS for Data Cleansing",
    "question": "Write a query to find all orphaned order items whose order_id does not exist in the orders table.",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "not-exists",
      "orphaned-records",
      "data-integrity"
    ],
    "interviewAnswer": "SELECT * FROM order_items oi WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.order_id = oi.order_id);",
    "answer": "Orphaned records violate referential integrity when foreign keys are missing. A NOT EXISTS anti-join efficiently identifies these rows for deletion or re-association.",
    "explanation": "Orphaned records violate referential integrity when foreign keys are missing. A NOT EXISTS anti-join efficiently identifies these rows for deletion or re-association.",
    "importantPoints": [
      "Finds foreign key violations in legacy schemas.",
      "NOT EXISTS is safe against NULL foreign keys."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Correlated Subquery with NOT EXISTS for Data Cleansing",
        "code": "-- Example demonstration for: Correlated Subquery with NOT EXISTS for Data Cleansing\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Correlated Subqueries vs Window Functions for Group Max",
    "question": "Compare performance: WHERE salary = (SELECT MAX(salary) FROM emp WHERE dept = e.dept) vs DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) = 1.",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "window-functions",
      "performance"
    ],
    "interviewAnswer": "The window function evaluates the entire table in a single sort/hash pass O(N log N). The correlated subquery performs an index lookup for every row O(N * log M), which is much slower without optimal covering indexes.",
    "answer": "While both return top earners per department, the window function CTE requires a single scan and partition sort. The correlated subquery repeatedly inspects the table for every employee, causing excessive buffer hits unless a covering index on (dept, salary DESC) is available.",
    "explanation": "While both return top earners per department, the window function CTE requires a single scan and partition sort. The correlated subquery repeatedly inspects the table for every employee, causing excessive buffer hits unless a covering index on (dept, salary DESC) is available.",
    "importantPoints": [
      "Window function: single table scan.",
      "Correlated subquery: repeated lookups per outer row."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Correlated Subqueries vs Window Functions for Group Max",
        "code": "-- Example demonstration for: Correlated Subqueries vs Window Functions for Group Max\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Subquery Return Value in IN clause with Empty Result",
    "question": "What happens when an IN subquery returns an empty set (0 rows)?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "in-operator",
      "empty-set"
    ],
    "interviewAnswer": "WHERE col IN (empty set) evaluates to FALSE for every row. The outer query returns 0 rows.",
    "answer": "If the subquery returns zero rows, the set is empty. Testing whether a value belongs to an empty set always evaluates to FALSE. Conversely, `col NOT IN (empty set)` evaluates to TRUE.",
    "explanation": "If the subquery returns zero rows, the set is empty. Testing whether a value belongs to an empty set always evaluates to FALSE. Conversely, `col NOT IN (empty set)` evaluates to TRUE.",
    "importantPoints": [
      "IN (empty) = FALSE.",
      "NOT IN (empty) = TRUE."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Subquery Return Value in IN clause with Empty Result",
        "code": "-- Example demonstration for: Subquery Return Value in IN clause with Empty Result\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Predicate Pushdown into Subqueries",
    "question": "What is predicate pushdown, and why is it important for subqueries?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "predicate-pushdown",
      "optimizer",
      "performance"
    ],
    "interviewAnswer": "Predicate pushdown is an optimizer rewrite that pushes WHERE conditions from the outer query down inside the inner derived table or view before data is read and processed, allowing indexes to prune data early.",
    "answer": "Without predicate pushdown, a database might materialize a derived table of 10M rows before filtering by customer_id in the outer query. Predicate pushdown injects `customer_id = 123` directly into the subquery scan, reducing read volume from 10M rows to 10 rows.",
    "explanation": "Without predicate pushdown, a database might materialize a derived table of 10M rows before filtering by customer_id in the outer query. Predicate pushdown injects `customer_id = 123` directly into the subquery scan, reducing read volume from 10M rows to 10 rows.",
    "importantPoints": [
      "Applies outer filters inside subqueries early.",
      "Drastically reduces memory usage and intermediate row sizes."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Predicate Pushdown into Subqueries",
        "code": "-- Example demonstration for: Predicate Pushdown into Subqueries\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Correlated EXISTS with Multiple Join Criteria",
    "question": "How do you correlate an EXISTS subquery on composite keys across multi-tenant tables?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "exists",
      "multi-tenant",
      "composite-key"
    ],
    "interviewAnswer": "WHERE EXISTS (SELECT 1 FROM child c WHERE c.tenant_id = p.tenant_id AND c.parent_id = p.id)",
    "answer": "In multi-tenant architectures, foreign key relationships must include the tenant_id partition key. Correlated subqueries must match all components of the composite key to prevent data leaks across tenants.",
    "explanation": "In multi-tenant architectures, foreign key relationships must include the tenant_id partition key. Correlated subqueries must match all components of the composite key to prevent data leaks across tenants.",
    "importantPoints": [
      "Matches both tenant_id and entity_id.",
      "Utilizes composite index on (tenant_id, parent_id)."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Correlated EXISTS with Multiple Join Criteria",
        "code": "-- Example demonstration for: Correlated EXISTS with Multiple Join Criteria\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Subquery Optimization Barriers: Views with GROUP BY",
    "question": "Why does joining to a subquery containing a GROUP BY often create an optimization barrier?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "optimization-barrier",
      "group-by",
      "join-pushdown"
    ],
    "interviewAnswer": "Because the database cannot easily push join predicates past a GROUP BY aggregate boundary, it must often materialize the entire aggregated subquery first before joining to the outer table.",
    "answer": "When a subquery contains `GROUP BY`, the engine cannot merge the subquery into the outer query block. It must execute the aggregation across the whole subquery relation before performing the outer join, unless advanced aggregate pushdown transformations are supported.",
    "explanation": "When a subquery contains `GROUP BY`, the engine cannot merge the subquery into the outer query block. It must execute the aggregation across the whole subquery relation before performing the outer join, unless advanced aggregate pushdown transformations are supported.",
    "importantPoints": [
      "GROUP BY prevents full query block merging.",
      "Forces materialization of summary tables before outer joining."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Subquery Optimization Barriers: Views with GROUP BY",
        "code": "-- Example demonstration for: Subquery Optimization Barriers: Views with GROUP BY\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Recursive CTE: Finding Graph Cycles",
    "question": "How do you detect cycles in a graph using a Recursive CTE?",
    "difficulty": "hard",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "recursive-cte",
      "cycle-detection",
      "graphs"
    ],
    "interviewAnswer": "Maintain an array or delimited string of visited node IDs in each iteration. In the recursive step, filter WHERE node_id != ALL(visited_nodes). If an ID is already in the array, terminate recursion or flag as a cycle.",
    "answer": "PostgreSQL provides `CYCLE id SET is_cycle USING path` syntax. In standard SQL, accumulate visited IDs in an array (`ARRAY[id]`): `WHERE NOT (child_id = ANY(visited_path))`. If a child ID is already present in `visited_path`, the edge is a back-edge indicating a cycle.",
    "explanation": "PostgreSQL provides `CYCLE id SET is_cycle USING path` syntax. In standard SQL, accumulate visited IDs in an array (`ARRAY[id]`): `WHERE NOT (child_id = ANY(visited_path))`. If a child ID is already present in `visited_path`, the edge is a back-edge indicating a cycle.",
    "importantPoints": [
      "Accumulate path array: path || next_id.",
      "Halt recursion when next_id already exists in path."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Recursive CTE: Finding Graph Cycles",
        "code": "-- Example demonstration for: Recursive CTE: Finding Graph Cycles\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Inline View vs Stored Database View",
    "question": "What is the architectural difference between an inline view (subquery) and a stored CREATE VIEW?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "views",
      "inline-views",
      "architecture"
    ],
    "interviewAnswer": "An inline view is an ad-hoc subquery defined within a single SQL statement. A stored view is a persistent metadata definition saved in the database catalog that can be reused by multiple queries and permissions policies. Both generate identical execution plans at runtime.",
    "answer": "An inline view (derived table) exists solely for the duration of one query execution. A stored view (`CREATE VIEW v AS ...`) saves the query text in the data dictionary. When queried, stored views are expanded into inline subqueries by the query rewriter.",
    "explanation": "An inline view (derived table) exists solely for the duration of one query execution. A stored view (`CREATE VIEW v AS ...`) saves the query text in the data dictionary. When queried, stored views are expanded into inline subqueries by the query rewriter.",
    "importantPoints": [
      "Stored views save SQL definitions in database catalog.",
      "Provide security layers and reusable abstractions.",
      "Performance is identical to derived subqueries because both are expanded into query trees."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Inline View vs Stored Database View",
        "code": "-- Example demonstration for: Inline View vs Stored Database View\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Subquery Returning NULL with NOT EXISTS vs NOT IN",
    "question": "Why does NOT EXISTS (SELECT NULL) behave differently from NOT IN (SELECT NULL)?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "not-exists",
      "not-in",
      "null-handling"
    ],
    "interviewAnswer": "EXISTS checks for the existence of ANY row returned by the subquery, regardless of whether row values are NULL. (SELECT NULL) returns 1 row, so EXISTS is TRUE and NOT EXISTS is FALSE. NOT IN evaluates value equality, which fails with NULL.",
    "answer": "EXISTS cares only about row count: 0 rows = FALSE, 1+ rows = TRUE. `SELECT NULL` returns a single row containing NULL, so `EXISTS (SELECT NULL)` evaluates to TRUE. In contrast, `NOT IN` tests value equality against elements in the set, and comparisons against NULL yield UNKNOWN.",
    "explanation": "EXISTS cares only about row count: 0 rows = FALSE, 1+ rows = TRUE. `SELECT NULL` returns a single row containing NULL, so `EXISTS (SELECT NULL)` evaluates to TRUE. In contrast, `NOT IN` tests value equality against elements in the set, and comparisons against NULL yield UNKNOWN.",
    "importantPoints": [
      "EXISTS tests row existence, not column values.",
      "SELECT NULL returns 1 row, satisfying EXISTS.",
      "Demonstrates why SELECT 1, SELECT NULL, and SELECT * are identical in EXISTS."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Subquery Returning NULL with NOT EXISTS vs NOT IN",
        "code": "-- Example demonstration for: Subquery Returning NULL with NOT EXISTS vs NOT IN\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Scalar Subquery vs CROSS JOIN for Constant Parameters",
    "question": "Compare using a scalar subquery in SELECT vs computing it in a CTE and CROSS JOINing.",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "cross-join",
      "scalar-subquery",
      "performance"
    ],
    "interviewAnswer": "A CROSS JOIN to a single-row CTE computes the scalar value once and joins it as a single row to all records. A scalar subquery in SELECT may be re-evaluated per row if the optimizer fails to cache it.",
    "answer": "Using a CTE with `CROSS JOIN (SELECT AVG(val) AS avg_v FROM t)` guarantees that the aggregate is calculated exactly once and broadcast to outer rows. It also allows multiple calculated metrics from that single pass to be referenced across multiple SELECT expressions.",
    "explanation": "Using a CTE with `CROSS JOIN (SELECT AVG(val) AS avg_v FROM t)` guarantees that the aggregate is calculated exactly once and broadcast to outer rows. It also allows multiple calculated metrics from that single pass to be referenced across multiple SELECT expressions.",
    "importantPoints": [
      "CROSS JOIN with 1-row table broadcasts values without duplication.",
      "Allows computing multiple aggregate metrics in one pass."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Scalar Subquery vs CROSS JOIN for Constant Parameters",
        "code": "-- Example demonstration for: Scalar Subquery vs CROSS JOIN for Constant Parameters\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Row-Level Subqueries in Check Constraints",
    "question": "Can you use a subquery inside a standard SQL CHECK constraint? What are the alternatives?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "constraints",
      "check-constraint",
      "triggers"
    ],
    "interviewAnswer": "Most relational databases (PostgreSQL, MySQL, SQL Server) forbid subqueries in CHECK constraints to prevent complex cross-table locking and non-deterministic validation. The alternatives are database triggers, materialized view constraints, or foreign keys.",
    "answer": "Standard CHECK constraints are designed for atomic row-level domain validation (e.g. `salary > 0`). Allowing subqueries would require evaluating the constraint whenever any related table changed. Cross-table validation must be implemented via BEFORE INSERT/UPDATE triggers or application logic.",
    "explanation": "Standard CHECK constraints are designed for atomic row-level domain validation (e.g. `salary > 0`). Allowing subqueries would require evaluating the constraint whenever any related table changed. Cross-table validation must be implemented via BEFORE INSERT/UPDATE triggers or application logic.",
    "importantPoints": [
      "Subqueries are prohibited in CHECK constraints across major RDBMS engines.",
      "Cross-table integrity must be enforced via triggers or foreign keys."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Row-Level Subqueries in Check Constraints",
        "code": "-- Example demonstration for: Row-Level Subqueries in Check Constraints\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Window Functions Inside Subqueries for Pagination",
    "question": "How do you paginate large result sets using a ROW_NUMBER() subquery?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "window-functions",
      "pagination",
      "row-number"
    ],
    "interviewAnswer": "Assign ROW_NUMBER() OVER (ORDER BY col) in a CTE or subquery, then filter WHERE row_num BETWEEN :offset + 1 AND :offset + :limit in the outer query.",
    "answer": "Prior to the introduction of `OFFSET ... FETCH NEXT`, standard ANSI pagination wrapped a `ROW_NUMBER()` window function in a derived table: `WITH Paged AS (SELECT *, ROW_NUMBER() OVER (ORDER BY id) AS rn FROM items) SELECT * FROM Paged WHERE rn BETWEEN 21 AND 40;`.",
    "explanation": "Prior to the introduction of `OFFSET ... FETCH NEXT`, standard ANSI pagination wrapped a `ROW_NUMBER()` window function in a derived table: `WITH Paged AS (SELECT *, ROW_NUMBER() OVER (ORDER BY id) AS rn FROM items) SELECT * FROM Paged WHERE rn BETWEEN 21 AND 40;`.",
    "importantPoints": [
      "Enables consistent pagination.",
      "Safe against duplicate sort keys when primary key is appended to ORDER BY."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Window Functions Inside Subqueries for Pagination",
        "code": "-- Example demonstration for: Window Functions Inside Subqueries for Pagination\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "title": "Eliminating Subqueries Using Joins for Write Operations",
    "question": "How do you rewrite DELETE with an IN subquery into an INNER JOIN DELETE in MySQL and PostgreSQL?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "subqueries",
      "delete",
      "joins",
      "syntax"
    ],
    "interviewAnswer": "MySQL: DELETE o FROM orders o INNER JOIN cancelled_accounts c ON o.user_id = c.user_id; PostgreSQL: DELETE FROM orders USING cancelled_accounts WHERE orders.user_id = cancelled_accounts.user_id.",
    "answer": "Joining tables directly in DELETE statements allows the query planner to choose optimal hash or merge joins, avoiding slow subquery execution: MySQL uses `DELETE alias FROM table alias JOIN ...`; PostgreSQL uses `DELETE FROM table USING other_table WHERE ...`.",
    "explanation": "Joining tables directly in DELETE statements allows the query planner to choose optimal hash or merge joins, avoiding slow subquery execution: MySQL uses `DELETE alias FROM table alias JOIN ...`; PostgreSQL uses `DELETE FROM table USING other_table WHERE ...`.",
    "importantPoints": [
      "Significantly faster on large datasets than DELETE WHERE id IN (SELECT ...).",
      "MySQL uses explicit target alias; PostgreSQL uses USING clause."
    ],
    "commonMistakes": [
      "Ignoring performance on large tables or overlooking NULL semantics."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Eliminating Subqueries Using Joins for Write Operations",
        "code": "-- Example demonstration for: Eliminating Subqueries Using Joins for Write Operations\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
