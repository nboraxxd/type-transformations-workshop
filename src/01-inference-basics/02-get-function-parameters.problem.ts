import { Equal, Expect } from "../helpers/type-utils";

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  },
) => {};

// Tương tự như ReturnType, Parameters sẽ lấy ra type của các argument của function
// Nếu function có nhiều argument thì sẽ trả về tuple các argument
type MakeQueryParameters = Parameters<typeof makeQuery>;
type MakeQueryParametersSecondArgument = MakeQueryParameters[1]

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        },
      ]
    >
  >,
];
