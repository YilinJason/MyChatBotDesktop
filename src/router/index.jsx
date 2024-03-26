import { createBrowserRouter, Navigate  } from "react-router-dom";
import { Login } from "../view/login/login";
import { Signup } from "../view/signup/signup";
import { MainApp } from "../view/mainApp/mainApp";
import { Setting } from "../view/setting/setting";
// import { MainPage } from "../view/mainApp";

const router =[
    {
        path:'/',
        element: <Navigate to='/login'/>
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/mainapp',
        element: <MainApp />
    },
    {
        path: '/setting',
        element: <Setting />
    },
//     {
//         path: '/mainpage',
//         element: <MainPage />
//     }
]


export default router