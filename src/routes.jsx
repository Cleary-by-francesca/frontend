import Home from "./pages/MainLayout/Home.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Chat from "./pages/MainLayout/Chat.jsx";
import Employees from "./pages/MainLayout/Employees.jsx";

/** @type {import("react-router").RouteObject[]} */
const routes = [
    {
        path: "/",
        element:  <MainLayout/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/chat", element: <Chat/>},
            {path: "/employees", element: <Employees/>},
        ]
    },
];

export default routes;
