import React, {useState} from 'react';
import { FaPlus } from "react-icons/fa";
import {v4 as uuid} from 'uuid'
import { Task } from '../interfaces/Task';

interface Props {
    handleAddTask: (task: Task) => void;
}

interface TaskForm {
    title: string,
    description: string
}

type FormEventHandler = React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>;
type HandleInputChange = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

const itialValues = {title: '', description: ''}

const TaskForm = ({handleAddTask}: Props) => {
    const [task, setTask] = useState<TaskForm>(itialValues);

    const handleInputChange = ({target: {name, value}}: HandleInputChange) => {
        setTask({
            ...task,
            [name]: value
        })
    }

    const addTask = (e: FormEventHandler) => {
        e.preventDefault()
        const newTask: Task = {
            ...task,
            id: uuid(),
            complete: false
        }
        handleAddTask(newTask)
        setTask(itialValues)
    }

    return (
        <div className='card card-body text-dark'>
            <h2>Add task</h2>

            <form onSubmit={addTask}>
                <input 
                placeholder='title'
                name='title'
                type='text'
                className='form-control mb-3'
                onChange={handleInputChange}
                value={task.title}/>

                <textarea 
                 rows={2}
                 placeholder='description'
                 className='form-control mb-3'
                 name='description'
                 onChange={handleInputChange}
                 value={task.description}>
                 </textarea>

                 <button onClick={addTask} className='btn btn-secondary'>
                    save
                    <FaPlus/>
                 </button>
            </form>
        </div>
    );
};

export default TaskForm;