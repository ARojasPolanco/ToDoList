import { FormEvent } from 'react'
import { v4 as UUID } from 'uuid';
import { addTask } from '../store/slice/task.slice';
import { useDispatch } from 'react-redux';

const TaskForm = () => {

    const dispatch = useDispatch()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const newTask = {
            id: UUID(),
            description: form.input.value
        }

        dispatch(addTask(newTask))

        form.reset()
    }

    return (
        <section>
            <form onSubmit={handleSubmit} className='text-black flex flex-col sm:flex-row gap-2'>
                <input
                    type="text"
                    id='input'
                    required
                    autoComplete='off'
                    placeholder='Agregar una tarea'
                    className='text-white px-2 p-2 border border-emerald-700 rounded-md bg-transparent outline-none' />
                <button className='text-white bg-blue-800 px-1 p-1 rounded-xl'>Añadir tarea</button>
            </form>
        </section>
    )
}

export default TaskForm