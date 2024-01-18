import React from 'react';
import { TCourseGoal } from '../AppGoals';
import CourseGoals from './CourseGoals';
import InfoBox from './InfoBox';

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

    let warningBox: React.ReactNode;

    if (!goals.length) {
        warningBox = (
            <InfoBox mode='hint'>
                You have not goals yet. Start now!
            </InfoBox> 
            )
    }
    
    if (goals.length > 3) {       
        warningBox =  (
            <InfoBox mode='warning' severity='high'>
                You have a lot of goals. Don`t put too much in your plate!
            </InfoBox>
        )        
     }

    return (
        <>
            {warningBox}
            <ul>
                {renderesGoals}
            </ul>        
        </>
    );
};

export default CourseGoalList;