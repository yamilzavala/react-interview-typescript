export type Timer = {
    name: string,
    duration: number
}

export type TimersState = {
    isRunning: boolean,
    timers: Timer[]
}

export type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimers: () => void,
    stopTimers: () => void
}

export type TContextProviderProps = {
    children: React.ReactNode
}

export type AddTimerAction = {
    type: 'ADD_TIMER',
    payload: Timer
}
export type StopTimerAction = {
    type: 'STOP_TIMERS'
}
export type StartTimerAction = {
    type: 'START_TIMERS'
}

export type Action = AddTimerAction | StopTimerAction | StartTimerAction;
