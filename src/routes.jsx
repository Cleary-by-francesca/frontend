import Home from "./pages/MainLayout/Home.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Chat from "./pages/MainLayout/Chat.jsx";
import Employees from "./pages/MainLayout/Employees.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";


/** @type {import("react-router").RouteObject[]} */
const routes = [
    {
        path: "/",
        element: <LandingPage/>
    },
    {
        path:    "/login",
        element: <Login/>
    },
    {
        path:    "/register",
        element: <Register/>
    },
    {
        path:     "/app",
        index:    "/app",
        element:  <MainLayout/>,
        children: [
            {path: "", element: <Home/>},
            {path: "employees", element: <Employees/>},
        ]
    }
];

export default routes;
