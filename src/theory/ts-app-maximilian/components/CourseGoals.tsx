import React from 'react';

//type TCourseGoalsProps = React.PropsWithChildren & {
type TCourseGoalsProps = {
    title: string,
    description: string,
    deleteFc:() => void,
    //children: React.ReactNode
}

const CourseGoals: React.FC<TCourseGoalsProps> = ({title, description, deleteFc}) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button onClick={deleteFc}>delete</button>   
            {/* {children}          */}
        </article>
    );
};

export default CourseGoals;