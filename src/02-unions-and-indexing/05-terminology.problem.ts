/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

// This is discriminated union
type A =
  | {
      type: "a";
      whatever: string;
    }
  | {
      type: "b";
      something: string;
    }
  | {
      type: "c";
      whoCares: string;
    };

function getUnion(result: A) {
  if (result.type === "c") {
    result.whoCares
  }
}

// This is union
type B = "a" | "b" | "c";

// This is enum
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
