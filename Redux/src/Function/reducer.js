import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addT: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      };
      state.todos.push(todo);
    },
    removeT: (state, action) => {
      state.todos = state.todos.filter((prev) => prev.id !== action.payload);
    }
   
  }
});

export const { addT, removeT, updateT } = todoSlice.actions;

export default todoSlice.reducer;
