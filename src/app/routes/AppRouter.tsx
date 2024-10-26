import { Layout } from "@/app/layout/Layout";
import { Logout } from "@/app/routes/logoutRoute";
import { ProtectedRoute } from "@/app/routes/protectedRoute";
import { AdminPage } from "@/pages/admin";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { RegistrationPage } from "@/pages/registration";
import { StudentPage } from "@/pages/student/ui/StudentPage";
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
                element: <ProtectedRoute allowRoles={["*"]} />,
                children: [
                    {
                        path: "/",
                        element: <HomePage />,
                    },
                ],
            },
            {
                path: "/",
                element: <ProtectedRoute allowRoles={["ROLE_ADMIN"]} />,
                children: [
                    {
                        path: "admin",
                        element: <AdminPage />,
                    },
                ],
            },
            {
                path: "/",
                element: <ProtectedRoute allowRoles={["ROLE_TEACHER"]} />,
                children: [
                    {
                        path: "teacher",
                        element: <TeacherPage />,
                    },
                ],
            },
            {
                path: "/",
                element: <ProtectedRoute allowRoles={["ROLE_STUDENT"]} />,
                children: [
                    {
                        path: "student",
                        element: <StudentPage />,
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
        path: "logout",
        element: <Logout />,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
