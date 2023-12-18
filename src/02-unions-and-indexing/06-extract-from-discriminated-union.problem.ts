import { Equal, Expect } from '../helpers/type-utils'

export type Event =
  | {
      type: "click";
      event: MouseEvent;
      what: "Table"
    }
  | {
      type: "focus";
      event: FocusEvent;
      what: "Table"
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
      how: "Fast"
    }

type ClickEvent = Extract<Event, { what: 'Table' }>

type Fruit = 'Apple' | 'Orange' | 'Banana'
type BananaAndOrange = Extract<Fruit, 'Banana' | 'Orange'>

type tests = [
  Expect<
    Equal<
      ClickEvent,
      { type: 'click'; event: MouseEvent; what: 'Table' } | { type: 'focus'; event: FocusEvent; what: 'Table' }
    >
  >
]
