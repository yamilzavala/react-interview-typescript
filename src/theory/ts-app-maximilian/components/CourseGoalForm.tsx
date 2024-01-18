import React, { useRef } from 'react';
import { TCourseGoal } from '../AppGoals';

type TCourseGoalFormProps = {    
    handleAddGoal: (goal: TCourseGoal) => void
}

const CourseGoalForm = ({handleAddGoal}: TCourseGoalFormProps) => {
    const goalRef = useRef<HTMLInputElement>(null)
    const summaryRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const enteredGoal = goalRef.current!.value;
        const enteredSummary = summaryRef.current!.value;

        const goal = {
            title: enteredGoal,
            description: enteredSummary
        }

        e.currentTarget.reset();
        handleAddGoal(goal)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="goal">Your goal</label>
                <input id='goal' type='text' ref={goalRef}/>

                <label htmlFor="summary">Your goal</label>
                <input id='summary' type='text' ref={summaryRef}/>
                <button>Add goal</button>
            </form>
        </>
    );
};

export default CourseGoalForm;