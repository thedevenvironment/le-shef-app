export interface Timer {
  id: string
  name: string
  paused: boolean
  remaining: number
  totalTime: number
}

export interface TimerWithSize extends Timer {
  size: number
}
