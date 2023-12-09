import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
    tasks: []
}

const initialState: InitialState = {
    tasks: []
}

const tasksSlice = createSlice({
    initialState,
    name: 'tasks',
    reducers: {
        addTask: (state, action) => {
            const newTask= action.payload
            state.tasks.push(newTask)
        },
        deleteTask: (state, action) => {
            const idToDelete = action.payload
            const newTask = state.tasks.filter((task) => task.id !== idToDelete)
            state.tasks = newTask
        },
        setTasks: (state, action) => {
            state.tasks = action.payload;
        }
    }
})

export const { addTask, deleteTask, setTasks } = tasksSlice.actions

export default tasksSlice.reducer
