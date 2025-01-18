export interface User {
  avatarUrl: string;
  contributionsCollection: {
    contributionCalendar: {
      totalContributions: number;
    };
    restrictedContributionsCount: number;
    totalCommitContributions: number;
  };
  createdAt: Date;
  location: string;
  login: string;
  name: string;
}

export interface UserDetail {
  avatarUrl: string;
  bio: string;
  contributionsCollection: {
    contributionCalendar: {
      totalContributions: number;
    };
    restrictedContributionsCount: number;
    totalCommitContributions: number;
  };
  email: string;
  location: string;
  login: string;
  most_starred_repo: {
    forkCount: number;
    name: string;
    stargazerCount: number;
  };
  most_used_languages: ProgrammingLanguage[];
  name: string;
  twitterUsername: string;
  websiteUrl: string;
}

export enum ProgrammingLanguage {
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  Python = "Python",
  Java = "Java",
  CSharp = "C#",
  CPlusPlus = "C++",
  C = "C",
  Ruby = "Ruby",
  PHP = "PHP",
  Swift = "Swift",
  Kotlin = "Kotlin",
  Go = "Go",
  Rust = "Rust",
  Scala = "Scala",
  R = "R",
  Dart = "Dart",
  Shell = "Shell",
  HTML = "HTML",
  CSS = "CSS",
  SQL = "SQL",
  Assembly = "Assembly",
  Perl = "Perl",
  Lua = "Lua",
  MATLAB = "MATLAB",
  ObjectiveC = "Objective-C",
  Groovy = "Groovy",
  VisualBasic = "Visual Basic",
  Haskell = "Haskell",
  Julia = "Julia",
  Elixir = "Elixir",
  Clojure = "Clojure",
  OCaml = "OCaml",
  COBOL = "COBOL",
  Fortran = "Fortran",
}
