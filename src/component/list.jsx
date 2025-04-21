import useCustomFetch from "../hooks/custom-fetch";
import { Link } from "react-router";
import { Outlet } from "react-router";

const List = () => {
    const lists = useCustomFetch("https://jsonplaceholder.typicode.com/posts");

    return (
        <>
            <h1>
                Task List
            </h1>
            <div className="blog-container">
                {lists?.length ? (
                    lists.map((el, index) => {
                        return (
                            <div className="blog" key={index}>
                                <Link to={`${el.id}`}>
                                    {el.id} : {el.title}
                                </Link>
                            </div>
                        );
                    })
                ) : (
                    <h1>Loading</h1>
                )}
            </div>
            <Outlet/>
        </>
    );
};

export default List;
