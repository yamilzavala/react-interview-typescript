import React from 'react';
import { TCourseGoal } from '../AppGoals';
import CourseGoals from './CourseGoals';

type TGoalsPropsList = {
    goals: TCourseGoal[],
    handleDelete:(id: number) => void
}

const CourseGoalList = ({goals, handleDelete}: TGoalsPropsList) => {

    const renderesGoals = goals.map((goal,idx) => (
        <li key={idx}>
            <CourseGoals goal={goal} deleteFc={handleDelete}/>
        </li>
    ))

    return (
        <ul>
            {renderesGoals}
        </ul>
    );
};

export default CourseGoalList;