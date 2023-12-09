import { useEffect } from 'react';
import { useAppSelector } from '../hooks/taskStore';
import TaskCard from './TaskCard';
import { setTasks } from '../store/slice/task.slice';
import { useDispatch } from 'react-redux';

const TaskList: React.FC = () => {
    const { tasks } = useAppSelector((store) => store.tasks)
    const dispatch = useDispatch()

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            const parsedTasks = JSON.parse(storedTasks);
            dispatch(setTasks(parsedTasks));
        }
    }, [dispatch]);


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    return (
        <ul>
            {
                tasks.map((task) => <TaskCard key={task.id} task={task} />)
            }
        </ul >
    )
}

export default TaskList