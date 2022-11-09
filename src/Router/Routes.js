import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Registration from "../Pages/Registration/Registration";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/services",
                element: <Services></Services>,
            },
            {
                path: "/services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound></NotFound>,
    },
]);

export default routes;
