import React from 'react';
import { TCourseGoal } from '../AppGoals';

//type TCourseGoalsProps = React.PropsWithChildren & {
type TCourseGoalsProps = {
    goal: TCourseGoal,
    deleteFc:(id: number) => void,
    //children: React.ReactNode
}

const CourseGoals: React.FC<TCourseGoalsProps> = ({goal, deleteFc}) => {
    return (
        <article>
            <div>
                <h2>{goal.title}</h2>
                <p>{goal.description}</p>
            </div>
            <button onClick={() => deleteFc(goal.id!)}>delete</button>   
            {/* {children}          */}
        </article>
    );
};

export default CourseGoals;