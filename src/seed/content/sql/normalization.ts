import { SeedQuestion } from '../types';

export const normalizationQuestions: SeedQuestion[] = [
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "First Normal Form (1NF) Rules and Violations",
    "question": "What are the core requirements of First Normal Form (1NF), and what is an example of a 1NF violation?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "normalization",
      "1nf",
      "atomic-values",
      "database-design"
    ],
    "interviewAnswer": "First Normal Form (1NF) requires that: 1) Each column contains atomic (indivisible) values, meaning no comma-separated lists or arrays; 2) No repeating groups of similar columns (e.g. phone1, phone2); 3) Each row is uniquely identifiable with a primary key; 4) The order of rows and columns does not matter.",
    "answer": "A relation is in 1NF if and only if all attributes are atomic values and no repeating groups exist. Violating 1NF: storing a comma-separated string of tags or phone numbers (`tags = 'sql,database,indexing'`). This makes querying specific values awkward (`LIKE '%database%'`), invalidates standard B-Tree indexing, and makes updates and deletes error-prone. In 1NF, multi-valued attributes are separated into a dedicated child table with a foreign key.",
    "explanation": "Another classic 1NF violation is creating repeating column groups like `phone_1`, `phone_2`, `phone_3`. This restricts entities to a fixed number of items and wastes space with NULLs. Normalizing to 1NF moves phone numbers into a separate table with (user_id, phone_number).",
    "importantPoints": [
      "Each cell must hold a single atomic value.",
      "No repeating groups of columns (e.g. child1, child2, child3).",
      "Table must have a unique primary key.",
      "Normalize multi-valued attributes into a child table."
    ],
    "commonMistakes": [
      "Storing comma-delimited strings in VARCHAR columns to avoid creating a junction table.",
      "Thinking modern JSONB columns completely eliminate the need for 1NF relational modeling.",
      "Adding columns like item_1, item_2 instead of a normalized relation."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Violating vs Complying with 1NF",
        "code": "-- VIOLATION of 1NF (non-atomic comma-separated values):\n-- CREATE TABLE users (id INT, name VARCHAR(50), phone_numbers VARCHAR(255));\n-- INSERT: (1, 'Alice', '555-1234, 555-5678')\n\n-- COMPLYING with 1NF:\nCREATE TABLE users (\n  user_id INT PRIMARY KEY,\n  name VARCHAR(50) NOT NULL\n);\n\nCREATE TABLE user_phones (\n  phone_id INT PRIMARY KEY,\n  user_id INT NOT NULL REFERENCES users(user_id),\n  phone_number VARCHAR(20) NOT NULL\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Second Normal Form (2NF) and Partial Dependencies",
    "question": "What constitutes Second Normal Form (2NF), and what is a Partial Functional Dependency?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "normalization",
      "2nf",
      "partial-dependency",
      "composite-key"
    ],
    "interviewAnswer": "A table is in 2NF if it is already in 1NF AND every non-key column depends on the WHOLE primary key, rather than a partial subset of a composite primary key. If a table's primary key is a single column, it is automatically in 2NF once in 1NF.",
    "answer": "Second Normal Form targets partial functional dependencies, which only occur when a table has a composite primary key. If a table has a composite PK (StudentID, CourseID), and a column `CourseName` depends solely on `CourseID` (not `StudentID`), that is a partial dependency violating 2NF. This causes update anomalies (updating course name requires updating thousands of enrollment rows) and insertion anomalies (you cannot record a course until a student enrolls).",
    "explanation": "To resolve a 2NF violation, extract the partially dependent attributes into a separate table where the determinant becomes the complete primary key (e.g. Courses table with CourseID as PK).",
    "importantPoints": [
      "Must be in 1NF first.",
      "Eliminates partial functional dependencies on composite keys.",
      "If primary key is a single column, 2NF is automatically satisfied.",
      "Prevents redundant storage of parent entity attributes in junction tables."
    ],
    "commonMistakes": [
      "Checking for 2NF on tables with single-column primary keys (it only applies to composite keys).",
      "Leaving descriptive attributes of lookup entities inside join/association tables."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Fixing a 2NF Violation",
        "code": "-- VIOLATION: (student_id, course_id) is PK. course_name depends only on course_id!\n-- enrollment(student_id, course_id, student_grade, course_name)\n\n-- 2NF Normalized Tables:\nCREATE TABLE courses (\n  course_id INT PRIMARY KEY,\n  course_name VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE enrollments (\n  student_id INT NOT NULL,\n  course_id INT NOT NULL REFERENCES courses(course_id),\n  student_grade CHAR(2),\n  PRIMARY KEY (student_id, course_id)\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Third Normal Form (3NF) and Transitive Dependencies",
    "question": "What is Third Normal Form (3NF), and what is a Transitive Dependency?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "3nf",
      "transitive-dependency",
      "database-design"
    ],
    "interviewAnswer": "A table is in 3NF if it is in 2NF AND has no Transitive Dependencies (non-key columns must depend only on the primary key, not on another non-key column). Classic phrase: \"Every column must depend on the key, the whole key, and nothing but the key, so help me Codd.\"",
    "answer": "A transitive dependency occurs when column A determines column B, and column B determines column C (A -> B and B -> C). If `employee_id` determines `department_id`, and `department_id` determines `department_name`, then `department_name` transitively depends on `employee_id`. Storing `department_name` in the `employees` table violates 3NF, creating data duplication and update anomalies.",
    "explanation": "Resolving 3NF moves the transitive attribute into its own table: create a `departments` table with `department_id` as PK and `department_name`. In `employees`, retain only `department_id` as a foreign key.",
    "importantPoints": [
      "Must be in 2NF first.",
      "No transitive dependencies: non-key attributes cannot depend on other non-key attributes.",
      "Separates lookup metadata into dedicated reference tables.",
      "Eliminates update and deletion anomalies across related entities."
    ],
    "commonMistakes": [
      "Leaving department_name, city, or manager_name in transactional tables alongside their IDs.",
      "Confusing 2NF (partial key dependency) with 3NF (non-key column dependency)."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Fixing a 3NF Transitive Dependency",
        "code": "-- VIOLATION: employee_id -> department_id -> department_name\n-- employees(employee_id, employee_name, department_id, department_name)\n\n-- 3NF Normalized:\nCREATE TABLE departments (\n  department_id INT PRIMARY KEY,\n  department_name VARCHAR(50) NOT NULL\n);\n\nCREATE TABLE employees (\n  employee_id INT PRIMARY KEY,\n  employee_name VARCHAR(50) NOT NULL,\n  department_id INT NOT NULL REFERENCES departments(department_id)\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Boyce-Codd Normal Form (BCNF)",
    "question": "How does Boyce-Codd Normal Form (BCNF) differ from 3NF, and when is a 3NF table not in BCNF?",
    "difficulty": "hard",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "bcnf",
      "3nf",
      "candidate-keys"
    ],
    "interviewAnswer": "BCNF is a stricter version of 3NF. In 3NF, a dependency X -> Y is permitted if Y is a prime attribute (part of a candidate key). In BCNF, EVERY determinant X MUST be a candidate key/superkey. A 3NF table violates BCNF when multiple overlapping composite candidate keys exist and a non-key column determines part of a key.",
    "answer": "Consider a student advisory system where: 1) A student can have multiple advisors; 2) An advisor works in only one department; 3) Each student has only one advisor per department. The candidate keys are (StudentID, Department) and (StudentID, Advisor). The functional dependency is: `Advisor -> Department`. In 3NF, this is allowed because `Department` is part of a candidate key. In BCNF, this is a violation because `Advisor` is NOT a superkey (an advisor advises multiple students). This leads to anomalies: you cannot insert a new advisor without assigning a student.",
    "explanation": "BCNF is often called 3.5NF. Every table in BCNF is in 3NF, but not every 3NF table is in BCNF. BCNF anomalies are rare in business schemas and only occur when there are overlapping composite candidate keys.",
    "importantPoints": [
      "In BCNF, every determinant must be a candidate key (superkey).",
      "Stricter than 3NF: disallows dependencies on prime attributes.",
      "Applies to tables with overlapping composite candidate keys.",
      "Decomposing to BCNF can sometimes lose functional dependency preservation."
    ],
    "commonMistakes": [
      "Assuming 3NF and BCNF are identical for all schemas.",
      "Trying to force BCNF when decomposing loses functional dependency enforcement."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Decomposing 3NF to BCNF",
        "code": "-- 3NF Table violating BCNF: (student_id, advisor_id, department)\n-- Advisor -> Department, but Advisor is not a superkey!\n\n-- Decomposed to BCNF:\nCREATE TABLE advisor_departments (\n  advisor_id INT PRIMARY KEY,\n  department VARCHAR(50) NOT NULL\n);\n\nCREATE TABLE student_advisors (\n  student_id INT NOT NULL,\n  advisor_id INT NOT NULL REFERENCES advisor_departments(advisor_id),\n  PRIMARY KEY (student_id, advisor_id)\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Denormalization: Benefits, Trade-Offs, and Strategies",
    "question": "What is Denormalization, what problems does it solve, and what risks does it introduce?",
    "difficulty": "medium",
    "questionType": "Trade-off",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "denormalization",
      "trade-offs",
      "performance"
    ],
    "interviewAnswer": "Denormalization is the intentional introduction of redundancy into a normalized database to reduce expensive multi-table JOINs, pre-aggregate calculations, and accelerate read queries. The trade-off is write degradation: every write must update redundant copies, increasing the risk of data anomalies and requiring synchronizing triggers or transactional guarantees.",
    "answer": "Normalized databases minimize data redundancy and write anomalies. However, in read-heavy applications, querying 10 joined tables can overwhelm CPU and memory. Denormalization optimizes reads by: 1) Storing pre-computed aggregations (e.g. `order_count` on user table); 2) Duplicating lookup values (e.g. storing `customer_name` directly in `orders`); 3) Creating materialized views. The risks: write performance slows down, storage increases, and if an update fails to synchronize duplicate records, data corruption occurs.",
    "explanation": "Denormalization should always be evidence-based: first design a normalized schema (3NF). If profiling shows specific JOINs are production bottlenecks under scale, denormalize targeted fields while enforcing consistency via transactions or database triggers.",
    "importantPoints": [
      "Improves read performance by eliminating complex JOINs.",
      "Enables pre-calculated summary metrics (running totals, counters).",
      "Hurts write performance and introduces data anomaly risks.",
      "Requires synchronization mechanisms: triggers, transactions, or asynchronous worker queues."
    ],
    "commonMistakes": [
      "Denormalizing early before measuring actual query performance.",
      "Denormalizing without establishing an automated consistency/synchronization mechanism.",
      "Failing to recognize that denormalized tables still need underlying transactional integrity."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Synchronizing Denormalized Counters via Trigger",
        "code": "-- Denormalized column in users table:\nALTER TABLE users ADD COLUMN total_orders INT DEFAULT 0;\n\n-- Trigger to maintain denormalized counter atomically:\nCREATE OR REPLACE FUNCTION update_user_order_count()\nRETURNS TRIGGER AS $$\nBEGIN\n  IF TG_OP = 'INSERT' THEN\n    UPDATE users SET total_orders = total_orders + 1 WHERE user_id = NEW.user_id;\n  ELSIF TG_OP = 'DELETE' THEN\n    UPDATE users SET total_orders = total_orders - 1 WHERE user_id = OLD.user_id;\n  END IF;\n  RETURN NULL;\nEND;\n$$ LANGUAGE plpgsql;\n\nCREATE TRIGGER trg_user_order_count\nAFTER INSERT OR DELETE ON orders\nFOR EACH ROW EXECUTE FUNCTION update_user_order_count();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Fourth Normal Form (4NF) and Multi-Valued Dependencies",
    "question": "What is Fourth Normal Form (4NF), and what is a Multi-Valued Dependency (MVD)?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "4nf",
      "multi-valued-dependency"
    ],
    "interviewAnswer": "4NF deals with Multi-Valued Dependencies (MVD). A table is in 4NF if it is in BCNF and contains no non-trivial multi-valued dependencies. An MVD occurs when two independent multi-valued attributes depend on the same entity, forcing a cartesian product of rows.",
    "answer": "Suppose an Employee has multiple Skills (e.g. SQL, Python) and multiple Languages (e.g. English, Spanish). If stored in one table `(EmpID, Skill, Language)`, storing an employee with 3 skills and 2 languages requires 3 * 2 = 6 rows. The skills and languages are completely independent, but every skill must be paired with every language to maintain consistency. 4NF resolves this by decomposing into two tables: `(EmpID, Skill)` and `(EmpID, Language)`.",
    "explanation": "Suppose an Employee has multiple Skills (e.g. SQL, Python) and multiple Languages (e.g. English, Spanish). If stored in one table `(EmpID, Skill, Language)`, storing an employee with 3 skills and 2 languages requires 3 * 2 = 6 rows. The skills and languages are completely independent, but every skill must be paired with every language to maintain consistency. 4NF resolves this by decomposing into two tables: `(EmpID, Skill)` and `(EmpID, Language)`.",
    "importantPoints": [
      "Targets independent multi-valued attributes.",
      "Eliminates combinatorial row explosion.",
      "Decomposes into separate independent binary relations."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Fourth Normal Form (4NF) and Multi-Valued Dependencies",
        "code": "-- Demonstration for: Fourth Normal Form (4NF) and Multi-Valued Dependencies\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Fifth Normal Form (5NF) and Join Dependencies",
    "question": "What is Fifth Normal Form (5NF / Project-Join Normal Form), and when is it applicable?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "5nf",
      "join-dependency",
      "lossless-join"
    ],
    "interviewAnswer": "A table is in 5NF if it is in 4NF and cannot be decomposed into smaller tables without losing information (lossless join). It deals with cyclic, ternary constraints where an N-way relationship can only be reconstructed by joining 3 or more tables together.",
    "answer": "5NF addresses symmetric constraints between three or more entities (e.g., Supplier, Part, Project) where a supplier provides a part to a project only if the supplier supplies that part AND the supplier works on that project AND the project uses that part. Decomposing to 5NF breaks the 3-way table into three 2-way tables without introducing spurious tuples upon rejoin.",
    "explanation": "5NF addresses symmetric constraints between three or more entities (e.g., Supplier, Part, Project) where a supplier provides a part to a project only if the supplier supplies that part AND the supplier works on that project AND the project uses that part. Decomposing to 5NF breaks the 3-way table into three 2-way tables without introducing spurious tuples upon rejoin.",
    "importantPoints": [
      "Also called Project-Join Normal Form (PJNF).",
      "Deals with cyclic ternary dependencies.",
      "Extremely rare in standard business application modeling."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Fifth Normal Form (5NF) and Join Dependencies",
        "code": "-- Demonstration for: Fifth Normal Form (5NF) and Join Dependencies\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Insertion, Update, and Deletion Anomalies",
    "question": "Define and illustrate the three classic anomalies that normalization aims to eliminate.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "anomalies",
      "database-design"
    ],
    "interviewAnswer": "1) Insertion Anomaly: Inability to record certain facts without recording unrelated facts (e.g. cannot create a department until an employee is hired). 2) Update Anomaly: Inconsistent data when redundant values are updated in one row but not others. 3) Deletion Anomaly: Unintended loss of facts when deleting a record (e.g. deleting the last employee in a department accidentally deletes the department itself).",
    "answer": "In an un-normalized table storing both employee and department info: 1) Insertion: You cannot add a new department without creating a dummy employee. 2) Update: If the department office moves, you must update 5,000 employee records; missing one creates inconsistent states. 3) Deletion: Deleting the last employee in HR deletes the HR department from the database.",
    "explanation": "In an un-normalized table storing both employee and department info: 1) Insertion: You cannot add a new department without creating a dummy employee. 2) Update: If the department office moves, you must update 5,000 employee records; missing one creates inconsistent states. 3) Deletion: Deleting the last employee in HR deletes the HR department from the database.",
    "importantPoints": [
      "Insertion: Cannot record an entity without another.",
      "Update: Inconsistent states from partial updates.",
      "Deletion: Unintended collateral loss of data."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Insertion, Update, and Deletion Anomalies",
        "code": "-- Demonstration for: Insertion, Update, and Deletion Anomalies\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Surrogate Keys vs Functional Dependencies",
    "question": "Does introducing an auto-increment surrogate primary key automatically normalize a table into 3NF?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "surrogate-keys",
      "candidate-keys",
      "myths"
    ],
    "interviewAnswer": "No! Adding a surrogate primary key (e.g. id BIGINT PRIMARY KEY) does NOT eliminate transitive or partial functional dependencies among natural business columns. The table can still violate 2NF and 3NF if redundant business attributes remain un-normalized.",
    "answer": "A common junior mistake is assuming `id PRIMARY KEY` puts a table into 3NF. If the table contains `id, customer_id, customer_city, customer_zipcode`, `customer_zipcode -> customer_city` is still a transitive dependency that violates 3NF, regardless of the surrogate `id`.",
    "explanation": "A common junior mistake is assuming `id PRIMARY KEY` puts a table into 3NF. If the table contains `id, customer_id, customer_city, customer_zipcode`, `customer_zipcode -> customer_city` is still a transitive dependency that violates 3NF, regardless of the surrogate `id`.",
    "importantPoints": [
      "Surrogate keys do not resolve underlying business functional dependencies.",
      "3NF requires checking dependencies among all candidate keys and attributes.",
      "Unique constraints on natural candidate keys are still required."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Surrogate Keys vs Functional Dependencies",
        "code": "-- Demonstration for: Surrogate Keys vs Functional Dependencies\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Normalization in OLTP vs OLAP Systems",
    "question": "Why do OLTP systems prioritize high normalization (3NF/BCNF) while OLAP data warehouses prefer dimensional denormalization (Star Schema)?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "oltp",
      "olap",
      "star-schema",
      "data-warehouse"
    ],
    "interviewAnswer": "OLTP systems prioritize fast, atomic single-row writes, minimal lock contention, and zero anomalies, requiring 3NF. OLAP data warehouses prioritize high-volume analytical read queries across millions of rows, where star/snowflake denormalization eliminates costly joins and optimizes columnar compression.",
    "answer": "OLTP systems handle thousands of concurrent INSERT/UPDATE transactions per second. Normalization ensures each fact is stored once, preventing update anomalies and keeping row locks narrow. In OLAP, data is read-mostly and ingested via batch ETL; denormalized fact and dimension tables (Star Schema) allow massive parallel scans and vector aggregation without 15-way normalized joins.",
    "explanation": "OLTP systems handle thousands of concurrent INSERT/UPDATE transactions per second. Normalization ensures each fact is stored once, preventing update anomalies and keeping row locks narrow. In OLAP, data is read-mostly and ingested via batch ETL; denormalized fact and dimension tables (Star Schema) allow massive parallel scans and vector aggregation without 15-way normalized joins.",
    "importantPoints": [
      "OLTP: 3NF avoids write anomalies and locks.",
      "OLAP: Star/Snowflake schemas optimize analytical scans and aggregation.",
      "ETL pipelines bridge normalized OLTP databases to denormalized data warehouses."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Normalization in OLTP vs OLAP Systems",
        "code": "-- Demonstration for: Normalization in OLTP vs OLAP Systems\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Star Schema vs Snowflake Schema Normalization",
    "question": "What is the architectural difference between a Star Schema and a Snowflake Schema in data warehousing?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "star-schema",
      "snowflake-schema",
      "data-warehouse"
    ],
    "interviewAnswer": "In a Star Schema, dimension tables are completely denormalized (e.g. City and Country stored directly inside Dim_Customer). In a Snowflake Schema, dimension tables are normalized into sub-dimensions (Dim_Customer joins to Dim_City which joins to Dim_Country).",
    "answer": "Star schemas offer simpler SQL queries, fewer joins, and superior performance in modern columnar data warehouses. Snowflake schemas reduce dimension storage redundancy by normalizing hierarchical relationships, but require additional joins during analytical query execution.",
    "explanation": "Star schemas offer simpler SQL queries, fewer joins, and superior performance in modern columnar data warehouses. Snowflake schemas reduce dimension storage redundancy by normalizing hierarchical relationships, but require additional joins during analytical query execution.",
    "importantPoints": [
      "Star Schema: Denormalized dimension tables, fewer joins, simpler queries.",
      "Snowflake Schema: Normalized dimensions, saves dimension storage, more joins.",
      "Star Schema is overwhelmingly preferred in modern cloud warehouses (Snowflake, BigQuery)."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Star Schema vs Snowflake Schema Normalization",
        "code": "-- Demonstration for: Star Schema vs Snowflake Schema Normalization\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Materialized Views for Controlled Denormalization",
    "question": "How do Materialized Views provide a safe, automated form of denormalization?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "materialized-views",
      "denormalization",
      "caching"
    ],
    "interviewAnswer": "Materialized views physically store the pre-computed results of complex multi-table joins or aggregations on disk, allowing fast querying without modifying the underlying 3NF schema. They isolate denormalized performance optimizations from source transactional integrity.",
    "answer": "Instead of polluting normalized tables with redundant columns and triggers, a Materialized View (`CREATE MATERIALIZED VIEW mv_orders AS SELECT ...`) computes and stores the join snapshot. Applications query the view with index-accelerated speed. The view can be refreshed concurrently in the background (`REFRESH MATERIALIZED VIEW CONCURRENTLY`).",
    "explanation": "Instead of polluting normalized tables with redundant columns and triggers, a Materialized View (`CREATE MATERIALIZED VIEW mv_orders AS SELECT ...`) computes and stores the join snapshot. Applications query the view with index-accelerated speed. The view can be refreshed concurrently in the background (`REFRESH MATERIALIZED VIEW CONCURRENTLY`).",
    "importantPoints": [
      "Keeps core OLTP tables strictly normalized.",
      "Pre-computes and indexes expensive join queries.",
      "Refreshed incrementally or periodically without locking reads."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Materialized Views for Controlled Denormalization",
        "code": "-- Demonstration for: Materialized Views for Controlled Denormalization\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Snapshot Data Pattern for Historical Invariance",
    "question": "Why MUST an e-commerce order items table intentionally denormalize product price and shipping address at checkout time?",
    "difficulty": "easy",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "snapshot-data",
      "e-commerce",
      "audit"
    ],
    "interviewAnswer": "Because master product prices and user addresses change over time. If order_items only references product_id, updating a product's price tomorrow would retroactively alter the historical revenue of orders placed years ago, violating legal and financial audit requirements.",
    "answer": "This is the classic \"Snapshot Pattern\" in relational design. An order represents an immutable historical legal contract. Storing `unit_price`, `tax_rate`, and `shipping_address` directly in the `order_items` and `orders` tables preserves the exact state at the moment of purchase, completely decoupled from future mutations in master tables.",
    "explanation": "This is the classic \"Snapshot Pattern\" in relational design. An order represents an immutable historical legal contract. Storing `unit_price`, `tax_rate`, and `shipping_address` directly in the `order_items` and `orders` tables preserves the exact state at the moment of purchase, completely decoupled from future mutations in master tables.",
    "importantPoints": [
      "Historical data must remain immutable.",
      "Master data changes must not alter past invoices or receipts.",
      "Essential for legal, accounting, and audit compliance."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Snapshot Data Pattern for Historical Invariance",
        "code": "-- Demonstration for: Snapshot Data Pattern for Historical Invariance\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Functional Dependency Determination Rules (Armstrong's Axioms)",
    "question": "What are Armstrong's Axioms for deriving functional dependencies in relational design?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "functional-dependency",
      "armstrongs-axioms"
    ],
    "interviewAnswer": "Armstrong's Axioms are three fundamental inference rules: 1) Reflexivity (if Y is a subset of X, then X -> Y); 2) Augmentation (if X -> Y, then XZ -> YZ); 3) Transitivity (if X -> Y and Y -> Z, then X -> Z). Secondary rules include Union, Decomposition, and Pseudotransitivity.",
    "answer": "Armstrong's Axioms form the mathematical foundation of relational database theory. They are sound and complete: any functional dependency logically implied by a given set of dependencies can be proven using these three rules. They allow database architects to compute the attribute closure (X+) and discover all candidate keys.",
    "explanation": "Armstrong's Axioms form the mathematical foundation of relational database theory. They are sound and complete: any functional dependency logically implied by a given set of dependencies can be proven using these three rules. They allow database architects to compute the attribute closure (X+) and discover all candidate keys.",
    "importantPoints": [
      "Reflexivity, Augmentation, and Transitivity.",
      "Sound and complete for all functional dependency deductions.",
      "Used by CASE tools to automate normalization."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Functional Dependency Determination Rules (Armstrong's Axioms)",
        "code": "-- Demonstration for: Functional Dependency Determination Rules (Armstrong's Axioms)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Lossless-Join Decomposition",
    "question": "What is a Lossless-Join Decomposition, and why is it mandatory during normalization?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "lossless-join",
      "decomposition",
      "relational-algebra"
    ],
    "interviewAnswer": "A decomposition of Table R into Tables R1 and R2 is lossless if natural-joining R1 and R2 produces EXACTLY the original relation R, with zero spurious (phantom) rows. A decomposition is lossless if and only if the intersection (R1 ∩ R2) forms a candidate key for at least one of the decomposed tables.",
    "answer": "If you normalize a table incorrectly, joining the decomposed pieces back together produces fake records that did not exist originally (lossy decomposition). Mathematical rule: `R1 ∩ R2 -> R1` OR `R1 ∩ R2 -> R2`. The common attributes must uniquely identify rows in at least one of the child tables.",
    "explanation": "If you normalize a table incorrectly, joining the decomposed pieces back together produces fake records that did not exist originally (lossy decomposition). Mathematical rule: `R1 ∩ R2 -> R1` OR `R1 ∩ R2 -> R2`. The common attributes must uniquely identify rows in at least one of the child tables.",
    "importantPoints": [
      "Prevents generation of false/spurious rows upon re-joining.",
      "Mandatory criterion for valid normalization.",
      "Enforced by primary key - foreign key relationships."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Lossless-Join Decomposition",
        "code": "-- Demonstration for: Lossless-Join Decomposition\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Dependency Preservation in Normalization",
    "question": "What is Dependency Preservation, and what trade-off occurs when decomposing to BCNF?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "dependency-preservation",
      "bcnf",
      "3nf"
    ],
    "interviewAnswer": "Dependency preservation ensures that all functional dependencies from the original relation can be validated by checking constraints on the individual decomposed tables without having to join them. Decomposing to 3NF always preserves dependencies; decomposing to BCNF sometimes loses dependency preservation.",
    "answer": "If checking a business rule requires joining two decomposed tables together, the dependency is not preserved, requiring expensive multi-table cross-checking triggers. In such rare cases, database designers deliberately choose 3NF over BCNF to preserve dependency validation within single-table constraints.",
    "explanation": "If checking a business rule requires joining two decomposed tables together, the dependency is not preserved, requiring expensive multi-table cross-checking triggers. In such rare cases, database designers deliberately choose 3NF over BCNF to preserve dependency validation within single-table constraints.",
    "importantPoints": [
      "Allows validating constraints on single tables without joins.",
      "3NF guarantees dependency preservation.",
      "BCNF does NOT always guarantee dependency preservation."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Dependency Preservation in Normalization",
        "code": "-- Demonstration for: Dependency Preservation in Normalization\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Database Redundancy vs Caching Layers (Redis)",
    "question": "Compare database denormalization with an external caching layer (like Redis) for accelerating slow read queries.",
    "difficulty": "medium",
    "questionType": "Trade-off",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "redis",
      "caching",
      "denormalization",
      "architecture"
    ],
    "interviewAnswer": "Denormalization keeps data inside the relational ACID boundary, allowing transactional consistency and SQL filtering/sorting, but adds storage and write overhead. Redis offloads read traffic completely from the database into RAM, but introduces cache invalidation complexity, stale data risks, and network overhead.",
    "answer": "Denormalization within the database allows complex SQL operations (`WHERE`, `GROUP BY`) on pre-joined data while retaining transactional rollback guarantees. Redis caching is key-value based: it is blazingly fast for direct ID lookups, but cannot easily perform arbitrary multi-column queries, and invalidating cache on updates is a notorious source of bugs.",
    "explanation": "Denormalization within the database allows complex SQL operations (`WHERE`, `GROUP BY`) on pre-joined data while retaining transactional rollback guarantees. Redis caching is key-value based: it is blazingly fast for direct ID lookups, but cannot easily perform arbitrary multi-column queries, and invalidating cache on updates is a notorious source of bugs.",
    "importantPoints": [
      "Denormalization retains SQL querying capabilities and ACID guarantees.",
      "Redis eliminates database CPU/IO entirely for read hits.",
      "Redis requires explicit cache invalidation logic (TTL, write-through)."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Database Redundancy vs Caching Layers (Redis)",
        "code": "-- Demonstration for: Database Redundancy vs Caching Layers (Redis)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Handling Polymorphic Relationships in Normalized Schemas",
    "question": "Why are polymorphic foreign keys (e.g. commentable_id + commentable_type) an anti-pattern in normalized relational databases?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "polymorphic",
      "anti-pattern",
      "foreign-keys"
    ],
    "interviewAnswer": "Polymorphic associations break relational integrity because a standard FOREIGN KEY constraint cannot reference multiple target tables conditionally based on a type column. This forces foreign key enforcement into application code, allowing orphaned records and corrupt data.",
    "answer": "In frameworks like Rails or Laravel, polymorphic associations store `(commentable_id, commentable_type = 'Post' | 'Photo')`. The database cannot create an actual foreign key constraint. The normalized solution is: 1) Class Table Inheritance (supertype/subtype table with single FK); 2) Separate nullable foreign keys (`post_id`, `photo_id`) with a CHECK constraint; 3) Separate junction tables.",
    "explanation": "In frameworks like Rails or Laravel, polymorphic associations store `(commentable_id, commentable_type = 'Post' | 'Photo')`. The database cannot create an actual foreign key constraint. The normalized solution is: 1) Class Table Inheritance (supertype/subtype table with single FK); 2) Separate nullable foreign keys (`post_id`, `photo_id`) with a CHECK constraint; 3) Separate junction tables.",
    "importantPoints": [
      "Disables database-level foreign key enforcement.",
      "Prone to orphaned rows and broken referential integrity.",
      "Normalized alternatives: Exclusive Arc (nullable FKs with CHECK) or Class Table Inheritance."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Handling Polymorphic Relationships in Normalized Schemas",
        "code": "-- Demonstration for: Handling Polymorphic Relationships in Normalized Schemas\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "JSON / Document Types in Modern RDBMS (Pragmatic Normalization)",
    "question": "When is it appropriate to store semi-structured JSONB data in a relational database rather than normalizing into relational tables?",
    "difficulty": "medium",
    "questionType": "Trade-off",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "jsonb",
      "postgresql",
      "hybrid-modeling"
    ],
    "interviewAnswer": "Use JSONB for sparse attributes (e.g. e-commerce product specs where thousands of categories have unique attributes), dynamic third-party API payloads, or audit log metadata that is read as a whole and never joined. Use normalized tables for core business entities that require relational joins, strict foreign keys, or ACID validations.",
    "answer": "Attempting to normalize product catalogs with 10,000 distinct attribute types leads to the dreaded Entity-Attribute-Value (EAV) anti-pattern. PostgreSQL JSONB provides a clean hybrid: store core attributes (id, sku, price, title) in normalized columns with indexes and constraints, and store category-specific flexible attributes in an indexed JSONB column.",
    "explanation": "Attempting to normalize product catalogs with 10,000 distinct attribute types leads to the dreaded Entity-Attribute-Value (EAV) anti-pattern. PostgreSQL JSONB provides a clean hybrid: store core attributes (id, sku, price, title) in normalized columns with indexes and constraints, and store category-specific flexible attributes in an indexed JSONB column.",
    "importantPoints": [
      "Prevents bloated EAV (Entity-Attribute-Value) anti-patterns.",
      "Ideal for sparse, dynamic, or third-party schema attributes.",
      "Core relational entities must remain normalized for indexing and FK integrity."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "JSON / Document Types in Modern RDBMS (Pragmatic Normalization)",
        "code": "-- Demonstration for: JSON / Document Types in Modern RDBMS (Pragmatic Normalization)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Entity-Attribute-Value (EAV) Anti-Pattern",
    "question": "What is the Entity-Attribute-Value (EAV) model, why is it considered an anti-pattern, and what is the modern relational alternative?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "eav",
      "anti-pattern",
      "database-design"
    ],
    "interviewAnswer": "EAV stores data across generic tables: (EntityID, AttributeName, AttributeValue). It is an anti-pattern because: 1) Cannot enforce standard NOT NULL or CHECK constraints; 2) All values are cast to strings, destroying data types; 3) Querying a single entity requires dozens of self-joins; 4) Modern alternative is PostgreSQL JSONB with GIN indexing.",
    "answer": "EAV was designed to handle dynamic schemas before native JSON support existed. Querying an entity with 5 attributes requires joining the EAV table 5 times. Furthermore, foreign keys cannot be validated, and integers/dates are stored as generic strings. Modern PostgreSQL JSONB provides schema flexibility while preserving indexing, validation, and single-row query performance.",
    "explanation": "EAV was designed to handle dynamic schemas before native JSON support existed. Querying an entity with 5 attributes requires joining the EAV table 5 times. Furthermore, foreign keys cannot be validated, and integers/dates are stored as generic strings. Modern PostgreSQL JSONB provides schema flexibility while preserving indexing, validation, and single-row query performance.",
    "importantPoints": [
      "Destroys data types, constraints, and query performance.",
      "Requires multiple self-joins to reconstruct a single entity.",
      "Replaced in modern architectures by native JSONB / document columns."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Entity-Attribute-Value (EAV) Anti-Pattern",
        "code": "-- Demonstration for: Entity-Attribute-Value (EAV) Anti-Pattern\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Class Table Inheritance vs Single Table Inheritance",
    "question": "Compare Single Table Inheritance (STI) and Class Table Inheritance (CTI) from a normalization and performance perspective.",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "inheritance",
      "sti",
      "cti",
      "database-design"
    ],
    "interviewAnswer": "Single Table Inheritance stores all parent and subtype attributes in one table with a discriminator column; it is denormalized, fast (zero joins), but violates normalization with many NULL columns. Class Table Inheritance stores common fields in a parent table and subtype fields in separate child tables sharing the same primary key; it is fully normalized (3NF) but requires JOINs.",
    "answer": "In STI (e.g. `vehicles` table with car, truck, bike attributes), querying any vehicle requires zero joins, but motorcycle rows have NULL for `number_of_doors`, wasting space and preventing NOT NULL constraints. In CTI (`vehicles`, `cars`, `trucks`), each subtype table has its own non-null constraints and references `vehicles.id`, but querying requires an INNER/LEFT JOIN.",
    "explanation": "In STI (e.g. `vehicles` table with car, truck, bike attributes), querying any vehicle requires zero joins, but motorcycle rows have NULL for `number_of_doors`, wasting space and preventing NOT NULL constraints. In CTI (`vehicles`, `cars`, `trucks`), each subtype table has its own non-null constraints and references `vehicles.id`, but querying requires an INNER/LEFT JOIN.",
    "importantPoints": [
      "STI: Denormalized, fast single-table queries, many NULLs, weak constraints.",
      "CTI: Fully normalized (3NF), strict constraints, requires joins across hierarchy.",
      "Concrete Table Inheritance: Separate independent tables per subtype without parent table."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Class Table Inheritance vs Single Table Inheritance",
        "code": "-- Demonstration for: Class Table Inheritance vs Single Table Inheritance\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Vertical Partitioning vs Horizontal Partitioning",
    "question": "What is the difference between Vertical Partitioning and Horizontal Partitioning in database normalization and scalability?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "partitioning",
      "vertical-partitioning",
      "scalability"
    ],
    "interviewAnswer": "Horizontal partitioning (sharding) splits rows across multiple tables or database nodes (e.g. orders_2025, orders_2026). Vertical partitioning splits columns into separate tables (e.g. moving rarely accessed, wide TEXT/BLOB columns into a separate detail table) to keep the primary table narrow and cache-friendly.",
    "answer": "Vertical partitioning is an intentional normalization strategy: if a `users` table contains 30 columns including a 2MB `profile_biography_text` or profile avatar blob, every table scan reads bloated pages. Moving `biography` to a 1-to-1 `user_profiles` table keeps the main `users` table narrow, allowing 5x more user rows to fit in buffer pool RAM.",
    "explanation": "Vertical partitioning is an intentional normalization strategy: if a `users` table contains 30 columns including a 2MB `profile_biography_text` or profile avatar blob, every table scan reads bloated pages. Moving `biography` to a 1-to-1 `user_profiles` table keeps the main `users` table narrow, allowing 5x more user rows to fit in buffer pool RAM.",
    "importantPoints": [
      "Horizontal: Divides rows (by date, hash, or range).",
      "Vertical: Divides columns (separating hot narrow fields from wide cold fields).",
      "Vertical partitioning dramatically improves buffer pool caching efficiency."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Vertical Partitioning vs Horizontal Partitioning",
        "code": "-- Demonstration for: Vertical Partitioning vs Horizontal Partitioning\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Normalizing Time-Varying Data (SCD Type 2)",
    "question": "How does Slowly Changing Dimension Type 2 (SCD Type 2) model changes over time in normalized systems?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "scd-type-2",
      "temporal-data",
      "history"
    ],
    "interviewAnswer": "SCD Type 2 tracks historical changes by inserting a new row for every modification, containing valid_from and valid_to timestamps (or effective dates) and an is_current boolean flag. This preserves full audit history without overwriting previous states.",
    "answer": "When a customer moves, updating their address in place (SCD Type 1) overwrites history. SCD Type 2 creates a new row: `valid_from = NOW()`, `valid_to = NULL`, `is_current = TRUE`, while updating the previous row to `valid_to = NOW()`, `is_current = FALSE`. A partial unique index `(customer_id) WHERE is_current = TRUE` guarantees exactly one active record.",
    "explanation": "When a customer moves, updating their address in place (SCD Type 1) overwrites history. SCD Type 2 creates a new row: `valid_from = NOW()`, `valid_to = NULL`, `is_current = TRUE`, while updating the previous row to `valid_to = NOW()`, `is_current = FALSE`. A partial unique index `(customer_id) WHERE is_current = TRUE` guarantees exactly one active record.",
    "importantPoints": [
      "Preserves complete audit history across all changes.",
      "Uses valid_from and valid_to date range columns.",
      "Partial unique index ensures single active current record per entity."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Normalizing Time-Varying Data (SCD Type 2)",
        "code": "-- Demonstration for: Normalizing Time-Varying Data (SCD Type 2)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Database Normalization and Microservices Boundaries",
    "question": "How does breaking a monolithic database into microservice databases impact traditional 3NF referential integrity?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "microservices",
      "foreign-keys",
      "referential-integrity"
    ],
    "interviewAnswer": "Splitting databases across microservice boundaries destroys foreign key constraints and ACID cross-table transactions. The architecture must adopt eventual consistency, asynchronous event-driven replication (CDC/Kafka), and application-level integrity validation.",
    "answer": "In a microservices architecture, the Order service cannot have a physical database foreign key to the Customer service. Each service possesses its own isolated database. Consistency is achieved via domain events (e.g. OrderCreated published to Kafka) and local denormalization (Order table stores `customer_id` and `customer_name` snapshot).",
    "explanation": "In a microservices architecture, the Order service cannot have a physical database foreign key to the Customer service. Each service possesses its own isolated database. Consistency is achieved via domain events (e.g. OrderCreated published to Kafka) and local denormalization (Order table stores `customer_id` and `customer_name` snapshot).",
    "importantPoints": [
      "Foreign key constraints cannot span microservice database boundaries.",
      "Cross-service consistency relies on event-driven sagas and CDC.",
      "Requires local denormalization of remote entity metadata."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Database Normalization and Microservices Boundaries",
        "code": "-- Demonstration for: Database Normalization and Microservices Boundaries\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Transitive Dependency Detection Algorithm",
    "question": "Given a relation R(A, B, C, D) with functional dependencies {A -> B, B -> C, C -> D}, what is the candidate key and what normal form is it in?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "functional-dependency",
      "candidate-key",
      "analysis"
    ],
    "interviewAnswer": "The candidate key is A (A+ = {A, B, C, D}). It is in 1NF and 2NF (since key is single column, no partial dependencies). However, it violates 3NF because B, C, and D are non-key attributes determining other non-key attributes (B -> C, C -> D are transitive dependencies). Thus, R is in 2NF only.",
    "answer": "Computing attribute closure: A+ = {A, B, C, D}, so A is the unique candidate key. There are no composite keys, so 2NF is satisfied. In 3NF, for every X -> Y, X must be a superkey or Y must be a prime attribute. In B -> C, B is not a superkey and C is not prime. In C -> D, C is not a superkey and D is not prime. Both are transitive dependencies. Decompose into: R1(A, B), R2(B, C), R3(C, D) to achieve 3NF and BCNF.",
    "explanation": "Computing attribute closure: A+ = {A, B, C, D}, so A is the unique candidate key. There are no composite keys, so 2NF is satisfied. In 3NF, for every X -> Y, X must be a superkey or Y must be a prime attribute. In B -> C, B is not a superkey and C is not prime. In C -> D, C is not a superkey and D is not prime. Both are transitive dependencies. Decompose into: R1(A, B), R2(B, C), R3(C, D) to achieve 3NF and BCNF.",
    "importantPoints": [
      "Attribute closure determines candidate keys.",
      "Non-superkey determinants violating prime rules identify 3NF failures.",
      "Decomposition into chained binary relations restores 3NF/BCNF."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Transitive Dependency Detection Algorithm",
        "code": "-- Demonstration for: Transitive Dependency Detection Algorithm\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Normalizing Recursive / Self-Referencing Hierarchies",
    "question": "How do you normalize self-referencing hierarchical relationships (e.g. categories with subcategories)?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "hierarchies",
      "self-referencing",
      "adjacency-list"
    ],
    "interviewAnswer": "Use an Adjacency List model: add a nullable parent_id column within the same table that references the table's own primary key (parent_id INT REFERENCES categories(id)). Root categories have parent_id = NULL.",
    "answer": "Instead of creating separate tables for Category, SubCategory, SubSubCategory, a single normalized table models arbitrary depth: `CREATE TABLE categories (category_id INT PRIMARY KEY, name VARCHAR(100), parent_id INT REFERENCES categories(category_id));`. Querying hierarchies is solved using Recursive CTEs.",
    "explanation": "Instead of creating separate tables for Category, SubCategory, SubSubCategory, a single normalized table models arbitrary depth: `CREATE TABLE categories (category_id INT PRIMARY KEY, name VARCHAR(100), parent_id INT REFERENCES categories(category_id));`. Querying hierarchies is solved using Recursive CTEs.",
    "importantPoints": [
      "Single table models infinite hierarchical depth.",
      "Foreign key points back to the same table primary key.",
      "Root nodes identified by parent_id IS NULL."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Normalizing Recursive / Self-Referencing Hierarchies",
        "code": "-- Demonstration for: Normalizing Recursive / Self-Referencing Hierarchies\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Closure Table Pattern for Fast Hierarchy Traversal",
    "question": "What is the Closure Table pattern for hierarchical data, and how does it trade normalization for query performance?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "closure-table",
      "hierarchies",
      "denormalization"
    ],
    "interviewAnswer": "A closure table stores every ancestor-descendant pair across all generations in a dedicated junction table (ancestor_id, descendant_id, depth). It trades storage space to make querying all descendants or ancestors an instantaneous indexed join, eliminating slow recursive queries.",
    "answer": "Adjacency lists require recursive CTE traversals. A Closure Table pre-computes all relationships: if A is parent of B and B is parent of C, the table stores: (A,A,0), (A,B,1), (A,C,2), (B,B,0), (B,C,1), (C,C,0). Querying \"all descendants of A\" is a simple single-level indexed lookup: `SELECT descendant_id FROM category_tree WHERE ancestor_id = A`.",
    "explanation": "Adjacency lists require recursive CTE traversals. A Closure Table pre-computes all relationships: if A is parent of B and B is parent of C, the table stores: (A,A,0), (A,B,1), (A,C,2), (B,B,0), (B,C,1), (C,C,0). Querying \"all descendants of A\" is a simple single-level indexed lookup: `SELECT descendant_id FROM category_tree WHERE ancestor_id = A`.",
    "importantPoints": [
      "Pre-computes all ancestor-descendant combinations.",
      "Eliminates recursive CTE execution during read queries.",
      "Requires maintaining path rows upon node movement or deletion."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Closure Table Pattern for Fast Hierarchy Traversal",
        "code": "-- Demonstration for: Closure Table Pattern for Fast Hierarchy Traversal\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "De-normalizing Aggregates: Real-Time vs Eventual Consistency",
    "question": "When denormalizing an aggregate counter (e.g. comment_count on posts), should it be updated synchronously in-transaction or asynchronously?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "concurrency",
      "counters",
      "eventual-consistency"
    ],
    "interviewAnswer": "Synchronous updates in the same transaction ensure 100% real-time consistency, but serialize concurrent writes and cause lock contention on viral posts. Asynchronous updates (via Kafka/Redis and batch database sync) remove write contention at the cost of slight eventual consistency.",
    "answer": "If 1,000 users comment on a viral post in one second, updating `posts.comment_count = comment_count + 1` in each transaction forces all 1,000 transactions to wait for the same row lock. Asynchronous reconciliation (e.g. incrementing Redis counters or flushing in batches every 5 seconds) decouples write latency and eliminates database row lock contention.",
    "explanation": "If 1,000 users comment on a viral post in one second, updating `posts.comment_count = comment_count + 1` in each transaction forces all 1,000 transactions to wait for the same row lock. Asynchronous reconciliation (e.g. incrementing Redis counters or flushing in batches every 5 seconds) decouples write latency and eliminates database row lock contention.",
    "importantPoints": [
      "In-transaction counters cause severe row lock contention on hot records.",
      "Asynchronous counter queues provide massive write scalability.",
      "Adopts eventual consistency for non-critical aggregate metrics."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "De-normalizing Aggregates: Real-Time vs Eventual Consistency",
        "code": "-- Demonstration for: De-normalizing Aggregates: Real-Time vs Eventual Consistency\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Normalizing Many-to-Many Relationships with Auxiliary Attributes",
    "question": "How do you model and normalize a Many-to-Many relationship that has additional attributes (e.g. student enrolled in course with enrollment_date and grade)?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "many-to-many",
      "junction-table",
      "associative-entity"
    ],
    "interviewAnswer": "Create an Associative Entity (Junction / Bridge table) containing foreign keys to both parent tables as a composite primary key, along with the relationship-specific attributes: PRIMARY KEY (student_id, course_id), enrollment_date DATE, grade CHAR(2).",
    "answer": "Many-to-many relationships cannot be modeled directly in relational tables without violating 1NF. An associative table decomposes the M:N relationship into two 1:N relationships. Any attribute describing the relationship itself (rather than the student or the course) belongs directly inside this bridge table.",
    "explanation": "Many-to-many relationships cannot be modeled directly in relational tables without violating 1NF. An associative table decomposes the M:N relationship into two 1:N relationships. Any attribute describing the relationship itself (rather than the student or the course) belongs directly inside this bridge table.",
    "importantPoints": [
      "Junction table converts M:N into two 1:N relationships.",
      "Composite primary key guarantees relationship uniqueness.",
      "Stores attributes specific to the intersection of both entities."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Normalizing Many-to-Many Relationships with Auxiliary Attributes",
        "code": "-- Demonstration for: Normalizing Many-to-Many Relationships with Auxiliary Attributes\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "title": "Audit Logging: Normalized Log Table vs CDC",
    "question": "Compare implementing audit trails via normalized database audit tables (triggers) versus Change Data Capture (CDC like Debezium).",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "normalization",
      "cdc",
      "audit-logging",
      "triggers",
      "debezium"
    ],
    "interviewAnswer": "Trigger-based audit tables run inside the application transaction, guaranteeing zero data loss, but double database write latency and cause table bloat. CDC reads the database transaction log (WAL) asynchronously outside the transaction path, providing zero-overhead audit streaming to Kafka/data lakes.",
    "answer": "Trigger-based auditing (`AFTER UPDATE INSERT INTO audit_log`) adds synchronous I/O and lock overhead to every transactional write. CDC engines (like Debezium) tail the database WAL files without locking database tables, streaming before-and-after row images directly to downstream analytical stores with near-zero OLTP impact.",
    "explanation": "Trigger-based auditing (`AFTER UPDATE INSERT INTO audit_log`) adds synchronous I/O and lock overhead to every transactional write. CDC engines (like Debezium) tail the database WAL files without locking database tables, streaming before-and-after row images directly to downstream analytical stores with near-zero OLTP impact.",
    "importantPoints": [
      "Trigger audit: Synchronous, ACID-safe, adds transaction latency and bloat.",
      "CDC (Debezium): Asynchronous log tailing, zero transaction overhead, decoupled."
    ],
    "commonMistakes": [
      "Confusing normalization theory with practical performance engineering."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Audit Logging: Normalized Log Table vs CDC",
        "code": "-- Demonstration for: Audit Logging: Normalized Log Table vs CDC\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
