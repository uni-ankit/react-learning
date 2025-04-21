import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react";
import Todo from './todo'

export default function AddTodo() {

    const [input, setInput] = useState();

    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <>
            <div>Add Todo</div>
            <form onSubmit={addTodoHandler}>
                <input type="text" name="text" id="text" value={input} onChange={(e) => setInput(e.target.value)} />
            </form>

            <br />

            <Todo />
        </>
    );

}