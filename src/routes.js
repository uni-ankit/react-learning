// import { createBrowserRouter } from "react-router";
// import List from "./component/list"
// import Task from "./component/task";

// let router = createBrowserRouter([
//   {
//     path: "/",
//     Component: List,
//   },
//   {
//     path: "/:id",
//     Component: Task,
//   },
// ]);

// export default router;


import {
    route,
} from "@react-router/dev/routes";

export default [
    route("/", "./component/list"),
    route("/accordion", "./component/accordion"),
];