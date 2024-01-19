import TimersContext from '../store/timer-context'
import { useContext } from 'react'

export default function useTimerContext() {
    return useContext(TimersContext)
}