import React, {useState} from 'react';
import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';
import CourseGoalForm from './components/CourseGoalForm';
//import goals from '../../assets/goals.jpeg'

export type TCourseGoal = {
    description: string,
    title: string,
    id?: number
}

const AppGoals = () => {
    const [goals, setGoals] = useState<TCourseGoal[]>([])
    const imageUrl = `/assets/goals.jpeg`

    const handleAddGoal = (goal: TCourseGoal) => {     
        const newGoal = {
            ...goal,
            id: Math.random()
        }

        setGoals([...goals, newGoal])  
    }   

    const handleDelete = (id: number) => {
        setGoals(goals.filter(currentGoal => currentGoal.id !== id))
    }

     return ( 
            <main>
                <Header image={{src: imageUrl, alt: 'some img desc'}}>
                    <h1>Your course goals</h1>    
                </Header>

                <CourseGoalForm handleAddGoal={handleAddGoal} />

                <CourseGoalList goals={goals} handleDelete={handleDelete}/>
            </main>
    );
};

export default AppGoals;