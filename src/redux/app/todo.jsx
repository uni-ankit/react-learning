import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todo() {

    const todo = useSelector(state => state.todos)
    const dispatch = useDispatch();


    return (
        <>
            <h1>Todo List</h1>

            {
                todo?.length && todo?.map((el, index) =>
                (
                    <li key={index}>
                        {el.text}
                        <button onClick={()=>dispatch(removeTodo(el.id))}>X</button>
                    </li>
                )
                )
            }

        </>
    );
}