import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: 'Hello'
    }]
};


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload
            });
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((el) => el.id !== action.payload);
        }
    }
})


export const {addTodo , removeTodo} = todoSlice.actions;

export default todoSlice.reducer;