import { Layout } from "@/app/layout/Layout";
import { Logout } from "@/app/routes/logoutRoute";
import { NotAuthRoute } from "@/app/routes/notAuthRoute/NotAuthRoute";
import { ProtectedRoute } from "@/app/routes/protectedRoute";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { RegistrationPage } from "@/pages/registration";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "/",
                        element: <HomePage />,
                    },
                ],
            },
            {
                path: "/",
                element: <NotAuthRoute />,
                children: [
                    {
                        path: "login",
                        element: <LoginPage />,
                    },
                    {
                        path: "registration",
                        element: <RegistrationPage />,
                    },
                ],
            },
            {
                path: "about",
                element: <div>About</div>,
            },
            {
                path: "*",
                element: <Navigate to='/' replace />,
            },
        ],
    },
    {
        path: "logout",
        element: <Logout />,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
