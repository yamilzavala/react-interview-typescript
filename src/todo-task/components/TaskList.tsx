import React from 'react';
import { Task } from '../interfaces/Task';
import TaskCard from './TaskCard';

interface Props {
    tasks: Task[],
    handleDeleteTask: (task: Task) => void;
}

const TaskList = ({tasks, handleDeleteTask}: Props) => {

    const renderedTasks = tasks.map((task: Task, idx: number) => (
        <div  key={idx} className="col-md-4 p-2">
            <TaskCard task={task} handleDeleteTask={handleDeleteTask}/>
        </div>
    ))

    return (
        <div>
            {renderedTasks}
        </div>
    );
};

export default TaskList;