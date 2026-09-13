import { SeedQuestion } from '../types';

export const constraintsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "PRIMARY KEY vs UNIQUE Constraint",
    "question": "What are the differences between a PRIMARY KEY and a UNIQUE constraint in relational databases?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "constraints",
      "primary-key",
      "unique",
      "nulls"
    ],
    "interviewAnswer": "A table can have only one PRIMARY KEY, which strictly forbids NULL values and typically defines the clustered index (table physical storage order). A table can have multiple UNIQUE constraints, which enforce uniqueness while permitting NULL values depending on the database dialect.",
    "answer": "PRIMARY KEY uniquely identifies each record in a relation. It enforces both uniqueness and NOT NULL on all designated columns. In engines like MySQL InnoDB and SQL Server, the PRIMARY KEY creates the clustered index by default. A UNIQUE constraint enforces uniqueness on non-primary candidate keys. Multiple UNIQUE constraints are allowed per table, and depending on dialect (SQL Server allows only 1 NULL, whereas PostgreSQL and MySQL allow multiple NULLs), NULLs are accepted.",
    "explanation": "In ANSI SQL, two NULL values are not considered equal (`NULL = NULL` evaluates to UNKNOWN). Therefore, PostgreSQL, Oracle, and MySQL permit multiple rows to have NULL in a column with a UNIQUE constraint. SQL Server historically diverged, treating NULL as a distinct unique value and permitting only a single row with NULL unless a filtered index (`WHERE col IS NOT NULL`) is used.",
    "importantPoints": [
      "Only 1 PRIMARY KEY per table; multiple UNIQUE constraints allowed.",
      "PRIMARY KEY strictly forbids NULLs; UNIQUE permits NULLs.",
      "PRIMARY KEY defaults to clustered index in MySQL InnoDB and SQL Server.",
      "PostgreSQL and MySQL allow multiple NULLs in UNIQUE columns; SQL Server allows only one by default."
    ],
    "commonMistakes": [
      "Believing UNIQUE constraints in SQL Server allow multiple NULL values without a filtered index.",
      "Assuming PRIMARY KEY is always an auto-incrementing integer.",
      "Creating multiple surrogate unique columns without defining business integrity rules."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "PRIMARY KEY and UNIQUE Constraints",
        "code": "CREATE TABLE users (\n  user_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, -- Exactly 1 PK\n  email VARCHAR(255) NOT NULL UNIQUE,                      -- Unique candidate key\n  phone_number VARCHAR(50) UNIQUE,                         -- Unique, permits NULLs\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "FOREIGN KEY Referential Actions: CASCADE, RESTRICT, SET NULL, and NO ACTION",
    "question": "Explain the different referential integrity actions for ON DELETE and ON UPDATE in FOREIGN KEY constraints.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "foreign-key",
      "cascade",
      "restrict",
      "referential-integrity"
    ],
    "interviewAnswer": "CASCADE automatically propagates the delete or update from the parent row to matching child rows. RESTRICT prevents the parent modification if child rows exist. SET NULL sets child foreign key columns to NULL. NO ACTION raises an error if child rows still reference the parent at statement end (or transaction end if deferred).",
    "answer": "Foreign key constraints ensure that references between tables remain valid: 1) CASCADE: Deleting or updating a parent record automatically deletes or updates all associated child records. 2) RESTRICT: Rejects the parent operation immediately if any child records reference it. 3) SET NULL: Updates the foreign key in child records to NULL (requires foreign key column to be nullable). 4) SET DEFAULT: Sets child foreign key to its defined default. 5) NO ACTION: In standard SQL, behaves like RESTRICT but check can be deferred to transaction commit if configured as DEFERRABLE.",
    "explanation": "CASCADE deletes can cause massive performance issues and locking storms in high-throughput systems. Deleting one parent user can cascade into deleting millions of activity logs, holding exclusive table locks and leading to transaction timeouts or deadlocks.",
    "importantPoints": [
      "CASCADE deletes child rows automatically.",
      "RESTRICT throws an error immediately if children exist.",
      "NO ACTION throws an error at statement or transaction commit time.",
      "SET NULL requires the foreign key column to be nullable.",
      "Large CASCADE deletes can cause catastrophic locking and replication lag."
    ],
    "commonMistakes": [
      "Using ON DELETE CASCADE indiscriminately, leading to accidental bulk data loss or locking deadlocks.",
      "Attempting ON DELETE SET NULL on a column defined as NOT NULL.",
      "Not indexing foreign key columns, causing full table scans on parent table deletes."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Foreign Key Referential Actions",
        "code": "CREATE TABLE orders (\n  order_id BIGINT PRIMARY KEY,\n  user_id BIGINT,\n  status_code VARCHAR(20),\n  CONSTRAINT fk_orders_user \n    FOREIGN KEY (user_id) REFERENCES users(user_id) \n    ON DELETE SET NULL \n    ON UPDATE CASCADE,\n  CONSTRAINT fk_orders_status \n    FOREIGN KEY (status_code) REFERENCES order_statuses(code) \n    ON DELETE RESTRICT\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Why Foreign Keys Must Be Indexed",
    "question": "Why is it critical to create secondary indexes on FOREIGN KEY columns?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "foreign-key",
      "indexes",
      "locks",
      "performance"
    ],
    "interviewAnswer": "Databases do NOT automatically index foreign key columns (except MySQL InnoDB). When a parent row is deleted or updated, the database must verify whether child rows reference it. Without an index on the child table's foreign key, the database must perform a full table scan of the child table, often acquiring table-level share locks that freeze concurrent operations.",
    "answer": "While primary keys and unique constraints automatically create underlying B-Tree indexes, foreign key columns in PostgreSQL, SQL Server, and Oracle do NOT get automatically indexed. When a parent record is deleted or its PK is modified: 1) The engine scans the child table to verify referential integrity; 2) Without an index, this scan is a full table scan; 3) In Oracle and older database engines, this scan acquires a table-level share lock on the child table, blocking all concurrent INSERT/UPDATE/DELETE operations on the child table; 4) Joins between parent and child tables also perform poorly without foreign key indexes.",
    "explanation": "Indexing foreign keys is one of the most common high-impact database performance optimizations. In high-concurrency systems, unindexed foreign keys are a primary source of inexplicable deadlocks and system freezes during parent row maintenance.",
    "importantPoints": [
      "Databases like PostgreSQL, SQL Server, and Oracle do not automatically index foreign keys.",
      "Deleting a parent row forces a full table scan on child tables if FK is unindexed.",
      "Can cause severe table-level locking and deadlocks.",
      "Foreign keys are the primary join columns in OLTP queries; indexing them accelerates queries."
    ],
    "commonMistakes": [
      "Assuming the database engine automatically creates an index on foreign key columns.",
      "Deleting parent records and wondering why unrelated child table transactions lock up.",
      "Only indexing the primary key and neglecting child join predicates."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Explicitly Indexing Foreign Keys",
        "code": "CREATE TABLE order_items (\n  item_id BIGINT PRIMARY KEY,\n  order_id BIGINT NOT NULL,\n  product_id BIGINT NOT NULL,\n  quantity INT,\n  CONSTRAINT fk_items_order FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,\n  CONSTRAINT fk_items_product FOREIGN KEY (product_id) REFERENCES products(product_id)\n);\n\n-- Crucial: Explicitly index every foreign key column!\nCREATE INDEX idx_order_items_order_id ON order_items(order_id);\nCREATE INDEX idx_order_items_product_id ON order_items(product_id);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "CHECK Constraints and Domain Integrity",
    "question": "What are CHECK constraints, what operations are allowed inside them, and when do they evaluate to true?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "constraints",
      "check-constraint",
      "domain-integrity",
      "data-quality"
    ],
    "interviewAnswer": "CHECK constraints enforce domain integrity by validating that values in one or more columns satisfy a boolean predicate. A CHECK constraint allows the insert or update if the predicate evaluates to TRUE or UNKNOWN (NULL); it only rejects the row if the expression evaluates strictly to FALSE.",
    "answer": "CHECK constraints enforce business rules at the schema level (e.g. `price > 0`, `end_date >= start_date`, `status IN ('Pending', 'Shipped')`). They can reference multiple columns in the same row. Crucially, under three-valued logic, a CHECK constraint passes if the condition evaluates to TRUE or UNKNOWN (NULL). If a column is NULL, a check like `CHECK (age >= 18)` will succeed because `NULL >= 18` is UNKNOWN.",
    "explanation": "If a column must both satisfy a check condition and not be empty, you must combine `NOT NULL` with the `CHECK` constraint. CHECK constraints cannot reference other tables, execute subqueries, or call non-deterministic functions (like `NOW()` or random generators) in standard SQL.",
    "importantPoints": [
      "Enforces row-level boolean expressions.",
      "Fails ONLY when the condition evaluates strictly to FALSE; passes on TRUE and UNKNOWN (NULL).",
      "Cannot reference other tables or execute subqueries.",
      "Combine with NOT NULL if NULL values should be rejected."
    ],
    "commonMistakes": [
      "Assuming CHECK (age >= 18) prevents NULL values from being inserted (it doesn't).",
      "Attempting to call CURRENT_TIMESTAMP or subqueries inside CHECK constraints.",
      "Relying solely on application-level validation without database-level CHECK constraints."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Multi-Column CHECK Constraint Example",
        "code": "CREATE TABLE reservations (\n  reservation_id BIGINT PRIMARY KEY,\n  check_in_date DATE NOT NULL,\n  check_out_date DATE NOT NULL,\n  room_rate NUMERIC(10, 2) NOT NULL,\n  discount_rate NUMERIC(5, 2) DEFAULT 0.0,\n  \n  -- Single-column check\n  CONSTRAINT chk_positive_rate CHECK (room_rate > 0),\n  -- Multi-column date validation\n  CONSTRAINT chk_valid_date_range CHECK (check_out_date > check_in_date),\n  -- Range check\n  CONSTRAINT chk_discount_bounds CHECK (discount_rate BETWEEN 0.0 AND 100.0)\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Deferred vs Immediate Constraints in Transactions",
    "question": "What are DEFERRABLE constraints in SQL, and when are they required?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "deferrable",
      "transactions",
      "integrity"
    ],
    "interviewAnswer": "An IMMEDIATE constraint is validated at the end of each SQL statement. A DEFERRABLE constraint can be configured to postpone validation until transaction COMMIT time. This is required for resolving circular foreign key dependencies or swapping unique values within a transaction.",
    "answer": "By default, constraints are `NOT DEFERRABLE INITIALLY IMMEDIATE`, meaning the database checks integrity after every single INSERT/UPDATE/DELETE. If an operation temporarily violates a constraint mid-transaction (e.g. swapping positions 1 and 2 in a unique ranking, or inserting a mutual circular reference where Department has a manager_id and Employee has a department_id), an immediate constraint aborts. Marking the constraint `DEFERRABLE INITIALLY DEFERRED` allows intermediate violations as long as the data is valid when `COMMIT` executes.",
    "explanation": "In PostgreSQL and Oracle, you can set deferrability per transaction using `SET CONSTRAINTS ALL DEFERRED`. At commit time, the engine validates all deferred constraints. If any constraint is violated at commit, the entire transaction rolls back.",
    "importantPoints": [
      "IMMEDIATE: Checked after every individual statement.",
      "DEFERRED: Checked at transaction COMMIT time.",
      "Must be declared as DEFERRABLE during table creation (e.g. in PostgreSQL/Oracle).",
      "Essential for circular references and reordering unique sequences."
    ],
    "commonMistakes": [
      "Failing to declare DEFERRABLE on tables with circular foreign key dependencies.",
      "Assuming MySQL supports DEFERRABLE constraints (MySQL InnoDB checks foreign keys immediately; workarounds use foreign_key_checks = 0)."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Using DEFERRABLE Constraints in PostgreSQL",
        "code": "CREATE TABLE ranking_items (\n  id INT PRIMARY KEY,\n  rank_position INT NOT NULL,\n  CONSTRAINT uq_rank UNIQUE (rank_position) DEFERRABLE INITIALLY IMMEDIATE\n);\n\n-- In a transaction swapping ranks 1 and 2:\nBEGIN;\nSET CONSTRAINTS uq_rank DEFERRED; -- Postpone check until commit\n\nUPDATE ranking_items SET rank_position = 2 WHERE id = 1; -- Temporarily duplicate rank 2\nUPDATE ranking_items SET rank_position = 1 WHERE id = 2; -- Resolves duplication\n\nCOMMIT; -- Constraint validated here: SUCCESS!"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Composite Primary Keys vs Surrogate Keys",
    "question": "Compare natural composite primary keys against surrogate primary keys (UUID vs Auto-increment BIGINT).",
    "difficulty": "medium",
    "questionType": "Trade-off",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "surrogate-keys",
      "composite-keys",
      "architecture"
    ],
    "interviewAnswer": "Composite keys enforce uniqueness naturally across real business attributes without extra columns, but make foreign keys wide and cumbersome. Surrogate keys (BIGINT or UUID) provide simple, stable, single-column joins, but require secondary unique constraints to prevent business duplicates.",
    "answer": "Natural composite keys (e.g., `tenant_id, user_id`) reflect domain reality. However, every child table referencing that entity must duplicate all composite columns in its foreign keys, increasing index size and join complexity. Surrogate keys provide lightweight integer/UUID identifiers, decoupling entity identity from mutable business attributes.",
    "explanation": "Natural composite keys (e.g., `tenant_id, user_id`) reflect domain reality. However, every child table referencing that entity must duplicate all composite columns in its foreign keys, increasing index size and join complexity. Surrogate keys provide lightweight integer/UUID identifiers, decoupling entity identity from mutable business attributes.",
    "importantPoints": [
      "Surrogate keys simplify foreign key joins.",
      "Composite natural keys avoid surrogate generation overhead.",
      "Surrogate keys must be paired with UNIQUE constraints on natural keys."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Composite Primary Keys vs Surrogate Keys",
        "code": "-- Example demonstration for: Composite Primary Keys vs Surrogate Keys\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "NOT NULL Constraint Performance and Optimizer Benefits",
    "question": "How does declaring a column NOT NULL assist the SQL query optimizer?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "not-null",
      "optimizer",
      "performance"
    ],
    "interviewAnswer": "NOT NULL guarantees that values cannot be NULL, allowing the optimizer to simplify boolean logic, eliminate three-valued logic overhead, optimize IS NULL / IS NOT NULL checks to constant TRUE/FALSE, and safely choose Hash/Merge Anti-Joins for NOT IN.",
    "answer": "When a column is nullable, the optimizer must generate fallback execution branches to handle three-valued logic. Declaring NOT NULL eliminates these edge cases, enabling optimizations like replacing NOT EXISTS with faster NOT IN semi-joins, removing unnecessary filter guards, and shrinking index storage.",
    "explanation": "When a column is nullable, the optimizer must generate fallback execution branches to handle three-valued logic. Declaring NOT NULL eliminates these edge cases, enabling optimizations like replacing NOT EXISTS with faster NOT IN semi-joins, removing unnecessary filter guards, and shrinking index storage.",
    "importantPoints": [
      "Eliminates three-valued logic evaluation.",
      "Allows optimizer to rewrite subqueries without NULL-safe guards.",
      "Reduces row overhead in some storage engines."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "NOT NULL Constraint Performance and Optimizer Benefits",
        "code": "-- Example demonstration for: NOT NULL Constraint Performance and Optimizer Benefits\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "DEFAULT Constraints and Generation Expressions",
    "question": "How do DEFAULT constraints work, and what is the difference between static defaults and generated/identity columns?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "default",
      "identity",
      "generated-columns"
    ],
    "interviewAnswer": "DEFAULT supplies a pre-set value (e.g., CURRENT_TIMESTAMP, 'ACTIVE') when an INSERT omits the column. GENERATED ALWAYS AS IDENTITY produces sequential IDs, and GENERATED ALWAYS AS (expression) creates virtual or stored computed columns.",
    "answer": "DEFAULT values populate columns when omitted in an INSERT statement. In modern SQL, IDENTITY columns (`GENERATED ALWAYS AS IDENTITY`) adhere to ANSI standards for auto-incrementing numbers. Generated (computed) columns calculate their value dynamically based on other columns in the same row.",
    "explanation": "DEFAULT values populate columns when omitted in an INSERT statement. In modern SQL, IDENTITY columns (`GENERATED ALWAYS AS IDENTITY`) adhere to ANSI standards for auto-incrementing numbers. Generated (computed) columns calculate their value dynamically based on other columns in the same row.",
    "importantPoints": [
      "DEFAULT applies only when column is omitted from INSERT.",
      "Passing explicit NULL overrides the DEFAULT unless guarded.",
      "Identity columns supersede legacy SERIAL/AUTO_INCREMENT."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "DEFAULT Constraints and Generation Expressions",
        "code": "-- Example demonstration for: DEFAULT Constraints and Generation Expressions\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Exclusion Constraints in PostgreSQL",
    "question": "What is an Exclusion Constraint (EXCLUDE) in PostgreSQL, and how does it prevent booking schedule overlaps?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "exclusion-constraints",
      "postgresql",
      "data-integrity"
    ],
    "interviewAnswer": "An exclusion constraint ensures that if any two rows are compared on specified columns using specified operators (like && overlap), at least one operator comparison returns false. It prevents overlapping date ranges or spatial collisions using GiST indexes.",
    "answer": "Unique constraints only test equality (`=`). Exclusion constraints generalize this to any operator: `EXCLUDE USING gist (room_id WITH =, reservation_period WITH &&)`. This mathematically prevents double-booking rooms by rejecting any insert whose reservation range overlaps (`&&`) an existing booking for the same room.",
    "explanation": "Unique constraints only test equality (`=`). Exclusion constraints generalize this to any operator: `EXCLUDE USING gist (room_id WITH =, reservation_period WITH &&)`. This mathematically prevents double-booking rooms by rejecting any insert whose reservation range overlaps (`&&`) an existing booking for the same room.",
    "importantPoints": [
      "Generalizes uniqueness to non-equality operators (e.g. overlap &&).",
      "Requires GiST index.",
      "Solves reservation overlap without race conditions or triggers."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Exclusion Constraints in PostgreSQL",
        "code": "-- Example demonstration for: Exclusion Constraints in PostgreSQL\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Adding NOT NULL to Large Existing Tables Without Table Locks",
    "question": "How do you safely add a NOT NULL constraint to a 50-million-row table in PostgreSQL without locking out writes for minutes?",
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "not-null",
      "ddl",
      "locks",
      "migrations"
    ],
    "interviewAnswer": "In PostgreSQL: 1) Add a CHECK (col IS NOT NULL) constraint marked NOT VALID (instant lock); 2) Run ALTER TABLE ... VALIDATE CONSTRAINT (validates in background without exclusive write locks); 3) Alter column SET NOT NULL (instantaneous because Postgres knows it is validated).",
    "answer": "Directly running `ALTER TABLE t ALTER COLUMN c SET NOT NULL` requires a table rewrite or full table scan under an AccessExclusiveLock, blocking all reads and writes. Adding a `CHECK (c IS NOT NULL) NOT VALID` acquires a brief lock. Validating it runs concurrently without blocking writes. Once validated, Postgres 12+ recognizes the check and allows adding `SET NOT NULL` instantaneously.",
    "explanation": "Directly running `ALTER TABLE t ALTER COLUMN c SET NOT NULL` requires a table rewrite or full table scan under an AccessExclusiveLock, blocking all reads and writes. Adding a `CHECK (c IS NOT NULL) NOT VALID` acquires a brief lock. Validating it runs concurrently without blocking writes. Once validated, Postgres 12+ recognizes the check and allows adding `SET NOT NULL` instantaneously.",
    "importantPoints": [
      "Direct ALTER TABLE locks out production traffic.",
      "NOT VALID check + VALIDATE CONSTRAINT prevents long locks.",
      "Essential for zero-downtime database migrations."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Adding NOT NULL to Large Existing Tables Without Table Locks",
        "code": "-- Example demonstration for: Adding NOT NULL to Large Existing Tables Without Table Locks\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Unique Constraints on Multiple Columns (Composite Unique)",
    "question": "How does a composite UNIQUE constraint handle NULL values across multiple columns?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "unique",
      "composite-key",
      "null-handling"
    ],
    "interviewAnswer": "In ANSI SQL and PostgreSQL, a composite unique constraint is violated only if all non-null columns match and at least one is not null. If any column in the composite key is NULL, multiple identical rows can coexist unless UNIQUE NULLS NOT DISTINCT is specified.",
    "answer": "If you define `UNIQUE (company_id, department_id)`, in standard SQL two rows with `(1, NULL)` and `(1, NULL)` do NOT violate uniqueness because NULL is unknown. PostgreSQL 15 introduced `UNIQUE NULLS NOT DISTINCT` to treat NULLs as equal, preventing duplicate NULL combinations.",
    "explanation": "If you define `UNIQUE (company_id, department_id)`, in standard SQL two rows with `(1, NULL)` and `(1, NULL)` do NOT violate uniqueness because NULL is unknown. PostgreSQL 15 introduced `UNIQUE NULLS NOT DISTINCT` to treat NULLs as equal, preventing duplicate NULL combinations.",
    "importantPoints": [
      "Standard SQL allows duplicate composite rows if any column is NULL.",
      "PostgreSQL 15+ supports UNIQUE NULLS NOT DISTINCT.",
      "SQL Server rejects duplicate NULL composite keys."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Unique Constraints on Multiple Columns (Composite Unique)",
        "code": "-- Example demonstration for: Unique Constraints on Multiple Columns (Composite Unique)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Disabling vs Dropping Constraints for Bulk Data Loads",
    "question": "When and how should constraints be disabled during bulk ETL loading, and what are the risks?",
    "difficulty": "medium",
    "questionType": "Trade-off",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "etl",
      "bulk-load",
      "performance"
    ],
    "interviewAnswer": "Disabling foreign keys and secondary indexes during massive bulk loads accelerates insertion by orders of magnitude by skipping per-row integrity checks. The critical risk is data corruption or orphan records if re-validation is skipped upon re-enabling.",
    "answer": "During multi-million row batch ETL, checking foreign keys and maintaining unique indexes per row causes massive random I/O. Disabling constraints (`ALTER TABLE ... NOCHECK CONSTRAINT` in SQL Server or dropping them temporarily) allows high-speed bulk ingestion. Once loaded, constraints must be re-enabled with validation.",
    "explanation": "During multi-million row batch ETL, checking foreign keys and maintaining unique indexes per row causes massive random I/O. Disabling constraints (`ALTER TABLE ... NOCHECK CONSTRAINT` in SQL Server or dropping them temporarily) allows high-speed bulk ingestion. Once loaded, constraints must be re-enabled with validation.",
    "importantPoints": [
      "Dramatically accelerates bulk insert throughput.",
      "Requires explicit validation when re-enabled.",
      "Must be isolated from public traffic to avoid corrupt data injection."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Disabling vs Dropping Constraints for Bulk Data Loads",
        "code": "-- Example demonstration for: Disabling vs Dropping Constraints for Bulk Data Loads\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "CASCADE Deletes Leading to Deadlocks in High-Concurrency Systems",
    "question": "How can ON DELETE CASCADE lead to deadlocks in high-concurrency relational applications?",
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "deadlocks",
      "cascade",
      "concurrency"
    ],
    "interviewAnswer": "When multiple transactions delete or update parent rows, cascade operations acquire row-level or gap locks across child tables in differing orders. If Transaction A locks Child 1 then Child 2, while Transaction B locks Child 2 then Child 1, a deadlock occurs.",
    "answer": "Cascading deletes automatically traverse foreign key trees. If two concurrent transactions delete different users, their cascades may touch shared child tables (e.g., shared comments or session tables) in conflicting lock acquisition sequences. This causes cyclic lock waits, resulting in deadlock aborts.",
    "explanation": "Cascading deletes automatically traverse foreign key trees. If two concurrent transactions delete different users, their cascades may touch shared child tables (e.g., shared comments or session tables) in conflicting lock acquisition sequences. This causes cyclic lock waits, resulting in deadlock aborts.",
    "importantPoints": [
      "Cascades touch multiple tables behind the scenes.",
      "Lock acquisition order across child tables can conflict.",
      "In high-throughput systems, explicit soft deletes or structured batch cleanup are preferred."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "CASCADE Deletes Leading to Deadlocks in High-Concurrency Systems",
        "code": "-- Example demonstration for: CASCADE Deletes Leading to Deadlocks in High-Concurrency Systems\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Handling Circular Foreign Key Dependencies",
    "question": "How do you insert records when Table A references Table B and Table B simultaneously references Table A?",
    "difficulty": "hard",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "circular-dependency",
      "deferrable",
      "foreign-key"
    ],
    "interviewAnswer": "Either: 1) Make one of the foreign keys DEFERRABLE and insert both records within a single transaction; 2) Insert Record A with a NULL foreign key, insert Record B referencing A, then UPDATE Record A with B's ID.",
    "answer": "Mutual dependencies (e.g. `Department.manager_id -> Employee.id` and `Employee.department_id -> Department.id`) cannot be inserted with immediate non-null constraints. The solution is either setting foreign keys as DEFERRABLE INITIALLY DEFERRED so checks occur at COMMIT, or inserting with a nullable FK followed by an UPDATE.",
    "explanation": "Mutual dependencies (e.g. `Department.manager_id -> Employee.id` and `Employee.department_id -> Department.id`) cannot be inserted with immediate non-null constraints. The solution is either setting foreign keys as DEFERRABLE INITIALLY DEFERRED so checks occur at COMMIT, or inserting with a nullable FK followed by an UPDATE.",
    "importantPoints": [
      "Circular dependencies prevent naive sequential INSERTs.",
      "Solved via DEFERRABLE constraints or two-phase insert/update.",
      "Often indicates a design smell that could be resolved with a junction table."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Handling Circular Foreign Key Dependencies",
        "code": "-- Example demonstration for: Handling Circular Foreign Key Dependencies\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Filtered Unique Indexes vs Partial Constraints",
    "question": "How do you enforce uniqueness only for active records (e.g., email must be unique only WHERE is_active = true)?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "filtered-index",
      "partial-index",
      "soft-delete"
    ],
    "interviewAnswer": "Use a partial unique index: CREATE UNIQUE INDEX uq_active_user_email ON users(email) WHERE is_active = true; This allows soft-deleted users (is_active = false) to share emails while preventing duplicates among active users.",
    "answer": "Standard UNIQUE constraints apply to all rows unconditionally. In soft-delete architectures, a user who cancels their account should not block a new user from signing up with that email. A partial unique index (`WHERE is_deleted = false`) enforces uniqueness strictly on active records while keeping historical records intact.",
    "explanation": "Standard UNIQUE constraints apply to all rows unconditionally. In soft-delete architectures, a user who cancels their account should not block a new user from signing up with that email. A partial unique index (`WHERE is_deleted = false`) enforces uniqueness strictly on active records while keeping historical records intact.",
    "importantPoints": [
      "Enables soft deletes without unique constraint collisions.",
      "Supported in PostgreSQL, SQLite, and SQL Server (Filtered Index).",
      "Reduces index size by indexing only active rows."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Filtered Unique Indexes vs Partial Constraints",
        "code": "-- Example demonstration for: Filtered Unique Indexes vs Partial Constraints\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Foreign Key Constraints with Composite Primary Keys",
    "question": "How do you establish a foreign key pointing to a composite primary key?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "foreign-key",
      "composite-key"
    ],
    "interviewAnswer": "FOREIGN KEY (col1, col2) REFERENCES parent_table(pk1, pk2). Both the column types and order must match the parent primary key definition.",
    "answer": "When a parent table uses a composite key `PRIMARY KEY (tenant_id, account_id)`, child tables referencing it must specify the matching tuple in their constraint: `CONSTRAINT fk_child FOREIGN KEY (tenant_id, account_id) REFERENCES accounts(tenant_id, account_id)`.",
    "explanation": "When a parent table uses a composite key `PRIMARY KEY (tenant_id, account_id)`, child tables referencing it must specify the matching tuple in their constraint: `CONSTRAINT fk_child FOREIGN KEY (tenant_id, account_id) REFERENCES accounts(tenant_id, account_id)`.",
    "importantPoints": [
      "Must reference all columns of the parent composite key.",
      "Column count, order, and data types must match exactly."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Foreign Key Constraints with Composite Primary Keys",
        "code": "-- Example demonstration for: Foreign Key Constraints with Composite Primary Keys\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Constraint Naming Conventions and Why Auto-Generated Names Are Risky",
    "question": "Why should you always explicitly name constraints (e.g., CONSTRAINT fk_orders_users) instead of using database defaults?",
    "difficulty": "easy",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "naming-conventions",
      "migrations",
      "best-practices"
    ],
    "interviewAnswer": "Auto-generated constraint names vary across environments, operating systems, and database versions. Explicit naming ensures predictable schema migrations, makes error logs intelligible, and allows automated DROP/ALTER scripts to work reliably.",
    "answer": "If you omit constraint names, engines assign pseudorandom names like `SYS_C001234` or `users_ibfk_1`. When a constraint violation occurs, production error logs display meaningless names. Furthermore, migration scripts that drop or modify constraints fail when applied to staging or production because the generated names differ.",
    "explanation": "If you omit constraint names, engines assign pseudorandom names like `SYS_C001234` or `users_ibfk_1`. When a constraint violation occurs, production error logs display meaningless names. Furthermore, migration scripts that drop or modify constraints fail when applied to staging or production because the generated names differ.",
    "importantPoints": [
      "Explicit names ensure identical schema across environments.",
      "Enables readable constraint violation error messages.",
      "Allows safe ALTER TABLE DROP CONSTRAINT in CI/CD migrations."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Constraint Naming Conventions and Why Auto-Generated Names Are Risky",
        "code": "-- Example demonstration for: Constraint Naming Conventions and Why Auto-Generated Names Are Risky\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "CHECK Constraint vs Foreign Key for Enumerated Lookups",
    "question": "When should you use a CHECK (status IN (...)) constraint versus a foreign key to a status lookup table?",
    "difficulty": "medium",
    "questionType": "Trade-off",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "check-constraint",
      "lookup-table",
      "trade-offs"
    ],
    "interviewAnswer": "Use CHECK constraints for static, rarely changing domain values with no additional attributes (e.g. gender, card suits). Use a foreign key lookup table when statuses have metadata (descriptions, display colors, active flags) or when business users need to add statuses without running DDL schema migrations.",
    "answer": "CHECK constraints avoid table join overhead and have zero storage footprint. However, altering a CHECK constraint requires an `ALTER TABLE` DDL statement. Foreign key lookup tables allow adding new statuses via simple `INSERT` statements, permit UI queries to list all valid options, and can hold auxiliary metadata.",
    "explanation": "CHECK constraints avoid table join overhead and have zero storage footprint. However, altering a CHECK constraint requires an `ALTER TABLE` DDL statement. Foreign key lookup tables allow adding new statuses via simple `INSERT` statements, permit UI queries to list all valid options, and can hold auxiliary metadata.",
    "importantPoints": [
      "CHECK: zero-join, static values, requires DDL to change.",
      "FK lookup: dynamic values via DML, supports metadata, joins required."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "CHECK Constraint vs Foreign Key for Enumerated Lookups",
        "code": "-- Example demonstration for: CHECK Constraint vs Foreign Key for Enumerated Lookups\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Constraint Enforcement in SQLite vs Standard Relational Engines",
    "question": "How does SQLite differ from PostgreSQL or SQL Server regarding constraint enforcement by default?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "sqlite",
      "foreign-keys",
      "dialect-differences"
    ],
    "interviewAnswer": "In SQLite, foreign key constraint enforcement is DISABLED by default for backward compatibility! You must explicitly execute PRAGMA foreign_keys = ON; at connection initialization.",
    "answer": "A major pitfall in SQLite is that foreign key constraints defined in `CREATE TABLE` are completely ignored unless enabled per-connection via `PRAGMA foreign_keys = ON`. Furthermore, SQLite uses dynamic typing, meaning type constraints are advisory unless strict tables (`STRICT`) are declared.",
    "explanation": "A major pitfall in SQLite is that foreign key constraints defined in `CREATE TABLE` are completely ignored unless enabled per-connection via `PRAGMA foreign_keys = ON`. Furthermore, SQLite uses dynamic typing, meaning type constraints are advisory unless strict tables (`STRICT`) are declared.",
    "importantPoints": [
      "SQLite disables foreign key checks by default.",
      "Must execute PRAGMA foreign_keys = ON per connection.",
      "Introduced STRICT tables in SQLite 3.37+ for type checking."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Constraint Enforcement in SQLite vs Standard Relational Engines",
        "code": "-- Example demonstration for: Constraint Enforcement in SQLite vs Standard Relational Engines\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Database Constraints vs Application-Level Validation",
    "question": "Why is application-level validation alone insufficient for maintaining relational data integrity?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "data-integrity",
      "concurrency",
      "race-conditions"
    ],
    "interviewAnswer": "Application validation cannot prevent concurrent race conditions (like two users simultaneously registering the same email). Only database constraints enforce atomicity and serialization at the storage layer. Database constraints also protect against bad data from direct admin scripts, batch jobs, and multiple microservices.",
    "answer": "Application-level validation suffers from time-of-check to time-of-use (TOCTOU) race conditions: two app servers checking `SELECT COUNT(*) WHERE email = 'x'` will both see 0 and both issue an `INSERT`. A database UNIQUE constraint serializes the write and guarantees only one succeeds. Constraints also act as the ultimate line of defense against buggy background workers, direct SQL patches, and multiple clients.",
    "explanation": "Application-level validation suffers from time-of-check to time-of-use (TOCTOU) race conditions: two app servers checking `SELECT COUNT(*) WHERE email = 'x'` will both see 0 and both issue an `INSERT`. A database UNIQUE constraint serializes the write and guarantees only one succeeds. Constraints also act as the ultimate line of defense against buggy background workers, direct SQL patches, and multiple clients.",
    "importantPoints": [
      "Application checks are vulnerable to concurrency race conditions.",
      "Database constraints enforce ACID atomicity and serialization.",
      "Guarantees integrity across multiple apps, APIs, and direct DB scripts."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Database Constraints vs Application-Level Validation",
        "code": "-- Example demonstration for: Database Constraints vs Application-Level Validation\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Validating Unvalidated Constraints Concurrently in PostgreSQL",
    "question": "How does ALTER TABLE ... VALIDATE CONSTRAINT work under the hood in PostgreSQL?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "postgresql",
      "validate-constraint",
      "ddl"
    ],
    "interviewAnswer": "VALIDATE CONSTRAINT acquires only a SHARE UPDATE EXCLUSIVE lock (which allows concurrent SELECT, INSERT, UPDATE, DELETE). It performs a sequential scan of the table verifying existing rows against the constraint, then marks the constraint valid.",
    "answer": "By decoupling constraint addition (`ADD CONSTRAINT ... NOT VALID`, which takes an instant lock) from validation (`VALIDATE CONSTRAINT`), PostgreSQL eliminates maintenance downtime. While the validation scan runs, new writes are validated by the active constraint, and old rows are checked concurrently without blocking reads or writes.",
    "explanation": "By decoupling constraint addition (`ADD CONSTRAINT ... NOT VALID`, which takes an instant lock) from validation (`VALIDATE CONSTRAINT`), PostgreSQL eliminates maintenance downtime. While the validation scan runs, new writes are validated by the active constraint, and old rows are checked concurrently without blocking reads or writes.",
    "importantPoints": [
      "Acquires weak SHARE UPDATE EXCLUSIVE lock.",
      "Allows full read and write concurrency during validation.",
      "Essential pattern for zero-downtime production migrations."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Validating Unvalidated Constraints Concurrently in PostgreSQL",
        "code": "-- Example demonstration for: Validating Unvalidated Constraints Concurrently in PostgreSQL\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "NOT NULL vs CHECK (col IS NOT NULL)",
    "question": "Is there any difference between declaring a column NOT NULL vs adding a CHECK (col IS NOT NULL) constraint?",
    "difficulty": "hard",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "not-null",
      "check-constraint",
      "internals"
    ],
    "interviewAnswer": "Yes. Standard NOT NULL is stored as a direct column attribute bitmask in catalog headers, giving the optimizer immediate knowledge to prune NULL branches. A CHECK constraint is stored as an expression that must be evaluated, which can prevent certain index optimizations and primary key eligibility.",
    "answer": "Relational engines treat explicit `NOT NULL` column definitions with special storage and optimization paths. In PostgreSQL and SQL Server, a column can only be part of a PRIMARY KEY if it is declared `NOT NULL`; having a `CHECK (col IS NOT NULL)` is not recognized as satisfying primary key prerequisites.",
    "explanation": "Relational engines treat explicit `NOT NULL` column definitions with special storage and optimization paths. In PostgreSQL and SQL Server, a column can only be part of a PRIMARY KEY if it is declared `NOT NULL`; having a `CHECK (col IS NOT NULL)` is not recognized as satisfying primary key prerequisites.",
    "importantPoints": [
      "PRIMARY KEY requires explicit NOT NULL, not CHECK.",
      "NOT NULL has lower storage and evaluation overhead.",
      "Direct NOT NULL provides superior optimizer visibility."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "NOT NULL vs CHECK (col IS NOT NULL)",
        "code": "-- Example demonstration for: NOT NULL vs CHECK (col IS NOT NULL)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Drop Foreign Key Constraint Syntax Variations",
    "question": "How do you drop a foreign key constraint across MySQL, PostgreSQL, and SQL Server?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "foreign-key",
      "drop-constraint",
      "syntax"
    ],
    "interviewAnswer": "MySQL: ALTER TABLE t DROP FOREIGN KEY fk_name; PostgreSQL and SQL Server: ALTER TABLE t DROP CONSTRAINT fk_name.",
    "answer": "Syntax varies by dialect: MySQL uses `ALTER TABLE orders DROP FOREIGN KEY fk_orders_users;` (and requires dropping the corresponding index separately if desired). PostgreSQL and SQL Server use standard ANSI SQL: `ALTER TABLE orders DROP CONSTRAINT fk_orders_users;`.",
    "explanation": "Syntax varies by dialect: MySQL uses `ALTER TABLE orders DROP FOREIGN KEY fk_orders_users;` (and requires dropping the corresponding index separately if desired). PostgreSQL and SQL Server use standard ANSI SQL: `ALTER TABLE orders DROP CONSTRAINT fk_orders_users;`.",
    "importantPoints": [
      "MySQL requires DROP FOREIGN KEY keyword.",
      "Postgres and SQL Server use DROP CONSTRAINT.",
      "Dropping a foreign key in MySQL leaves the secondary index intact."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Drop Foreign Key Constraint Syntax Variations",
        "code": "-- Example demonstration for: Drop Foreign Key Constraint Syntax Variations\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Cascade Update Use Cases and Best Practices",
    "question": "When is ON UPDATE CASCADE actually useful, and why is it rarely needed with surrogate primary keys?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "cascade-update",
      "surrogate-keys",
      "normalization"
    ],
    "interviewAnswer": "ON UPDATE CASCADE is essential when natural business keys (such as VAT numbers, ISO currency codes, or SKU numbers) act as primary keys and can legally change. With surrogate keys (auto-increment BIGINT or UUID), primary keys are immutable, making ON UPDATE CASCADE virtually unnecessary.",
    "answer": "In schemas utilizing natural keys, updating a parent key (e.g. updating a warehouse code from \"WH-1\" to \"WH-EAST\") requires updating all related records across dozens of tables. `ON UPDATE CASCADE` propagates this change automatically. In surrogate key designs, IDs never change, rendering update cascades irrelevant.",
    "explanation": "In schemas utilizing natural keys, updating a parent key (e.g. updating a warehouse code from \"WH-1\" to \"WH-EAST\") requires updating all related records across dozens of tables. `ON UPDATE CASCADE` propagates this change automatically. In surrogate key designs, IDs never change, rendering update cascades irrelevant.",
    "importantPoints": [
      "Useful exclusively for mutable natural primary keys.",
      "Surrogate keys should never be updated, making cascade update obsolete in surrogate schemas."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Cascade Update Use Cases and Best Practices",
        "code": "-- Example demonstration for: Cascade Update Use Cases and Best Practices\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "title": "Soft Deletes and Broken Foreign Key Constraints",
    "question": "Why do soft deletes (is_deleted = true) break standard database foreign key constraints?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "constraints",
      "soft-delete",
      "foreign-key",
      "data-integrity"
    ],
    "interviewAnswer": "Foreign keys only enforce physical row existence, not logical state. If a parent record is soft-deleted (is_deleted = true), the database still allows child records to be inserted referencing that logically deleted parent. Standard FKs cannot prevent referencing soft-deleted records.",
    "answer": "Relational foreign keys cannot check column attributes in the referenced table; they only check whether a row with that primary key exists physically. A soft-deleted customer remains in the database, so new orders referencing that customer are happily accepted. Solutions include using composite foreign keys with partial unique indexes or database triggers.",
    "explanation": "Relational foreign keys cannot check column attributes in the referenced table; they only check whether a row with that primary key exists physically. A soft-deleted customer remains in the database, so new orders referencing that customer are happily accepted. Solutions include using composite foreign keys with partial unique indexes or database triggers.",
    "importantPoints": [
      "Standard FKs verify physical existence, ignoring logical soft-delete flags.",
      "Can lead to \"ghost\" parent-child associations.",
      "Overcome via composite foreign keys pointing to (id, is_deleted) or database triggers."
    ],
    "commonMistakes": [
      "Neglecting concurrency locks or dialect differences."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Soft Deletes and Broken Foreign Key Constraints",
        "code": "-- Example demonstration for: Soft Deletes and Broken Foreign Key Constraints\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
