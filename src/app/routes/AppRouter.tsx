import { ProtectedRoute } from "@/app/routes/ProtectedRoute";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { RegistrationPage } from "@/pages/registration";
import { useAuth } from "@/shared/lib/auth/useAuth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routesForPublic = [
    {
        path: "/about",
        element: <div>About</div>,
    },
];

const routesForAuthenticatedOnly = [
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
];

const routesForNotAuthenticatedOnly = [
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/registration",
        element: <RegistrationPage />,
    },
];

export const AppRouter = () => {
    const { token } = useAuth();

    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    return <RouterProvider router={router} />;
};