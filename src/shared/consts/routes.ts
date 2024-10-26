import { Role } from "@/app/stores/authStore";

type Route = {
    label: string;
    to: string;
}

type RoutePermissions = Role | "PRIVATE";


export const ROUTES: Record<RoutePermissions, Route[]> = {
    "PRIVATE": [
        {
            label: "Кабинет",
            to: "/",
        },
    ],
    "ROLE_GUEST": [
        {
            label: "О нас",
            to: "/about",
        },
    ],
    "ROLE_ADMIN": [
        {
            label: "Админка",
            to: "/admin",
        }
    ],
    "ROLE_TEACHER": [
        {
            label: "Дашборд учителя",
            to: "/teacher",
        }
    ],
    "ROLE_STUDENT": [
        {
            label: "Дашборд студента",
            to: "/student",
        }
    ],
};