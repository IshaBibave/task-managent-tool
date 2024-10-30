import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => { /* Add new task logic */ },
    updateTask: (state, action) => { /* Update task logic */ },
    deleteTask: (state, action) => { /* Delete task logic */ },
  },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
