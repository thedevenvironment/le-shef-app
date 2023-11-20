import type { Timer } from 'src/types/timer'
import { createStore } from 'src/utils/createStore'

interface State {
  timers: Timer[]
  addTimer: (timer: Timer) => void
  clearTimers: () => void
  decrementTimers: () => void
  deleteTimer: (id: string) => void
  togglePauseTimer: (id: string, timer: Timer) => void
}

/**
 * Use Timers
 * -
 */
export const useTimers = createStore('store', set => ({
  timers: [] as Timer[],

  // Add Timer
  addTimer: (timer: Timer) => {
    set((state: State) => ({ timers: [...state.timers, timer] }))
  },

  // Clear Timers
  clearTimers: () => {
    set(() => ({ timers: [] }))
  },

  // Decrement Timers
  decrementTimers: () => {
    set((state: State) => ({
      timers: state.timers.map((timer: Timer) => {
        return !timer.paused && timer.remaining > 0 ? { ...timer, remaining: timer.remaining - 1000 } : timer
      })
    }))
  },

  // Delete Timer
  deleteTimer: (id: string) => {
    set((state: State) => {
      state.timers.splice(state.timers.findIndex((timer: Timer) => timer.id === id), 1)
      return { timers: [...state.timers] }
    })
  },

  // Toggle Pause Timer
  togglePauseTimer: (id: string) => {
    set((state: State) => ({ timers: [...state.timers.map((timer: Timer) => (timer.id === id ? { ...timer, paused: !timer.paused } : timer))] }))
  }
}))
