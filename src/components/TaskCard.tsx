import { FC } from 'react'
import { deleteTask } from '../store/slice/task.slice'
import { useDispatch } from 'react-redux'

interface TaskCardProps {
    task: {
        id: number,
        description: string
    }
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
    const dispatch = useDispatch()

    return (
        <section className='flex justify-center items-center'>
            <li className='bg-slate-400/30 mt-6 p-2 flex rounded-lg gap-4'>
                <p className='text-lg font-semibold'>
                    {task.description}
                </p>
                <button className='text-lg text-red-400 flex items-center justify-center' onClick={() => dispatch(deleteTask(task.id))}>
                    <i className='bx bxs-trash'></i>
                </button>
            </li>
        </section>
    )
}

export default TaskCard