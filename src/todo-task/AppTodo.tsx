import React, {useState} from 'react';
import { Props } from './interfaces/Props';
import { Task } from './interfaces/Task';
import TaskList from './components/TaskList';
import Header from './components/Header';
import TaskForm from './components/TaskForm';

const AppTodo = ({title}: Props) => {
    const [tasks, setTask] = useState<Task[]>([
        {
            id: 1,    
            title: 'learn react',
            description: 'react course',
            complete: false
        }
    ]);

    const handleAddTask = (task: Task) => {
        setTask([...tasks, task])
    }

    const handleDeleteTask = (task: Task) => {
        const newState = tasks.filter(currentTask => currentTask.id !== task.id)
        setTask([...newState])
    }

    return (
        <div className='bg-dark text-white' style={{height: '100vh'}}>
            
            <Header title={title}/>

            <main className="container p-4">
                <div className='row'>
                    <div className='col-md-4'>
                        <TaskForm handleAddTask={handleAddTask}/>
                    </div>

                    <div className='col-md-8'>
                        <div className='row'>
                            <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask}/>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default AppTodo;