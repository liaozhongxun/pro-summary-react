import About from "@/view/about";
import Entire from "@/view/entire";
import Home from "@/view/home";
import { Navigate } from "react-router-dom";


const routes = [
    {
        path:'/',
        element:<Navigate to='/home'></Navigate>
    },
    {
        path:'/home',
        element: <Home></Home>
    },
    {
        path:'/entire',
        element: <Entire></Entire>
    },
    {
        path:'/about',
        element: <About></About>
    }
]

export default routes;