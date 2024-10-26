import { Layout } from "@/app/layout/Layout";
import { Logout } from "@/app/routes/logoutRoute";
import { ProtectedRoute } from "@/app/routes/protectedRoute";
import { AdminPage } from "@/pages/admin";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { RegistrationPage } from "@/pages/registration";
import { TeacherPage } from "@/pages/teacher";
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
                element: (
                    <ProtectedRoute
                        allowRoles={[
                            "ROLE_STUDENT",
                            "ROLE_TEACHER",
                            "ROLE_ADMIN",
                        ]}
                    />
                ),
                children: [
                    {
                        path: "/",
                        element: <HomePage />,
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
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "registration",
        element: <RegistrationPage />,
    },
    {
        path: "admin",
        element: <AdminPage />,
    },
    {
        path: "teacher",
        element: <TeacherPage />,
    },
    {
        path: "logout",
        element: <Logout />,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
