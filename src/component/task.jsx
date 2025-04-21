import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useCustomFetch from "../hooks/custom-fetch";


const Task = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState();
    const data = useCustomFetch('https://jsonplaceholder.typicode.com/posts/' + id);

    useEffect(() => {
        setBlog(data);
    }, [data]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then((res) => res.json())
            .then((data) => setBlog(data));
    }, [id])


    return (
        <>
            <h1>
                Task List {blog?.title}
            </h1>
        </>
    );
};

export default Task;
