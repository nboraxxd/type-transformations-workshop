import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type ProgramModeEnumMap = typeof programModeEnumMap

export type IndividualProgram = ProgramModeEnumMap[
  | "ONE_ON_ONE"
  | "SELF_DIRECTED"
  | "PLANNED_ONE_ON_ONE"
  | "PLANNED_SELF_DIRECTED"]

export type IndividualProgram2 = typeof programModeEnumMap[Exclude<keyof typeof programModeEnumMap, "GROUP" | "ANNOUNCEMENT">]

// Tự làm
export type IndividualProgram3 =
  | ProgramModeEnumMap["ONE_ON_ONE"]
  | ProgramModeEnumMap["SELF_DIRECTED"]
  | ProgramModeEnumMap["PLANNED_ONE_ON_ONE"]
  | ProgramModeEnumMap["PLANNED_SELF_DIRECTED"]

// Tự làm
export type IndividualProgram4 = Exclude<typeof programModeEnumMap[keyof typeof programModeEnumMap], "group" | "announcement">;

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >,
];
