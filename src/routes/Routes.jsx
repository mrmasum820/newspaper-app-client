import {
    Navigate,
    createBrowserRouter
} from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            },
            {
                path: 'about',
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: 'career',
                element: <PrivateRoute><Career></Career></PrivateRoute>
            }
        ]
    },
    {
        path: "category",
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://green-dugong-cap.cyclic.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://green-dugong-cap.cyclic.app/news/${params.id}`)
            }
        ]
    }
]);

export default router;