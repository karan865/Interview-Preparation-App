import { SeedQuestion } from '../types';

export const tsClassesQuestions: SeedQuestion[] = [
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "What is the difference between TypeScript's 'private' modifier and ECMAScript private fields (#)?",
    "title": "What is the difference between TypeScript's 'private' modifier and ECMAScript private fields (#)?",
    "answer": "TypeScript's 'private' is a compile-time check erased in JS; ECMAScript '#private' enforces true runtime encapsulation using private identifiers in modern JS engines.",
    "explanation": "TypeScript's `private x: number` keyword only restricts access at compile time. In emitted JS, it becomes a regular public property accessible via `obj['x']` or runtime reflection. ECMAScript private fields (`#x`) are hard private at the V8 engine level; attempting to access `#x` outside the class throws a runtime SyntaxError.",
    "interviewAnswer": "TypeScript's 'private' is a compile-time check erased in JS; ECMAScript '#private' enforces true runtime encapsulation using private identifiers in modern JS engines. TypeScript's `private x: number` keyword only restricts access at compile time. In emitted JS, it becomes a regular public property accessible via `obj['x']` or runtime reflection. ECMAScript private fields (`#x`) are hard private at the V8 engine level; attempting to access `#x` outside the class throws a runtime SyntaxError.",
    "importantPoints": [
      "private keyword: Soft privacy (compile-time only, erased in JS output)",
      "#field: Hard privacy (runtime encapsulation enforced by JS engine)",
      "private properties are visible in console logs and object keys; #fields are inaccessible",
      "Prefer #fields when security or strict runtime isolation is required"
    ],
    "commonMistakes": [
      "Assuming TypeScript's `private` keyword prevents external access to sensitive secrets at runtime"
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
      "typescript",
      "classes",
      "private",
      "ecmascript",
      "encapsulation"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class Account {\n  private softPin = 1234; // Compile-time only: accessible via (acc as any).softPin\n  #hardPin = 5678;        // True runtime private: SyntaxError if accessed outside!\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "What are Parameter Properties in TypeScript class constructors and how do they reduce boilerplate?",
    "title": "What are Parameter Properties in TypeScript class constructors and how do they reduce boilerplate?",
    "answer": "Parameter properties declare and initialize class member variables directly in the constructor parameter list using an access modifier (public, private, protected, readonly).",
    "explanation": "Instead of declaring member variables at the class body, accepting constructor arguments, and assigning `this.x = x;`, prefixing constructor parameters with an access modifier automatically creates the property and assigns it.",
    "interviewAnswer": "Parameter properties declare and initialize class member variables directly in the constructor parameter list using an access modifier (public, private, protected, readonly). Instead of declaring member variables at the class body, accepting constructor arguments, and assigning `this.x = x;`, prefixing constructor parameters with an access modifier automatically creates the property and assigns it.",
    "importantPoints": [
      "Prefix parameter with public, private, protected, or readonly",
      "Automatically declares the field and assigns it in constructor body",
      "Eliminates repetitive `this.field = field;` assignments",
      "Clean, standard pattern for dependency injection (e.g. NestJS or Angular)"
    ],
    "commonMistakes": [
      "Forgetting the access modifier, turning the parameter into a standard local constructor variable"
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
      "typescript",
      "classes",
      "parameter-properties",
      "constructor",
      "clean-code"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// With Parameter Properties:\nclass UserService {\n  constructor(\n    private readonly db: Database,\n    public readonly config: AppConfig\n  ) {}\n  // db and config are automatically declared and assigned to this!\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "What are Abstract Classes and how do they differ from Interfaces?",
    "title": "What are Abstract Classes and how do they differ from Interfaces?",
    "answer": "Abstract classes can provide concrete method implementations and state alongside abstract method signatures, and exist at runtime; interfaces exist only at compile time and contain no implementation.",
    "explanation": "An `abstract class` cannot be instantiated directly; it serves as a base class. Unlike interfaces, abstract classes emit actual JavaScript constructor functions and prototypes. Subclasses inherit concrete logic via `extends` while being forced to implement any `abstract` methods.",
    "interviewAnswer": "Abstract classes can provide concrete method implementations and state alongside abstract method signatures, and exist at runtime; interfaces exist only at compile time and contain no implementation. An `abstract class` cannot be instantiated directly; it serves as a base class. Unlike interfaces, abstract classes emit actual JavaScript constructor functions and prototypes. Subclasses inherit concrete logic via `extends` while being forced to implement any `abstract` methods.",
    "importantPoints": [
      "Abstract classes can provide concrete implementation and state",
      "Interfaces contain zero runtime implementation and are erased at compile time",
      "Classes can implement multiple interfaces but only extend one abstract class",
      "Abstract classes exist at runtime and can be checked with `instanceof`"
    ],
    "commonMistakes": [
      "Using an abstract class when an interface would suffice without bloating bundle size with empty classes"
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
      "typescript",
      "classes",
      "abstract-class",
      "interfaces",
      "oop"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "abstract class BaseService {\n  abstract endpoint: string;\n  async fetch() {\n    return fetch(this.endpoint); // Concrete shared implementation!\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "What does the 'override' keyword do in TypeScript 4.3+?",
    "title": "What does the 'override' keyword do in TypeScript 4.3+?",
    "answer": "The 'override' keyword ensures that a subclass method actually overrides a method in its base class, catching errors if the base method is renamed or removed.",
    "explanation": "With 'noImplicitOverride: true', if a subclass redefines a base method without the `override` keyword, or uses `override` on a method that does not exist in the base class, the compiler flags an error. This prevents silent bugs during base class refactoring.",
    "interviewAnswer": "The 'override' keyword ensures that a subclass method actually overrides a method in its base class, catching errors if the base method is renamed or removed. With 'noImplicitOverride: true', if a subclass redefines a base method without the `override` keyword, or uses `override` on a method that does not exist in the base class, the compiler flags an error. This prevents silent bugs during base class refactoring.",
    "importantPoints": [
      "Enforces intentional method overriding in class inheritance",
      "Catches stale subclass methods when base class methods are renamed",
      "Enabled strictly with 'noImplicitOverride: true'",
      "Clear documentation for developers reading subclass code"
    ],
    "commonMistakes": [
      "Renaming a base class method without realizing subclasses stopped overriding it"
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
      "typescript",
      "classes",
      "override",
      "inheritance",
      "refactoring"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class Parent {\n  setup() {}\n}\nclass Child extends Parent {\n  override setup() {} // Confirms overriding\n  // override teardown() {} // Error: This member cannot have an 'override' modifier because it is not declared in the base class.\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "How do Static Blocks ('static {}') work in TypeScript classes?",
    "title": "How do Static Blocks ('static {}') work in TypeScript classes?",
    "answer": "Static initialization blocks allow writing multi-statement initialization logic for static class fields with access to class private state.",
    "explanation": "Static blocks (`static { ... }`) execute once when the class is loaded. They allow complex initialization logic (try/catch, loops, data fetching) for static fields and uniquely grant access to private instance fields (#private) from outside helper functions.",
    "interviewAnswer": "Static initialization blocks allow writing multi-statement initialization logic for static class fields with access to class private state. Static blocks (`static { ... }`) execute once when the class is loaded. They allow complex initialization logic (try/catch, loops, data fetching) for static fields and uniquely grant access to private instance fields (#private) from outside helper functions.",
    "importantPoints": [
      "Executes once when class declaration is evaluated",
      "Supports try/catch and multi-line initialization for static members",
      "Has access to private class state",
      "Standard ECMAScript feature supported natively in modern runtimes"
    ],
    "commonMistakes": [
      "Assuming static blocks execute on every instance creation (they run once per class evaluation)"
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
      "typescript",
      "classes",
      "static-blocks",
      "initialization"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class Database {\n  static connectionPool: Pool;\n  static {\n    try {\n      Database.connectionPool = createPool();\n    } catch (err) {\n      console.error('Failed to initialize pool', err);\n    }\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "What is the difference between public, protected, and private access modifiers?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "What is the difference between public, protected, and private access modifiers?: How does this work ",
    "answer": "Mastering What is the difference between public, protected, and private access modifiers? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding What is the difference between public, protected, and private access modifiers? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering What is the difference between public, protected, and private access modifiers? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding What is the difference between public, protected, and private access modifiers? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for What is the difference between public, protected, and private access modifiers?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "How does TypeScript check structural compatibility between two distinct class instances?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "How does TypeScript check structural compatibility between two distinct class instances?: How does t",
    "answer": "Mastering How does TypeScript check structural compatibility between two distinct class instances? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How does TypeScript check structural compatibility between two distinct class instances? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering How does TypeScript check structural compatibility between two distinct class instances? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How does TypeScript check structural compatibility between two distinct class instances? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for How does TypeScript check structural compatibility between two distinct class instances?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "Why can't two classes with identical private fields be assigned to each other?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "Why can't two classes with identical private fields be assigned to each other?: How does this work i",
    "answer": "Mastering Why can't two classes with identical private fields be assigned to each other? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding Why can't two classes with identical private fields be assigned to each other? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering Why can't two classes with identical private fields be assigned to each other? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding Why can't two classes with identical private fields be assigned to each other? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for Why can't two classes with identical private fields be assigned to each other?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "How to type Class Decorators and Method Decorators in TypeScript 5.0+ (ECMAScript stage 3 decorators)?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "How to type Class Decorators and Method Decorators in TypeScript 5.0+ (ECMAScript stage 3 decorators",
    "answer": "Mastering How to type Class Decorators and Method Decorators in TypeScript 5.0+ (ECMAScript stage 3 decorators)? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to type Class Decorators and Method Decorators in TypeScript 5.0+ (ECMAScript stage 3 decorators)? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering How to type Class Decorators and Method Decorators in TypeScript 5.0+ (ECMAScript stage 3 decorators)? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to type Class Decorators and Method Decorators in TypeScript 5.0+ (ECMAScript stage 3 decorators)? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for How to type Class Decorators and Method Decorators in TypeScript 5.0+ (ECMAScript stage 3 decorators)?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "What is the difference between experimentalDecorators and standard TypeScript 5.0 decorators?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "What is the difference between experimentalDecorators and standard TypeScript 5.0 decorators?: How d",
    "answer": "Mastering What is the difference between experimentalDecorators and standard TypeScript 5.0 decorators? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding What is the difference between experimentalDecorators and standard TypeScript 5.0 decorators? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering What is the difference between experimentalDecorators and standard TypeScript 5.0 decorators? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding What is the difference between experimentalDecorators and standard TypeScript 5.0 decorators? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for What is the difference between experimentalDecorators and standard TypeScript 5.0 decorators?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "How to implement the Singleton pattern cleanly using a private constructor?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "How to implement the Singleton pattern cleanly using a private constructor?: How does this work in T",
    "answer": "Mastering How to implement the Singleton pattern cleanly using a private constructor? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to implement the Singleton pattern cleanly using a private constructor? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering How to implement the Singleton pattern cleanly using a private constructor? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to implement the Singleton pattern cleanly using a private constructor? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for How to implement the Singleton pattern cleanly using a private constructor?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "How to use construct signatures `new (...args: any[]) => T` to instantiate classes dynamically?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "How to use construct signatures `new (...args: any[]) => T` to instantiate classes dynamically?: How",
    "answer": "Mastering How to use construct signatures `new (...args: any[]) => T` to instantiate classes dynamically? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to use construct signatures `new (...args: any[]) => T` to instantiate classes dynamically? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering How to use construct signatures `new (...args: any[]) => T` to instantiate classes dynamically? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to use construct signatures `new (...args: any[]) => T` to instantiate classes dynamically? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for How to use construct signatures `new (...args: any[]) => T` to instantiate classes dynamically?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "What is the difference between method declaration on class prototype vs arrow function property?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "What is the difference between method declaration on class prototype vs arrow function property?: Ho",
    "answer": "Mastering What is the difference between method declaration on class prototype vs arrow function property? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding What is the difference between method declaration on class prototype vs arrow function property? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering What is the difference between method declaration on class prototype vs arrow function property? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding What is the difference between method declaration on class prototype vs arrow function property? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for What is the difference between method declaration on class prototype vs arrow function property?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "How does 'strictPropertyInitialization' enforce initializing class properties in constructors?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "How does 'strictPropertyInitialization' enforce initializing class properties in constructors?: How ",
    "answer": "Mastering How does 'strictPropertyInitialization' enforce initializing class properties in constructors? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How does 'strictPropertyInitialization' enforce initializing class properties in constructors? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering How does 'strictPropertyInitialization' enforce initializing class properties in constructors? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How does 'strictPropertyInitialization' enforce initializing class properties in constructors? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for How does 'strictPropertyInitialization' enforce initializing class properties in constructors?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "How to use the definite assignment assertion `!` on class properties when initialized via lifecycle methods?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "How to use the definite assignment assertion `!` on class properties when initialized via lifecycle ",
    "answer": "Mastering How to use the definite assignment assertion `!` on class properties when initialized via lifecycle methods? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to use the definite assignment assertion `!` on class properties when initialized via lifecycle methods? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering How to use the definite assignment assertion `!` on class properties when initialized via lifecycle methods? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to use the definite assignment assertion `!` on class properties when initialized via lifecycle methods? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for How to use the definite assignment assertion `!` on class properties when initialized via lifecycle methods?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "How to implement multiple interface contracts in a single class?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "How to implement multiple interface contracts in a single class?: How does this work in TypeScript O",
    "answer": "Mastering How to implement multiple interface contracts in a single class? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to implement multiple interface contracts in a single class? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering How to implement multiple interface contracts in a single class? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to implement multiple interface contracts in a single class? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for How to implement multiple interface contracts in a single class?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "How to model mixins and class composition in TypeScript using constructor functions?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "How to model mixins and class composition in TypeScript using constructor functions?: How does this ",
    "answer": "Mastering How to model mixins and class composition in TypeScript using constructor functions? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to model mixins and class composition in TypeScript using constructor functions? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering How to model mixins and class composition in TypeScript using constructor functions? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to model mixins and class composition in TypeScript using constructor functions? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for How to model mixins and class composition in TypeScript using constructor functions?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "What is the `this` return type in class methods and how does it support fluent chaining?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "What is the `this` return type in class methods and how does it support fluent chaining?: How does t",
    "answer": "Mastering What is the `this` return type in class methods and how does it support fluent chaining? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding What is the `this` return type in class methods and how does it support fluent chaining? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering What is the `this` return type in class methods and how does it support fluent chaining? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding What is the `this` return type in class methods and how does it support fluent chaining? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for What is the `this` return type in class methods and how does it support fluent chaining?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "How does TypeScript enforce readonly properties in classes?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "How does TypeScript enforce readonly properties in classes?: How does this work in TypeScript OOP an",
    "answer": "Mastering How does TypeScript enforce readonly properties in classes? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How does TypeScript enforce readonly properties in classes? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering How does TypeScript enforce readonly properties in classes? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How does TypeScript enforce readonly properties in classes? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for How does TypeScript enforce readonly properties in classes?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "How to type dependency injection containers and injectable service classes in TypeScript?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "How to type dependency injection containers and injectable service classes in TypeScript?: How does ",
    "answer": "Mastering How to type dependency injection containers and injectable service classes in TypeScript? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to type dependency injection containers and injectable service classes in TypeScript? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering How to type dependency injection containers and injectable service classes in TypeScript? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to type dependency injection containers and injectable service classes in TypeScript? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for How to type dependency injection containers and injectable service classes in TypeScript?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "What happens when a subclass constructor forgets to call `super()`?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "What happens when a subclass constructor forgets to call `super()`?: How does this work in TypeScrip",
    "answer": "Mastering What happens when a subclass constructor forgets to call `super()`? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding What happens when a subclass constructor forgets to call `super()`? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering What happens when a subclass constructor forgets to call `super()`? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding What happens when a subclass constructor forgets to call `super()`? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for What happens when a subclass constructor forgets to call `super()`?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Troubleshooting",
    "tags": [
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "How to write generic repository classes that manage database entities?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "How to write generic repository classes that manage database entities?: How does this work in TypeSc",
    "answer": "Mastering How to write generic repository classes that manage database entities? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to write generic repository classes that manage database entities? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering How to write generic repository classes that manage database entities? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to write generic repository classes that manage database entities? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for How to write generic repository classes that manage database entities?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "Why is favor composition over inheritance applicable to TypeScript class architecture?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "Why is favor composition over inheritance applicable to TypeScript class architecture?: How does thi",
    "answer": "Mastering Why is favor composition over inheritance applicable to TypeScript class architecture? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding Why is favor composition over inheritance applicable to TypeScript class architecture? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering Why is favor composition over inheritance applicable to TypeScript class architecture? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding Why is favor composition over inheritance applicable to TypeScript class architecture? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for Why is favor composition over inheritance applicable to TypeScript class architecture?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "How to type getters and setters with differing get/set types in TypeScript 4.3+?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "How to type getters and setters with differing get/set types in TypeScript 4.3+?: How does this work",
    "answer": "Mastering How to type getters and setters with differing get/set types in TypeScript 4.3+? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to type getters and setters with differing get/set types in TypeScript 4.3+? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering How to type getters and setters with differing get/set types in TypeScript 4.3+? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to type getters and setters with differing get/set types in TypeScript 4.3+? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for How to type getters and setters with differing get/set types in TypeScript 4.3+?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "classes",
    "question": "How to use abstract properties to force derived classes to provide configuration values?: How does this work in TypeScript OOP and what are the best practices?",
    "title": "How to use abstract properties to force derived classes to provide configuration values?: How does t",
    "answer": "Mastering How to use abstract properties to force derived classes to provide configuration values? is key to designing clean object-oriented architectures and class hierarchies in TypeScript.",
    "explanation": "TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to use abstract properties to force derived classes to provide configuration values? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "interviewAnswer": "Mastering How to use abstract properties to force derived classes to provide configuration values? is key to designing clean object-oriented architectures and class hierarchies in TypeScript. TypeScript enriches ECMAScript classes with compile-time access modifiers, parameter properties, abstract members, and structural checking. Understanding How to use abstract properties to force derived classes to provide configuration values? ensures that domain models, service classes, and dependency-injected frameworks remain type-safe and performant.",
    "importantPoints": [
      "Enforces OOP encapsulation and contracts for How to use abstract properties to force derived classes to provide configuration values?",
      "Differentiates compile-time modifiers from runtime JavaScript mechanics",
      "Streamlines class instantiation and constructor dependency injection",
      "Maintains clean structural compatibility across instances"
    ],
    "commonMistakes": [
      "Confusing TypeScript's private modifier with hard ECMAScript #private fields",
      "Overusing deep inheritance trees instead of composition"
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
      "typescript",
      "classes",
      "oop",
      "inheritance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "class BaseEntity {\n  constructor(public readonly id: string) {}\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
