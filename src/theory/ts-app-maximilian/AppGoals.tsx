import React, {useState} from 'react';
import CourseGoals from './components/CourseGoals';
import Header from './components/Header';
//import goals from '../../assets/goals.jpeg'

type TCourseGoal = {
    description: string,
    title: string,
    id: number
}

const AppGoals = () => {
    const [goals, setGoals] = useState<TCourseGoal[]>([])
    const [goalDescription, setGoalDescription] = useState<string>()
    const [goalTitle, setGoalTitle] = useState<string>()
    const imageUrl = `/assets/goals.jpeg`

    const handleAddGoal = () => {
        if (goalDescription && goalTitle) {
            setGoals([
                ...goals, 
                {
                    id: Math.random(),
                    title: goalTitle,
                    description: goalDescription
                }
            ])
            }            
        }

    const handleDelete = () => {
        console.log('delete fc')
    }

    return (
        <>
            <Header image={{src: imageUrl, alt: 'some img desc'}}>
                <h1>Your course goals</h1>    
            </Header>

            <input placeholder='description' value={goalDescription} onChange={(e) => setGoalDescription(e.target.value)}/>
            <input placeholder='title' value={goalTitle} onChange={(e) => setGoalTitle(e.target.value)}/>
            <button onClick={handleAddGoal}>Add goal</button>

            {goals.map((goal,idx) => (
                <p key={idx}>{goal.title} - {goal.description} - {goal.id}</p>
            ))}

            <CourseGoals title='some title' description='some desc' deleteFc={handleDelete} />
        </>
    );
};

export default AppGoals;