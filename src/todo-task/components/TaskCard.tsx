import React from 'react';
import { Task } from '../interfaces/Task';

interface Props {
    task: Task;
    handleDeleteTask: (task: Task) => void;
}

const TaskCard = ({task, handleDeleteTask}: Props) => {
    return (
        <div className='card card-body text-dark'>
            <h2>{task.title}</h2>
            <p>{task.id}</p>
            <p>{task.description}</p>
            <button onClick={() => handleDeleteTask(task)} className='btn btn-danger'>Delete</button>
        </div>
    );
};

export default TaskCard;