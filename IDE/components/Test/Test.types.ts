export type TriggerFn = string

export type CheckerFn = string

export type TriggerArgs = string[]

export type CheckerArgs = string[]

export type State = {
  name: string
  id: string
  valuePath: string
}

export interface Test {
  trigger: TriggerFn
  triggerArgs: TriggerArgs
  checker: CheckerFn
  checkerArgs: CheckerArgs
  state: State[]
}

export type Tests = Test[]
