import { LoginPage } from "@/pages/login";
import { RegistrationPage } from "@/pages/registration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/registration",
        element: <RegistrationPage />,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
