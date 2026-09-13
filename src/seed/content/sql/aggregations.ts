import { SeedQuestion } from '../types';

export const aggregationsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "COUNT(*) vs COUNT(column_name) vs COUNT(1)",
    "question": "What is the difference between COUNT(*), COUNT(column_name), and COUNT(1) in SQL?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "aggregations",
      "count",
      "null-handling"
    ],
    "interviewAnswer": "COUNT(*) counts every row in the result set regardless of NULL values. COUNT(column_name) only counts rows where that specific column is NOT NULL. COUNT(1) passes the literal 1 for each row, and modern query optimizers treat COUNT(1) identically to COUNT(*), resulting in the exact same execution plan.",
    "answer": "COUNT(*) evaluates the entire row and returns the total number of rows matching the query criteria, including rows where all or some columns are NULL. COUNT(column_name) specifically checks the designated column and skips any row where that column evaluates to NULL. COUNT(1) evaluates the constant literal 1 for each row; modern relational query engines treat COUNT(*) and COUNT(1) identically with zero performance difference.",
    "explanation": "A frequent misconception is that COUNT(1) is faster than COUNT(*) because it does not inspect all columns. In modern ANSI SQL database engines (PostgreSQL, MySQL InnoDB, SQL Server, Oracle), COUNT(*) is recognized by the parser as an aggregate instruction over the table cardinality. If a secondary index exists, the optimizer will simply scan the smallest index tree to tally rows without reading table pages.",
    "importantPoints": [
      "COUNT(*) includes NULL rows and counts the entire row cardinality.",
      "COUNT(column) excludes NULL values for that particular column.",
      "COUNT(1) and COUNT(*) have identical execution plans in modern optimizers.",
      "COUNT(DISTINCT column) counts unique non-NULL values."
    ],
    "commonMistakes": [
      "Believing COUNT(1) is faster than COUNT(*) in modern relational databases.",
      "Expecting COUNT(column) to return the total row count when the column contains NULLs.",
      "Assuming COUNT(*) performs a full table scan when a narrower secondary index is available."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "COUNT(*) vs COUNT(column) with NULLs",
        "code": "-- Table with 4 rows: id 1 (score 100), id 2 (score NULL), id 3 (score 50), id 4 (score NULL)\nSELECT \n  COUNT(*) AS total_rows,        -- Returns 4\n  COUNT(1) AS count_one,         -- Returns 4\n  COUNT(score) AS non_null_scores, -- Returns 2\n  COUNT(DISTINCT score) AS unique_scores -- Returns 2 (100 and 50)\nFROM test_scores;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "WHERE vs HAVING Clause Differences",
    "question": "What is the fundamental difference between the WHERE and HAVING clauses in SQL queries?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "aggregations",
      "where",
      "having",
      "group-by"
    ],
    "interviewAnswer": "WHERE filters individual raw rows BEFORE any aggregation or GROUP BY operation takes place, and cannot reference aggregate functions. HAVING filters grouped rows AFTER aggregation has occurred, and is designed specifically to test conditions on aggregate expressions like SUM, AVG, or COUNT.",
    "answer": "The WHERE clause operates on individual rows as they are read from tables before grouping. It uses indexes efficiently to prune rows early in the pipeline. The HAVING clause operates on the synthesized summary rows produced by the GROUP BY clause. Because HAVING executes after grouping, it can evaluate aggregate expressions (e.g., HAVING COUNT(*) > 5), whereas WHERE cannot.",
    "explanation": "From a query lifecycle perspective: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT/OFFSET. Filtering rows with WHERE reduces the number of records that must be held in memory or sorted for the GROUP BY phase. Any filter condition that does not involve an aggregate function should always be placed in the WHERE clause for performance.",
    "importantPoints": [
      "WHERE filters before grouping; HAVING filters after grouping.",
      "WHERE cannot contain aggregate functions (e.g., WHERE SUM(amount) > 100 is invalid).",
      "HAVING can filter on aggregate functions (e.g., HAVING SUM(amount) > 100).",
      "Placing non-aggregate filters in WHERE rather than HAVING improves index utilization and performance."
    ],
    "commonMistakes": [
      "Using HAVING to filter non-aggregated columns that could have been pruned in WHERE.",
      "Trying to use aggregate functions directly in the WHERE clause.",
      "Thinking HAVING replaces WHERE entirely when GROUP BY is present."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Combining WHERE and HAVING Correctly",
        "code": "SELECT department_id, AVG(salary) AS avg_dept_salary\nFROM employees\nWHERE status = 'Active'               -- Row-level filter evaluated first\nGROUP BY department_id\nHAVING AVG(salary) > 75000           -- Aggregate filter evaluated on grouped results\nORDER BY avg_dept_salary DESC;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Standard Aggregate Functions and NULL Handling",
    "question": "How do standard aggregate functions (SUM, AVG, MIN, MAX) handle NULL values in SQL?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "aggregations",
      "null-handling",
      "avg",
      "sum"
    ],
    "interviewAnswer": "All standard aggregate functions (SUM, AVG, MIN, MAX) ignore NULL values automatically. The notable exception is COUNT(*), which counts all rows. For AVG, this means the divisor is the count of non-NULL values, not the total row count.",
    "answer": "SQL standard aggregate functions systematically discard NULL values before computing their results. If a column has values [10, 20, NULL], SUM is 30, MIN is 10, MAX is 20, and AVG is 15 (30 divided by 2 non-NULL items, not 3). If all rows in a group contain NULL for the aggregated column, SUM, AVG, MIN, and MAX return NULL, while COUNT returns 0.",
    "explanation": "When computing averages where NULL represents zero business value (e.g., zero sales), omitting COALESCE will skew the average upward because NULL rows will not contribute to the denominator. To treat NULL as 0 in an average, you must explicitly wrap the column in COALESCE(column, 0).",
    "importantPoints": [
      "SUM, AVG, MIN, and MAX ignore NULL values.",
      "AVG computes SUM(col) / COUNT(col), not SUM(col) / COUNT(*).",
      "If all values are NULL, SUM/AVG/MIN/MAX return NULL; COUNT returns 0.",
      "Use COALESCE(col, 0) inside AVG if NULL values should be counted as zero."
    ],
    "commonMistakes": [
      "Expecting AVG to divide by total rows instead of non-null rows.",
      "Assuming SUM on an empty table returns 0 instead of NULL.",
      "Forgetting that wrapping a column in COALESCE prevents index-only scans for MIN/MAX."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Demonstrating Aggregate NULL Behavior",
        "code": "-- Rows: (10), (20), (NULL)\nSELECT \n  SUM(val) AS sum_val,             -- Returns 30\n  AVG(val) AS avg_ignoring_null,   -- Returns 15 (30 / 2)\n  AVG(COALESCE(val, 0)) AS avg_0,  -- Returns 10 (30 / 3)\n  MIN(val) AS min_val,             -- Returns 10\n  MAX(val) AS max_val              -- Returns 20\nFROM (VALUES (10), (20), (NULL)) AS t(val);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Conditional Aggregation with CASE WHEN",
    "question": "What is conditional aggregation, and how is it implemented using CASE expressions?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "conditional-aggregation",
      "case-when",
      "pivot"
    ],
    "interviewAnswer": "Conditional aggregation embeds CASE statements inside aggregate functions (like SUM, COUNT, or AVG) to selectively aggregate subsets of data in a single table pass without requiring multiple queries or subqueries.",
    "answer": "Conditional aggregation computes multiple selective metrics simultaneously. By placing a CASE statement inside an aggregate function, rows that do not meet the condition evaluate to NULL (or 0), which aggregates gracefully ignore. This technique is widely used for pivoting rows into columns, calculating conversion rates, and computing side-by-side dimensional metrics.",
    "explanation": "Instead of running three separate queries with different WHERE clauses or using costly self-joins, conditional aggregation scans the table once. In modern PostgreSQL and SQLite, the SQL standard `FILTER (WHERE condition)` clause is also available as a cleaner syntax alternative to `CASE WHEN`.",
    "importantPoints": [
      "Allows pivoting rows to columns in a single table scan.",
      "Uses SUM(CASE WHEN condition THEN val ELSE 0 END) or COUNT(CASE WHEN condition THEN 1 END).",
      "COUNT ignores the omitted ELSE because CASE defaults to NULL when unmatched.",
      "Modern SQL engines also support the ANSI standard FILTER (WHERE ...) clause."
    ],
    "commonMistakes": [
      "Using COUNT(CASE WHEN cond THEN 0 END) without realizing 0 is NOT NULL and gets counted.",
      "Writing multiple subqueries when a single conditional aggregate pass is sufficient.",
      "Forgetting the ELSE 0 in SUM, which defaults to NULL if no rows match."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Conditional Aggregation Patterns",
        "code": "SELECT \n  department_id,\n  COUNT(*) AS total_employees,\n  SUM(CASE WHEN gender = 'F' THEN 1 ELSE 0 END) AS female_count,\n  SUM(CASE WHEN gender = 'M' THEN 1 ELSE 0 END) AS male_count,\n  -- Modern ANSI SQL FILTER syntax (PostgreSQL / SQLite):\n  COUNT(*) FILTER (WHERE salary > 100000) AS high_earners,\n  AVG(CASE WHEN status = 'Active' THEN salary END) AS active_avg_salary\nFROM employees\nGROUP BY department_id;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Scenario: Latest Record for Every User",
    "question": "You need the latest record for every user. How would you solve this scenario, and what are the trade-offs between approaches?",
    "difficulty": "medium",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "latest-record",
      "row-number"
    ],
    "interviewAnswer": "The cleanest and most scalable approach is using ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) within a CTE or subquery, filtering WHERE rn = 1. Alternative approaches include a correlated subquery, a JOIN with a MAX(created_at) GROUP BY aggregate, or DISTINCT ON in PostgreSQL.",
    "answer": "Finding the latest record per entity can be solved via four primary techniques: 1) Window functions with ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) filtering rn = 1; 2) INNER JOIN with a derived table of (user_id, MAX(created_at)); 3) Correlated subquery checking WHERE created_at = (SELECT MAX(...)); 4) Engine-specific features like PostgreSQL DISTINCT ON (user_id).",
    "explanation": "The window function approach requires a single sort or index scan over (user_id, created_at DESC). If an index on (user_id, created_at DESC) exists, PostgreSQL can perform an index scan, and MySQL 8+ / SQL Server can execute this with minimal memory overhead. The GROUP BY + JOIN approach requires two passes over the data or a hash join, and fails or duplicates rows if created_at is not unique unless tied to a primary key.",
    "importantPoints": [
      "ROW_NUMBER() handles tie-breaking deterministically when ordering includes primary key.",
      "MAX(created_at) join approach duplicates rows if multiple records share the exact latest timestamp.",
      "A composite index on (user_id, created_at DESC) makes the window function solution highly performant.",
      "PostgreSQL DISTINCT ON (user_id) ORDER BY user_id, created_at DESC is the fastest syntax in Postgres."
    ],
    "commonMistakes": [
      "Using MAX(created_at) and joining on user_id and created_at without checking for duplicate timestamps.",
      "Selecting non-aggregated columns in GROUP BY without understanding functional dependency errors.",
      "Writing an N+1 correlated subquery that scans the table repeatedly for every user row."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Solving Latest Record per User",
        "code": "-- Approach 1: ROW_NUMBER() CTE (Standard ANSI SQL)\nWITH RankedOrders AS (\n  SELECT \n    order_id, user_id, amount, order_date,\n    ROW_NUMBER() OVER (\n      PARTITION BY user_id \n      ORDER BY order_date DESC, order_id DESC\n    ) AS rn\n  FROM orders\n)\nSELECT order_id, user_id, amount, order_date\nFROM RankedOrders\nWHERE rn = 1;\n\n-- Approach 2: PostgreSQL DISTINCT ON\n-- SELECT DISTINCT ON (user_id) order_id, user_id, amount, order_date\n-- FROM orders ORDER BY user_id, order_date DESC, order_id DESC;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "ROW_NUMBER() vs RANK() vs DENSE_RANK()",
    "question": "Explain the operational differences between ROW_NUMBER(), RANK(), and DENSE_RANK() with examples of ties.",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "rank",
      "row-number"
    ],
    "interviewAnswer": "All three assign sequential rankings based on an ORDER BY clause. ROW_NUMBER assigns distinct consecutive integers (1, 2, 3, 4) arbitrarily breaking ties. RANK assigns identical numbers to ties and leaves gaps equal to the tie count (1, 2, 2, 4). DENSE_RANK assigns identical numbers to ties without leaving any gaps (1, 2, 2, 3).",
    "answer": "Given tied values (such as test scores 100, 90, 90, 80): ROW_NUMBER() assigns unique ascending sequential integers: 1, 2, 3, 4. RANK() assigns the same rank to duplicate values, but skips subsequent rank numbers to reflect how many items came before: 1, 2, 2, 4. DENSE_RANK() assigns the same rank to duplicate values but never skips integers: 1, 2, 2, 3.",
    "explanation": "Choosing between these depends on business rules. If you need the top 3 highest unique salaries, use DENSE_RANK() <= 3. If you need Olympic medal rankings where two people sharing silver push the next to 4th place (no bronze), use RANK(). If you need pagination or exactly one winner per partition regardless of ties, use ROW_NUMBER().",
    "importantPoints": [
      "ROW_NUMBER(): Always consecutive, no duplicates (1, 2, 3, 4). Non-deterministic tie breaking unless fully sorted.",
      "RANK(): Duplicates for ties, leaves gaps corresponding to tie count (1, 2, 2, 4).",
      "DENSE_RANK(): Duplicates for ties, never leaves gaps (1, 2, 2, 3).",
      "Requires OVER (ORDER BY col) clause."
    ],
    "commonMistakes": [
      "Using RANK() to find the top N distinct values (e.g. 2nd highest salary) when ties cause gap skips.",
      "Assuming ROW_NUMBER() produces deterministic ordering when the ORDER BY column has identical values.",
      "Forgetting that window functions cannot be used directly in WHERE without a CTE or subquery."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Comparing Window Ranking Functions",
        "code": "SELECT \n  student_name,\n  score,\n  ROW_NUMBER() OVER (ORDER BY score DESC) AS row_num,\n  RANK()       OVER (ORDER BY score DESC) AS rnk,\n  DENSE_RANK() OVER (ORDER BY score DESC) AS dense_rnk\nFROM exam_results;\n-- Output for scores (100, 90, 90, 80):\n-- Alice  100 -> row_num: 1, rnk: 1, dense_rnk: 1\n-- Bob     90 -> row_num: 2, rnk: 2, dense_rnk: 2\n-- Charlie 90 -> row_num: 3, rnk: 2, dense_rnk: 2\n-- Dave    80 -> row_num: 4, rnk: 4, dense_rnk: 3"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Window Framing: ROWS vs RANGE BETWEEN",
    "question": "What is the difference between ROWS and RANGE in SQL window function frame specifications?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "window-frame",
      "rows-between"
    ],
    "interviewAnswer": "ROWS defines the window frame by counting physical row offsets relative to the current row. RANGE defines the frame logically based on values in the ORDER BY column, treating all rows with identical values (peer rows) as part of the same frame boundary.",
    "answer": "The frame specification determines which rows within the partition are included in aggregate calculations. ROWS operates on physical row offsets: `ROWS BETWEEN 1 PRECEDING AND CURRENT ROW` includes exactly 2 physical rows. RANGE operates on value offsets: `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` includes all rows up to and including all peers having the same ORDER BY value as the current row.",
    "explanation": "The default window frame when an ORDER BY clause is provided without an explicit frame is `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`. This default can cause performance degradation and unexpected calculation spikes because peer rows are evaluated together. In many databases, specifying `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` is significantly faster because it skips peer-group buffering.",
    "importantPoints": [
      "ROWS measures physical row positions (e.g. 2 PRECEDING).",
      "RANGE measures logical value distances based on the ORDER BY column.",
      "Default frame with ORDER BY is RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW.",
      "RANGE can cause unexpected duplicate cumulative totals when multiple rows share identical sort values.",
      "ROWS is typically faster to compute than RANGE in modern database engines."
    ],
    "commonMistakes": [
      "Relying on the default window frame when calculating cumulative sums with duplicate sort values.",
      "Assuming ROWS and RANGE produce identical results when tie values exist.",
      "Omitting the frame specification and experiencing memory-intensive peer-group buffering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Demonstrating ROWS vs RANGE with Duplicate Dates",
        "code": "-- Two transactions on the same day (date: 2026-01-01, amounts: 100, 200)\nSELECT \n  txn_date,\n  amount,\n  -- RANGE sums both duplicate dates together in the running total:\n  SUM(amount) OVER (\n    ORDER BY txn_date \n    RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n  ) AS range_running_total, -- Both rows return 300!\n  \n  -- ROWS sums strictly row-by-row:\n  SUM(amount) OVER (\n    ORDER BY txn_date, txn_id \n    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n  ) AS rows_running_total  -- Row 1 returns 100, Row 2 returns 300\nFROM transactions;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Calculating Moving Averages and Running Totals",
    "question": "How do you calculate a 7-day moving average and a cumulative running total in SQL?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "moving-average",
      "running-total"
    ],
    "interviewAnswer": "Running totals use SUM(amount) OVER (PARTITION BY account_id ORDER BY txn_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW). A 7-row moving average uses AVG(amount) OVER (PARTITION BY account_id ORDER BY txn_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW).",
    "answer": "Window functions calculate running totals and moving averages without collapsing individual rows. Running totals accumulate from the start of the partition up to the current row. Moving averages define a sliding window frame encompassing the current row and a specified number of preceding rows.",
    "explanation": "Notice the distinction between a 7-row moving average (`ROWS BETWEEN 6 PRECEDING AND CURRENT ROW`) and a true 7-day calendar moving average. If dates are missing, 6 preceding rows might span months. For true calendar moving averages, either dense calendar dates must be joined first, or modern PostgreSQL/MySQL 8 RANGE intervals (`RANGE BETWEEN INTERVAL 6 DAYS PRECEDING AND CURRENT ROW`) must be used.",
    "importantPoints": [
      "Cumulative sum: SUM(val) OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW).",
      "Moving average: AVG(val) OVER (ORDER BY date ROWS BETWEEN N PRECEDING AND CURRENT ROW).",
      "Account for missing dates: row counts do not equal calendar day spans if days have zero transactions.",
      "Windowing avoids expensive self-joins."
    ],
    "commonMistakes": [
      "Confusing N-row moving average with N-day moving average when there are gaps in data.",
      "Omitting the explicit ROWS frame, defaulting to RANGE and skewing calculations on duplicate dates.",
      "Attempting to calculate running totals using quadratic self-joins (WHERE t1.date <= t2.date)."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Running Total and 7-Row Moving Average",
        "code": "SELECT \n  sale_date,\n  revenue,\n  SUM(revenue) OVER (\n    ORDER BY sale_date \n    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n  ) AS cumulative_revenue,\n  AVG(revenue) OVER (\n    ORDER BY sale_date \n    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\n  ) AS moving_avg_7_rows\nFROM daily_sales\nORDER BY sale_date;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "LEAD() and LAG() Value Access Functions",
    "question": "How do LEAD() and LAG() window functions work, and how are they used to calculate month-over-month growth?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "lead",
      "lag",
      "growth"
    ],
    "interviewAnswer": "LAG() accesses data from a previous row at a specified physical offset within the partition, while LEAD() accesses data from a subsequent row. They are ideal for comparing current values against past or future periods without self-joining.",
    "answer": "LAG(expression, offset, default) looks backward in the ordered partition, returning the value from `offset` rows prior (default offset is 1; default fallback is NULL). LEAD(expression, offset, default) looks forward by `offset` rows. To calculate month-over-month (MoM) revenue growth: subtract LAG(revenue, 1) from current revenue, divided by LAG(revenue, 1).",
    "explanation": "Before window functions were introduced, comparing adjacent records required an expensive theta self-join on timestamps or generated sequential IDs. LAG and LEAD operate via single-pass streaming cursors over sorted partitions, reducing query complexity from O(N^2) to O(N log N).",
    "importantPoints": [
      "LAG(col, offset, default_value) reads backward.",
      "LEAD(col, offset, default_value) reads forward.",
      "PARTITION BY resets the boundary (e.g. per product category).",
      "ORDER BY is required to establish deterministic row sequence."
    ],
    "commonMistakes": [
      "Omitting the fallback default in LAG, leading to division by zero or NULL arithmetic bugs in month 1.",
      "Forgetting PARTITION BY when calculating metric deltas across multiple independent entities.",
      "Using LAG in a WHERE clause directly instead of wrapping in a CTE."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Calculating Month-over-Month Revenue Growth",
        "code": "WITH MonthlySales AS (\n  SELECT \n    DATE_TRUNC('month', order_date) AS sales_month,\n    SUM(total_amount) AS revenue\n  FROM orders\n  GROUP BY DATE_TRUNC('month', order_date)\n)\nSELECT \n  sales_month,\n  revenue,\n  LAG(revenue, 1) OVER (ORDER BY sales_month) AS prev_month_revenue,\n  ROUND(\n    (revenue - LAG(revenue, 1) OVER (ORDER BY sales_month)) * 100.0 / \n    NULLIF(LAG(revenue, 1) OVER (ORDER BY sales_month), 0),\n    2\n  ) AS mom_growth_pct\nFROM MonthlySales\nORDER BY sales_month;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "GROUPING SETS, ROLLUP, and CUBE Multi-Dimensional Aggregation",
    "question": "Explain the purpose and differences between GROUPING SETS, ROLLUP, and CUBE.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "grouping-sets",
      "rollup",
      "cube",
      "olap"
    ],
    "interviewAnswer": "GROUPING SETS allows you to define exact multiple grouping combinations in one query. ROLLUP produces hierarchical aggregations with running subtotals and grand totals. CUBE produces all possible permutations of groupings across specified dimensions.",
    "answer": "These SQL extensions enable multi-level reporting in a single table scan instead of chaining multiple UNION ALL queries. GROUPING SETS ((a, b), (a), ()) computes only the listed group combinations. ROLLUP(a, b) generates hierarchical aggregations: (a, b), (a), and (). CUBE(a, b) generates the full power set: (a, b), (a), (b), and ().",
    "explanation": "When ROLLUP or CUBE generates subtotals, aggregated dimensions in summary rows are set to NULL. To differentiate between a real stored NULL value and an engine-generated subtotal NULL, SQL provides the `GROUPING(column)` function, which returns 1 for a subtotal row and 0 for an actual data group.",
    "importantPoints": [
      "ROLLUP(a, b, c) produces N+1 grouping levels hierarchically: (a,b,c), (a,b), (a), ().",
      "CUBE(a, b) produces 2^N grouping combinations: (a,b), (a), (b), ().",
      "GROUPING SETS computes only explicitly specified dimension subsets.",
      "The GROUPING() function identifies generated subtotal/grand total rows."
    ],
    "commonMistakes": [
      "Using multiple UNION ALL queries instead of a single ROLLUP or GROUPING SETS query.",
      "Misinterpreting NULL values in reports without using GROUPING() to detect grand totals.",
      "Applying CUBE on too many dimensions, causing exponential row output (2^N)."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Using ROLLUP and the GROUPING() Function",
        "code": "SELECT \n  CASE WHEN GROUPING(region) = 1 THEN 'All Regions' ELSE region END AS region,\n  CASE WHEN GROUPING(year) = 1 THEN 'All Years' ELSE CAST(year AS VARCHAR) END AS year,\n  SUM(sales_amount) AS total_sales\nFROM sales\nGROUP BY ROLLUP(region, year)\nORDER BY region, year;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "NTILE() for Bucketing and Quantile Distribution",
    "question": "How does the NTILE() window function work, and how is it used for calculating percentiles or deciles?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "ntile",
      "percentiles"
    ],
    "interviewAnswer": "NTILE(n) divides an ordered partition into n roughly equal buckets and assigns bucket numbers 1 through n to each row. If rows cannot be divided evenly, the earlier buckets receive the extra rows.",
    "answer": "NTILE(buckets) is a distribution window function. For example, NTILE(4) divides rows into quartiles, and NTILE(10) divides rows into deciles. If a partition has 10 rows and NTILE(4) is applied: bucket 1 gets 3 rows, bucket 2 gets 3 rows, bucket 3 gets 2 rows, and bucket 4 gets 2 rows.",
    "explanation": "NTILE is valuable for cohort analysis, identifying top 10% spenders, distributing workload across N batch workers, or creating quartile summaries. However, if true statistical continuous percentiles are needed (e.g. median or P95), PERCENTILE_CONT or PERCENTILE_DISC are preferred over NTILE.",
    "importantPoints": [
      "NTILE(n) assigns bucket numbers from 1 to n.",
      "Surplus rows are allocated to buckets starting from bucket 1 onwards.",
      "ORDER BY inside the OVER clause is mandatory.",
      "NTILE assigns row counts evenly regardless of value ties."
    ],
    "commonMistakes": [
      "Expecting NTILE to group identical values into the same bucket when tie values cross bucket boundaries.",
      "Assuming all buckets have identical row counts when row count is not a multiple of n.",
      "Using NTILE(100) on fewer than 100 rows and expecting all percentiles 1-100 to exist."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Classifying Users into Spending Quartiles with NTILE",
        "code": "WITH UserSpending AS (\n  SELECT \n    user_id,\n    SUM(order_amount) AS total_spent,\n    NTILE(4) OVER (ORDER BY SUM(order_amount) DESC) AS spending_quartile\n  FROM orders\n  GROUP BY user_id\n)\nSELECT \n  user_id,\n  total_spent,\n  CASE spending_quartile\n    WHEN 1 THEN 'Top Spender (Q1)'\n    WHEN 2 THEN 'Above Average (Q2)'\n    WHEN 3 THEN 'Below Average (Q3)'\n    WHEN 4 THEN 'Low Spender (Q4)'\n  END AS customer_tier\nFROM UserSpending;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "FIRST_VALUE() and LAST_VALUE() Window Functions",
    "question": "How do FIRST_VALUE() and LAST_VALUE() work, and what is the common trap with LAST_VALUE()?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "first-value",
      "last-value"
    ],
    "interviewAnswer": "FIRST_VALUE() returns the value of the first row in the window frame. LAST_VALUE() returns the value of the last row in the window frame. The major trap with LAST_VALUE() is that the default window frame ends at CURRENT ROW, so LAST_VALUE() simply returns the current row value unless an explicit frame of BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING is specified.",
    "answer": "FIRST_VALUE(col) and LAST_VALUE(col) evaluate within the dynamic frame defined by the window clause. Because the default window frame for an ORDER BY query is `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`, LAST_VALUE() will only look up to the CURRENT ROW, effectively returning the current row value. To make LAST_VALUE() inspect the entire partition, you must explicitly specify `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING`.",
    "explanation": "Many developers debug for hours wondering why LAST_VALUE() is not returning the highest or newest item in the group. Understanding the ANSI default frame behavior is crucial. Alternatively, reversing the ORDER BY direction and using FIRST_VALUE() avoids having to override the window frame.",
    "importantPoints": [
      "FIRST_VALUE() returns the first row within the active frame.",
      "LAST_VALUE() returns the last row within the active frame.",
      "Default frame ends at CURRENT ROW, breaking naive LAST_VALUE() calls.",
      "Fix LAST_VALUE() by adding ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING.",
      "Or invert ORDER BY and use FIRST_VALUE() instead."
    ],
    "commonMistakes": [
      "Calling LAST_VALUE() with default framing and expecting it to find the partition maximum.",
      "Failing to specify deterministic ordering, causing arbitrary returns on duplicate order values."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Fixing the LAST_VALUE() Default Frame Trap",
        "code": "SELECT \n  employee_id,\n  department_id,\n  salary,\n  -- Correct FIRST_VALUE:\n  FIRST_VALUE(salary) OVER (\n    PARTITION BY department_id \n    ORDER BY salary ASC\n  ) AS lowest_dept_salary,\n  \n  -- WRONG: returns current row salary because frame ends at CURRENT ROW\n  LAST_VALUE(salary) OVER (\n    PARTITION BY department_id \n    ORDER BY salary ASC\n  ) AS buggy_highest_salary,\n  \n  -- CORRECT: expands frame to the entire partition\n  LAST_VALUE(salary) OVER (\n    PARTITION BY department_id \n    ORDER BY salary ASC\n    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING\n  ) AS correct_highest_salary\nFROM employees;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "String Aggregation: GROUP_CONCAT vs STRING_AGG",
    "question": "How do you concatenate strings across grouped rows in MySQL, PostgreSQL, and SQL Server?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "aggregations",
      "string-agg",
      "group-concat",
      "string-manipulation"
    ],
    "interviewAnswer": "MySQL uses GROUP_CONCAT(col SEPARATOR ', '), PostgreSQL uses STRING_AGG(col, ', '), and SQL Server 2017+ uses STRING_AGG(col, ', '). All allow specifying delimiters and custom ordering of concatenated elements.",
    "answer": "Aggregating string values across rows into a delimited single string is handled differently across RDBMS dialects: MySQL uses `GROUP_CONCAT(col ORDER BY col SEPARATOR ',')`; PostgreSQL uses `STRING_AGG(col, ',' ORDER BY col)`; SQL Server 2017+ uses `STRING_AGG(col, ',') WITHIN GROUP (ORDER BY col)`; Oracle uses `LISTAGG(col, ',') WITHIN GROUP (ORDER BY col)`.",
    "explanation": "In MySQL, GROUP_CONCAT has a default buffer limit controlled by `group_concat_max_len` (defaults to 1024 bytes in older versions or 1MB in MySQL 8), which truncates silently if exceeded. In PostgreSQL and SQL Server, STRING_AGG expands dynamically to the maximum string size limit (1GB in Postgres, 2GB in SQL Server).",
    "importantPoints": [
      "MySQL: GROUP_CONCAT(expr ORDER BY expr SEPARATOR ',').",
      "PostgreSQL: STRING_AGG(expr, delimiter ORDER BY expr).",
      "SQL Server: STRING_AGG(expr, delimiter) WITHIN GROUP (ORDER BY expr).",
      "Watch out for MySQL group_concat_max_len truncation limit."
    ],
    "commonMistakes": [
      "Assuming GROUP_CONCAT works identically in PostgreSQL or SQL Server.",
      "Forgetting that MySQL truncates strings when group_concat_max_len is too low.",
      "Omitting ordering inside the string aggregate when output sequence matters."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Cross-Dialect String Aggregation",
        "code": "-- PostgreSQL:\nSELECT department_id, STRING_AGG(employee_name, ', ' ORDER BY employee_name) AS team_members\nFROM employees GROUP BY department_id;\n\n-- MySQL:\n-- SELECT department_id, GROUP_CONCAT(employee_name ORDER BY employee_name SEPARATOR ', ') AS team_members\n-- FROM employees GROUP BY department_id;\n\n-- SQL Server:\n-- SELECT department_id, STRING_AGG(employee_name, ', ') WITHIN GROUP (ORDER BY employee_name) AS team_members\n-- FROM employees GROUP BY department_id;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Execution Mechanisms of GROUP BY: Hash Aggregate vs Stream/Sort Aggregate",
    "question": "How does an RDBMS execute a GROUP BY query under the hood? Compare Hash Aggregate and Stream/Sort Aggregate.",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "hash-aggregate",
      "stream-aggregate",
      "query-plan"
    ],
    "interviewAnswer": "Query engines execute GROUP BY using either Hash Aggregation or Stream/Sort Aggregation. Stream Aggregate requires sorted input and groups consecutive values on the fly with low memory. Hash Aggregate builds an in-memory hash table of unique group keys, which is faster for unsorted data but requires more RAM and can spill to disk.",
    "answer": "When executing a GROUP BY: 1) Stream Aggregate (or Group Aggregate) reads data already ordered by the group columns (either via a B-Tree index scan or an explicit SORT operator). As it streams through, it aggregates rows until the key value changes, requiring negligible memory. 2) Hash Aggregate creates an in-memory hash table where keys are grouping values and values are accumulators. It requires no preliminary sorting, but if the number of unique groups exceeds available work memory, partitions spill to temporary disk files.",
    "explanation": "An index covering the GROUP BY columns enables the optimizer to choose Stream Aggregate without an explicit sort step, providing optimal execution speed. For queries with large cardinality and no index, Hash Aggregation is generally preferred by modern optimizers over sorting millions of rows.",
    "importantPoints": [
      "Stream Aggregate: Requires sorted input; low memory footprint; O(N) streaming.",
      "Hash Aggregate: Does not require sorted input; allocates hash table in memory; O(N) average time.",
      "Index matching GROUP BY columns eliminates the expensive SORT operator.",
      "Spilling hash tables to tempdb/work_mem disk causes major performance degradation."
    ],
    "commonMistakes": [
      "Not realizing that an unindexed GROUP BY requires either a full Sort or Hash spill.",
      "Grouping on high-cardinality columns without sufficient work_mem in PostgreSQL.",
      "Assuming GROUP BY automatically returns sorted output (in MySQL 8 and PostgreSQL it does not)."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Optimizing GROUP BY with an Index",
        "code": "-- Unindexed GROUP BY forces Hash Aggregate or external Merge Sort:\nEXPLAIN ANALYZE\nSELECT department_id, COUNT(*), SUM(salary)\nFROM employees\nGROUP BY department_id;\n\n-- Adding an index allows instantaneous Stream Aggregate:\nCREATE INDEX idx_emp_dept ON employees(department_id, salary);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Finding Gaps and Islands in Sequential Data",
    "question": "What is the \"Gaps and Islands\" problem in SQL, and how do you solve the islands problem using window functions?",
    "difficulty": "hard",
    "questionType": "Coding",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "gaps-and-islands"
    ],
    "interviewAnswer": "The Gaps and Islands problem involves identifying contiguous sequences (islands) and missing intervals (gaps) in ordered data. The classic islands solution calculates the difference between the sequence value and a ROW_NUMBER(); this difference remains constant across consecutive values, creating an island grouping identifier.",
    "answer": "In the Islands problem, contiguous rows (such as consecutive login dates or sequential ticket IDs) must be grouped together. The standard mathematical trick is subtracting `ROW_NUMBER() OVER (ORDER BY date_col)` from `date_col`. Because both the calendar date and the row number increase by 1 each step, their difference remains identical for contiguous runs. You can then GROUP BY that difference to find start dates, end dates, and streak lengths.",
    "explanation": "Finding consecutive login streaks is one of the most famous FAANG SQL interview challenges. Understanding how ROW_NUMBER() arithmetic groups consecutive values demonstrates deep mastery of windowing and relational algebra.",
    "importantPoints": [
      "Islands: Contiguous sequences of values (e.g., active subscription streaks).",
      "Gaps: Missing values in an expected continuous range.",
      "Difference trick: (event_date - ROW_NUMBER() * INTERVAL '1 day') creates a static group key for islands.",
      "Gaps are typically solved using LAG/LEAD to compare adjacent values."
    ],
    "commonMistakes": [
      "Trying to use recursive CTEs or iterative loops for islands when window arithmetic solves it in O(N).",
      "Not deduplicating multiple events on the same day before computing streaks.",
      "Forgetting to partition by user_id when calculating streaks across multiple users."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Solving Consecutive Login Streaks (Islands Problem)",
        "code": "WITH DistinctLogins AS (\n  SELECT DISTINCT user_id, login_date\n  FROM user_activity\n),\nGroupedIslands AS (\n  SELECT \n    user_id,\n    login_date,\n    -- Subtracting row_number days from login_date yields a constant date for contiguous days:\n    login_date - (ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) * INTERVAL '1 day') AS island_id\n  FROM DistinctLogins\n)\nSELECT \n  user_id,\n  MIN(login_date) AS streak_start,\n  MAX(login_date) AS streak_end,\n  COUNT(*) AS streak_length_days\nFROM GroupedIslands\nGROUP BY user_id, island_id\nHAVING COUNT(*) >= 3\nORDER BY user_id, streak_start;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Calculating Median in SQL Without Dedicated MEDIAN()",
    "question": "How do you calculate the median of a numerical column in databases that do not provide a native MEDIAN() function?",
    "difficulty": "hard",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "median",
      "percentile-cont"
    ],
    "interviewAnswer": "In modern SQL (PostgreSQL, Oracle, SQL Server), use PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY column). In MySQL or older engines without percentile functions, use ROW_NUMBER() in a CTE to find the middle row(s) or average the middle two values.",
    "answer": "The median is the 50th percentile. In ANSI SQL standard compliant engines, `PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY val)` calculates the continuous interpolated median. In engines without this syntax, you can assign `ROW_NUMBER() OVER (ORDER BY val)` and `ROW_NUMBER() OVER (ORDER BY val DESC)` and filter where the difference between rankings is <= 1.",
    "explanation": "The median is the 50th percentile. In ANSI SQL standard compliant engines, `PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY val)` calculates the continuous interpolated median. In engines without this syntax, you can assign `ROW_NUMBER() OVER (ORDER BY val)` and `ROW_NUMBER() OVER (ORDER BY val DESC)` and filter where the difference between rankings is <= 1.",
    "importantPoints": [
      "PERCENTILE_CONT(0.5) computes interpolated median.",
      "PERCENTILE_DISC(0.5) picks the closest discrete data point.",
      "Even row counts require averaging the two central elements."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Calculating Median in SQL Without Dedicated MEDIAN()",
        "code": "-- Example demonstration for: Calculating Median in SQL Without Dedicated MEDIAN()\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Finding the Second Highest Salary Using Aggregations",
    "question": "Write a query to find the second highest salary from an Employee table using aggregation and subqueries.",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "max",
      "subqueries",
      "salary"
    ],
    "interviewAnswer": "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees); This correctly returns NULL if there is no second highest salary.",
    "answer": "The MAX() subquery approach finds the highest salary strictly less than the absolute maximum. Unlike LIMIT 1 OFFSET 1, this approach handles duplicate top salaries seamlessly and naturally returns NULL if all employees have the same salary or if only one employee exists.",
    "explanation": "The MAX() subquery approach finds the highest salary strictly less than the absolute maximum. Unlike LIMIT 1 OFFSET 1, this approach handles duplicate top salaries seamlessly and naturally returns NULL if all employees have the same salary or if only one employee exists.",
    "importantPoints": [
      "Handles ties at top salary.",
      "Returns NULL when fewer than two distinct salaries exist.",
      "LIMIT/OFFSET without DISTINCT can return a tie rather than the true 2nd distinct salary."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Finding the Second Highest Salary Using Aggregations",
        "code": "-- Example demonstration for: Finding the Second Highest Salary Using Aggregations\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "COUNT(DISTINCT) Performance and High Cardinality",
    "question": "Why is COUNT(DISTINCT col) often slow on large datasets, and how can it be optimized or approximated?",
    "difficulty": "hard",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "count-distinct",
      "hyperloglog",
      "performance"
    ],
    "interviewAnswer": "COUNT(DISTINCT) cannot stream calculations; it must collect all values into an in-memory hash set or sort them to eliminate duplicates across all partitions. For huge datasets, use approximate algorithms like HyperLogLog (e.g. HyperLogLog in Postgres or APPROX_COUNT_DISTINCT in BigQuery/Databricks/SQL Server).",
    "answer": "Exact distinct counting requires storing every unique value in a hash table or sorting the entire dataset, which consumes massive memory and spills to disk on multi-million row tables. Modern distributed engines and databases support HyperLogLog (HLL) algorithms that provide 98-99% accuracy with tiny constant memory (typically < 2KB).",
    "explanation": "Exact distinct counting requires storing every unique value in a hash table or sorting the entire dataset, which consumes massive memory and spills to disk on multi-million row tables. Modern distributed engines and databases support HyperLogLog (HLL) algorithms that provide 98-99% accuracy with tiny constant memory (typically < 2KB).",
    "importantPoints": [
      "Exact COUNT(DISTINCT) requires O(U) memory where U is unique values.",
      "Cannot easily be parallelized across multiple nodes without shuffle.",
      "Approximate counting (HyperLogLog) provides sub-1% error with minimal RAM."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "COUNT(DISTINCT) Performance and High Cardinality",
        "code": "-- Example demonstration for: COUNT(DISTINCT) Performance and High Cardinality\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Window Functions vs GROUP BY: Core Contrasts",
    "question": "When should you use a Window Function instead of a GROUP BY clause, and vice versa?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "group-by",
      "architecture"
    ],
    "interviewAnswer": "Use GROUP BY when you want to collapse multiple rows into a single summary row per group. Use Window Functions when you want to compute aggregate or ranking metrics while preserving every individual row in the output.",
    "answer": "GROUP BY transforms the granularity of your dataset, reducing N rows to G groups (where G <= N). Window functions compute aggregate metrics over partitioned subsets of rows without changing the number of rows or losing access to row-level attributes.",
    "explanation": "GROUP BY transforms the granularity of your dataset, reducing N rows to G groups (where G <= N). Window functions compute aggregate metrics over partitioned subsets of rows without changing the number of rows or losing access to row-level attributes.",
    "importantPoints": [
      "GROUP BY collapses rows.",
      "Window functions retain original row granularity.",
      "Window functions can access neighbor rows (LAG/LEAD).",
      "Window functions cannot be used in WHERE directly."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Window Functions vs GROUP BY: Core Contrasts",
        "code": "-- Example demonstration for: Window Functions vs GROUP BY: Core Contrasts\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Finding Duplicate Records Using GROUP BY and HAVING",
    "question": "How do you detect and display all duplicate records based on email address in a users table?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "duplicates",
      "having",
      "group-by"
    ],
    "interviewAnswer": "SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1; To see the actual user records, join this back to the users table or use COUNT(*) OVER (PARTITION BY email) > 1.",
    "answer": "Grouping by the target column and filtering with `HAVING COUNT(*) > 1` identifies duplicate keys. To retrieve full row details of duplicated users, use a window function: `WITH cte AS (SELECT *, COUNT(*) OVER (PARTITION BY email) AS cnt FROM users) SELECT * FROM cte WHERE cnt > 1;`",
    "explanation": "Grouping by the target column and filtering with `HAVING COUNT(*) > 1` identifies duplicate keys. To retrieve full row details of duplicated users, use a window function: `WITH cte AS (SELECT *, COUNT(*) OVER (PARTITION BY email) AS cnt FROM users) SELECT * FROM cte WHERE cnt > 1;`",
    "importantPoints": [
      "HAVING COUNT(*) > 1 finds repeated group keys.",
      "Window function COUNT(*) OVER (PARTITION BY ...) retains all original columns and IDs."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Finding Duplicate Records Using GROUP BY and HAVING",
        "code": "-- Example demonstration for: Finding Duplicate Records Using GROUP BY and HAVING\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Aggregating Boolean Conditions",
    "question": "How do you determine if ALL or ANY rows in a group satisfy a specific condition?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "boolean-aggregation",
      "bool-and",
      "bool-or"
    ],
    "interviewAnswer": "PostgreSQL has native BOOL_AND() (every row true) and BOOL_OR() (at least one row true). In cross-database SQL, use MIN(CASE WHEN condition THEN 1 ELSE 0 END) = 1 for ALL, and MAX(CASE WHEN condition THEN 1 ELSE 0 END) = 1 for ANY.",
    "answer": "Checking if all items in a group meet criteria (e.g. all order items shipped) can be evaluated via `BOOL_AND()` in PostgreSQL. Cross-database portability is achieved via conditional MIN/MAX: if `MIN(CASE WHEN status = 'Shipped' THEN 1 ELSE 0 END) = 1`, then every row is shipped.",
    "explanation": "Checking if all items in a group meet criteria (e.g. all order items shipped) can be evaluated via `BOOL_AND()` in PostgreSQL. Cross-database portability is achieved via conditional MIN/MAX: if `MIN(CASE WHEN status = 'Shipped' THEN 1 ELSE 0 END) = 1`, then every row is shipped.",
    "importantPoints": [
      "PostgreSQL supports BOOL_AND and BOOL_OR.",
      "ANSI portability: MIN(flag) = 1 for ALL; MAX(flag) = 1 for ANY."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Aggregating Boolean Conditions",
        "code": "-- Example demonstration for: Aggregating Boolean Conditions\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Window Function Execution Order in Query Lifecycle",
    "question": "At what phase of SQL query execution are window functions evaluated?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "execution-order",
      "query-lifecycle"
    ],
    "interviewAnswer": "Window functions are evaluated in the SELECT list, right after the WHERE, GROUP BY, and HAVING clauses have executed, and before DISTINCT, ORDER BY, and LIMIT/OFFSET.",
    "answer": "The evaluation order is: 1) FROM/JOIN -> 2) WHERE -> 3) GROUP BY -> 4) HAVING -> 5) WINDOW functions & SELECT expressions -> 6) DISTINCT -> 7) ORDER BY -> 8) LIMIT/OFFSET. Because window functions run after WHERE and HAVING, they cannot appear in WHERE or HAVING clauses directly.",
    "explanation": "The evaluation order is: 1) FROM/JOIN -> 2) WHERE -> 3) GROUP BY -> 4) HAVING -> 5) WINDOW functions & SELECT expressions -> 6) DISTINCT -> 7) ORDER BY -> 8) LIMIT/OFFSET. Because window functions run after WHERE and HAVING, they cannot appear in WHERE or HAVING clauses directly.",
    "importantPoints": [
      "Evaluated after WHERE, GROUP BY, and HAVING.",
      "Evaluated before DISTINCT, final ORDER BY, and LIMIT.",
      "Requires wrapping in a subquery or CTE to filter by window results."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Window Function Execution Order in Query Lifecycle",
        "code": "-- Example demonstration for: Window Function Execution Order in Query Lifecycle\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Cumulative Percent of Total Using Window Functions",
    "question": "How do you calculate each product category's revenue contribution as a percentage of overall company revenue in SQL?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "percent-of-total"
    ],
    "interviewAnswer": "SELECT category, SUM(revenue) * 100.0 / SUM(SUM(revenue)) OVER () AS pct_of_total FROM sales GROUP BY category;",
    "answer": "You can combine a regular GROUP BY aggregate with an empty window frame: `SUM(SUM(revenue)) OVER ()`. The inner `SUM(revenue)` aggregates revenue per category; the outer `SUM(...) OVER ()` computes the grand total across all categories without requiring a separate subquery or cross join.",
    "explanation": "You can combine a regular GROUP BY aggregate with an empty window frame: `SUM(SUM(revenue)) OVER ()`. The inner `SUM(revenue)` aggregates revenue per category; the outer `SUM(...) OVER ()` computes the grand total across all categories without requiring a separate subquery or cross join.",
    "importantPoints": [
      "SUM(SUM(col)) OVER () divides group aggregate by grand total.",
      "Requires no self-join or extra subquery.",
      "Multiply by 100.0 to prevent integer truncation."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Cumulative Percent of Total Using Window Functions",
        "code": "-- Example demonstration for: Cumulative Percent of Total Using Window Functions\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Handling Zero and Division by Zero in Aggregate Percentages",
    "question": "How do you safely prevent division by zero when calculating ratios or percentage changes in SQL?",
    "difficulty": "easy",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "nullif",
      "division-by-zero",
      "safe-math"
    ],
    "interviewAnswer": "Use NULLIF(denominator, 0). If the denominator is 0, NULLIF turns it into NULL, and any number divided by NULL safely evaluates to NULL instead of raising a runtime division by zero exception.",
    "answer": "Division by zero aborts query execution in SQL Server and PostgreSQL. Using `val * 100.0 / NULLIF(total, 0)` converts 0 into NULL. In SQL arithmetic, `X / NULL` evaluates to NULL without error. You can then wrap the result in `COALESCE(..., 0)` if you prefer 0 over NULL.",
    "explanation": "Division by zero aborts query execution in SQL Server and PostgreSQL. Using `val * 100.0 / NULLIF(total, 0)` converts 0 into NULL. In SQL arithmetic, `X / NULL` evaluates to NULL without error. You can then wrap the result in `COALESCE(..., 0)` if you prefer 0 over NULL.",
    "importantPoints": [
      "NULLIF(x, 0) returns NULL when x is 0.",
      "X / NULL evaluates to NULL without crashing.",
      "COALESCE(X / NULLIF(Y, 0), 0) guarantees a safe numeric fallback."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Handling Zero and Division by Zero in Aggregate Percentages",
        "code": "-- Example demonstration for: Handling Zero and Division by Zero in Aggregate Percentages\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "The OVER() Clause Without PARTITION BY or ORDER BY",
    "question": "What happens when you invoke an aggregate function with an empty OVER() clause (e.g. AVG(salary) OVER ())?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "over-clause"
    ],
    "interviewAnswer": "An empty OVER() clause treats the entire result set as a single partition and includes all rows in the frame. It computes the metric across the whole table and appends that constant value to every single row.",
    "answer": "Calling `AVG(salary) OVER ()` calculates the global average salary across all returned rows and attaches that identical average value to every individual employee row, allowing direct row-by-row comparisons (e.g. `salary - AVG(salary) OVER ()`).",
    "explanation": "Calling `AVG(salary) OVER ()` calculates the global average salary across all returned rows and attaches that identical average value to every individual employee row, allowing direct row-by-row comparisons (e.g. `salary - AVG(salary) OVER ()`).",
    "importantPoints": [
      "Treats the entire dataset as a single partition.",
      "Attaches global summary values to individual rows.",
      "Eliminates need for scalar subqueries or CROSS JOINs."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "The OVER() Clause Without PARTITION BY or ORDER BY",
        "code": "-- Example demonstration for: The OVER() Clause Without PARTITION BY or ORDER BY\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Impact of Sorting vs Hashing on Memory during GROUP BY",
    "question": "What happens when the number of distinct groups in a GROUP BY query exceeds the database's memory limit?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "group-by",
      "spill-to-disk",
      "work-mem"
    ],
    "interviewAnswer": "If hash aggregation exceeds available memory (work_mem in PostgreSQL, sort_area_size in Oracle), the engine spills temporary batch partitions to disk. This converts fast in-memory operations into high-latency disk I/O, drastically slowing down query execution.",
    "answer": "When memory is exceeded, the database switches to external merge sort or multi-pass disk hashing. It serializes intermediate bucket states to temporary tablespace files on disk, processes them in chunks, and merges results. Increasing sort/work memory or pre-aggregating via materialized views resolves this bottleneck.",
    "explanation": "When memory is exceeded, the database switches to external merge sort or multi-pass disk hashing. It serializes intermediate bucket states to temporary tablespace files on disk, processes them in chunks, and merges results. Increasing sort/work memory or pre-aggregating via materialized views resolves this bottleneck.",
    "importantPoints": [
      "Exceeding work_mem causes disk spill (temp files).",
      "Disk I/O degrades query performance by orders of magnitude.",
      "Monitored via EXPLAIN ANALYZE (\"Disk: spilled\" or \"Sort Method: external merge\")."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Impact of Sorting vs Hashing on Memory during GROUP BY",
        "code": "-- Example demonstration for: Impact of Sorting vs Hashing on Memory during GROUP BY\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Aggregating JSON or Arrays in Modern Relational SQL",
    "question": "How do modern SQL databases aggregate multiple rows into a single JSON array per group?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "json",
      "json-agg",
      "arrays"
    ],
    "interviewAnswer": "PostgreSQL uses JSON_AGG(col) or JSONB_AGG(col). MySQL uses JSON_ARRAYAGG(col). SQL Server uses FOR JSON PATH. These return a structured JSON array for each grouped parent record.",
    "answer": "Modern databases allow aggregating child rows directly into JSON arrays: PostgreSQL: `SELECT department_id, JSON_AGG(json_build_object('name', name, 'role', role)) FROM employees GROUP BY department_id;` MySQL: `SELECT department_id, JSON_ARRAYAGG(name) FROM employees GROUP BY department_id;`",
    "explanation": "Modern databases allow aggregating child rows directly into JSON arrays: PostgreSQL: `SELECT department_id, JSON_AGG(json_build_object('name', name, 'role', role)) FROM employees GROUP BY department_id;` MySQL: `SELECT department_id, JSON_ARRAYAGG(name) FROM employees GROUP BY department_id;`",
    "importantPoints": [
      "Avoids client-side N+1 data stitching.",
      "JSON_AGG / JSON_ARRAYAGG groups rows into native JSON arrays.",
      "Preserves data types and hierarchy in a single query."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Aggregating JSON or Arrays in Modern Relational SQL",
        "code": "-- Example demonstration for: Aggregating JSON or Arrays in Modern Relational SQL\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Top N Records per Group Using Window Functions",
    "question": "Write an ANSI SQL query to find the top 3 highest earning employees in each department.",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "top-n-per-group",
      "dense-rank"
    ],
    "interviewAnswer": "Use DENSE_RANK() or ROW_NUMBER() in a CTE with PARTITION BY department_id ORDER BY salary DESC, then filter WHERE ranking <= 3 in the outer query.",
    "answer": "To find top 3 earners: `WITH Ranked AS (SELECT *, DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rnk FROM employees) SELECT * FROM Ranked WHERE rnk <= 3;`. Using DENSE_RANK ensures tied salaries are treated fairly.",
    "explanation": "To find top 3 earners: `WITH Ranked AS (SELECT *, DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rnk FROM employees) SELECT * FROM Ranked WHERE rnk <= 3;`. Using DENSE_RANK ensures tied salaries are treated fairly.",
    "importantPoints": [
      "PARTITION BY resets rank per department.",
      "Must wrap in CTE or subquery because window functions cannot be filtered in WHERE.",
      "DENSE_RANK includes ties; ROW_NUMBER guarantees strict count."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Top N Records per Group Using Window Functions",
        "code": "-- Example demonstration for: Top N Records per Group Using Window Functions\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Statistical Aggregates: Standard Deviation and Variance",
    "question": "What aggregate functions compute variance and standard deviation in SQL, and what is the difference between sample and population variants?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "statistics",
      "stddev",
      "variance"
    ],
    "interviewAnswer": "STDDEV_SAMP / VAR_SAMP divide by N - 1 (Bessel's correction) for a sample of data. STDDEV_POP / VAR_POP divide by N for the entire population. Most engines default STDDEV() to sample.",
    "answer": "Standard deviation measures data dispersion. If querying a representative sample, divide sum of squared deviations by (N - 1) using `STDDEV_SAMP()` to avoid bias. If querying the entire universe of records, divide by N using `STDDEV_POP()`.",
    "explanation": "Standard deviation measures data dispersion. If querying a representative sample, divide sum of squared deviations by (N - 1) using `STDDEV_SAMP()` to avoid bias. If querying the entire universe of records, divide by N using `STDDEV_POP()`.",
    "importantPoints": [
      "Sample variants divide by N - 1.",
      "Population variants divide by N.",
      "Standard STDDEV() alias defaults to sample in PostgreSQL and MySQL."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Statistical Aggregates: Standard Deviation and Variance",
        "code": "-- Example demonstration for: Statistical Aggregates: Standard Deviation and Variance\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "GROUP BY with Expressions and Functions",
    "question": "What are the performance implications of grouping by expressions or functions (e.g. GROUP BY DATE(created_at))?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "group-by",
      "expressions",
      "functional-indexes"
    ],
    "interviewAnswer": "Grouping by a function prevents standard B-Tree index scans on that column because the function must be evaluated on every row before grouping. This forces a full table scan unless an expression/functional index matching the exact expression is created.",
    "answer": "Writing `GROUP BY DATE(created_at)` invalidates a regular index on `created_at`. The engine must scan the table, compute `DATE()` on every record, and aggregate dynamically. Creating a functional index (e.g., `CREATE INDEX idx_created_date ON orders ((created_at::date));` in Postgres) restores index scan performance.",
    "explanation": "Writing `GROUP BY DATE(created_at)` invalidates a regular index on `created_at`. The engine must scan the table, compute `DATE()` on every record, and aggregate dynamically. Creating a functional index (e.g., `CREATE INDEX idx_created_date ON orders ((created_at::date));` in Postgres) restores index scan performance.",
    "importantPoints": [
      "Functions in GROUP BY invalidate standard column indexes.",
      "Forces full table scan and computation overhead.",
      "Solved by creating expression/functional indexes or storing truncated date columns."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "GROUP BY with Expressions and Functions",
        "code": "-- Example demonstration for: GROUP BY with Expressions and Functions\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Using NTH_VALUE() Window Function",
    "question": "What is the purpose of NTH_VALUE() and how does it differ from LEAD/LAG?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "nth-value"
    ],
    "interviewAnswer": "NTH_VALUE(col, n) returns the value of the nth row in the window frame relative to the window start, whereas LAG/LEAD operate at relative offsets from the current row.",
    "answer": "NTH_VALUE(expression, N) extracts the exact Nth value within the ordered partition. For instance, `NTH_VALUE(salary, 2) OVER (PARTITION BY dept ORDER BY salary DESC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)` extracts the second highest salary across the entire department for every row.",
    "explanation": "NTH_VALUE(expression, N) extracts the exact Nth value within the ordered partition. For instance, `NTH_VALUE(salary, 2) OVER (PARTITION BY dept ORDER BY salary DESC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)` extracts the second highest salary across the entire department for every row.",
    "importantPoints": [
      "NTH_VALUE is absolute within window frame; LAG/LEAD are relative to current row.",
      "Requires explicit window frame spanning UNBOUNDED FOLLOWING to look ahead reliably."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Using NTH_VALUE() Window Function",
        "code": "-- Example demonstration for: Using NTH_VALUE() Window Function\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Aggregating Over Partition with Multiple Columns",
    "question": "How does PARTITION BY behave when multiple columns are specified in the window clause?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "partition-by"
    ],
    "interviewAnswer": "When multiple columns are specified in PARTITION BY (e.g., PARTITION BY region, year), the window function treats each unique combination of those column values as a separate partition, resetting calculations on each change.",
    "answer": "Just like `GROUP BY region, year`, `PARTITION BY region, year` segments the dataset into distinct subsets identified by composite key pairs. Cumulative totals, rankings, and moving averages reset every time either region or year changes.",
    "explanation": "Just like `GROUP BY region, year`, `PARTITION BY region, year` segments the dataset into distinct subsets identified by composite key pairs. Cumulative totals, rankings, and moving averages reset every time either region or year changes.",
    "importantPoints": [
      "Multiple partition columns form a composite grouping boundary.",
      "Window calculations reset when any partition column value transitions.",
      "Does not collapse rows."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Aggregating Over Partition with Multiple Columns",
        "code": "-- Example demonstration for: Aggregating Over Partition with Multiple Columns\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "PERCENT_RANK() and CUME_DIST() Differences",
    "question": "What is the difference between PERCENT_RANK() and CUME_DIST() window functions?",
    "difficulty": "hard",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "cume-dist",
      "percent-rank"
    ],
    "interviewAnswer": "PERCENT_RANK calculates relative rank as (rank - 1) / (total_rows - 1), ranging from 0.0 to 1.0. CUME_DIST calculates cumulative distribution as (number of rows with values <= current row value) / total_rows, representing the actual cumulative fraction.",
    "answer": "PERCENT_RANK() answers: \"What percentage of rows have a lower rank than this row?\" (First row is always 0.0). CUME_DIST() answers: \"What proportion of rows have values less than or equal to the current row?\" (Values range from > 0.0 to 1.0).",
    "explanation": "PERCENT_RANK() answers: \"What percentage of rows have a lower rank than this row?\" (First row is always 0.0). CUME_DIST() answers: \"What proportion of rows have values less than or equal to the current row?\" (Values range from > 0.0 to 1.0).",
    "importantPoints": [
      "PERCENT_RANK() = (rank - 1) / (total_rows - 1).",
      "CUME_DIST() = count_preceding_or_peer / total_rows.",
      "Both evaluate relative percentile positions."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "PERCENT_RANK() and CUME_DIST() Differences",
        "code": "-- Example demonstration for: PERCENT_RANK() and CUME_DIST() Differences\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Counting Distinct Values Across Window Partitions",
    "question": "Can you use COUNT(DISTINCT col) inside a window function (OVER clause)? What are the alternatives?",
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "count-distinct",
      "limitations"
    ],
    "interviewAnswer": "Most relational engines (PostgreSQL, MySQL, SQL Server) disallow COUNT(DISTINCT) with an OVER clause. You work around this using DENSE_RANK() OVER (ORDER BY col) + DENSE_RANK() OVER (ORDER BY col DESC) - 1, or by pre-aggregating distinct values in a CTE.",
    "answer": "ANSI SQL disallows `COUNT(DISTINCT col) OVER (...)` in many major databases due to the complexity of maintaining distinct sets across sliding frames. A standard workaround is calculating `DENSE_RANK() OVER (PARTITION BY ... ORDER BY col) + DENSE_RANK() OVER (PARTITION BY ... ORDER BY col DESC) - 1`, or pre-grouping distinct entities in a CTE prior to windowing.",
    "explanation": "ANSI SQL disallows `COUNT(DISTINCT col) OVER (...)` in many major databases due to the complexity of maintaining distinct sets across sliding frames. A standard workaround is calculating `DENSE_RANK() OVER (PARTITION BY ... ORDER BY col) + DENSE_RANK() OVER (PARTITION BY ... ORDER BY col DESC) - 1`, or pre-grouping distinct entities in a CTE prior to windowing.",
    "importantPoints": [
      "COUNT(DISTINCT) OVER () is unsupported in most engines.",
      "Workaround 1: Pre-aggregate distinct rows in a subquery/CTE.",
      "Workaround 2: Use DENSE_RANK arithmetic for partition-wide distinct counts."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Counting Distinct Values Across Window Partitions",
        "code": "-- Example demonstration for: Counting Distinct Values Across Window Partitions\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "aggregations",
    "title": "Calculating Year-to-Date (YTD) Revenue in SQL",
    "question": "Write a query to calculate Year-To-Date (YTD) revenue for each day of sales.",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "aggregations",
      "window-functions",
      "ytd",
      "running-total"
    ],
    "interviewAnswer": "Partition by the extracted year and order by date with an unbounded preceding frame: SUM(amount) OVER (PARTITION BY EXTRACT(year FROM sale_date) ORDER BY sale_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW).",
    "answer": "Year-to-Date (YTD) metrics accumulate from January 1st to the current day, resetting on January 1st of the next year. Partitioning by `EXTRACT(YEAR FROM sale_date)` ensures running totals reset automatically at each new calendar year.",
    "explanation": "Year-to-Date (YTD) metrics accumulate from January 1st to the current day, resetting on January 1st of the next year. Partitioning by `EXTRACT(YEAR FROM sale_date)` ensures running totals reset automatically at each new calendar year.",
    "importantPoints": [
      "PARTITION BY year resets total at start of each year.",
      "ORDER BY sale_date ensures chronological accumulation.",
      "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW guarantees predictable running sum."
    ],
    "commonMistakes": [
      "Failing to account for NULL values or duplicate entries."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Calculating Year-to-Date (YTD) Revenue in SQL",
        "code": "-- Example demonstration for: Calculating Year-to-Date (YTD) Revenue in SQL\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
