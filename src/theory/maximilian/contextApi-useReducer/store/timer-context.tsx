import {useState, createContext, useReducer } from "react";
import { Action, TContextProviderProps, Timer, TimersContextValue, TimersState } from "../interfaces/interfaces";

//useReducer
const initialState: TimersState = {
    isRunning: false,
    timers: []
}

const timerReducer = (state: TimersState, action: Action): TimersState => {
    switch (action.type) {
        case 'START_TIMERS':
            return {
                ...state,
                isRunning: true
            }
        case 'STOP_TIMERS':
            return {
                ...state,
                isRunning: false
            }
        case 'ADD_TIMER':
            
            return {
                ...state,
                timers: [
                    ...state.timers,
                    action.payload
                ]
            }    
        default:
           return state
    }
}

//context
const TimersContext = createContext<TimersContextValue | null>(null);

const TimersContextProvider = ({children}: TContextProviderProps) => {
    const [timerState, dispatch] = useReducer(timerReducer, initialState)

    const addTimer = (timer: Timer) => {
        dispatch({type: 'ADD_TIMER', payload: timer})        
    }
    const startTimers = () => {
        dispatch({type: 'START_TIMERS'})
    }
    const stopTimers = () => {
        dispatch({type: 'STOP_TIMERS'})
    }

    const stateToShare: TimersContextValue = {
        addTimer,
        startTimers,
        stopTimers,
        isRunning: timerState.isRunning,
        timers: timerState.timers
    }

    return (
        <TimersContext.Provider value={stateToShare}>
            {children}
        </TimersContext.Provider>
    )
}
export default TimersContext
export {TimersContextProvider};