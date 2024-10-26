import { FC } from "react";
import { ROUTES } from "@/shared/consts";
import { NavLink } from "react-router-dom";
import { Container } from "@/shared/ui/container";
import { useAuthStore } from "@/app/stores/authStore";
import { useShallow } from "zustand/shallow";
import "./header.css";

export const Header: FC = () => {
    const [isAuth, userRole] = useAuthStore(
        useShallow((state) => [state.isAuth, state.userRole])
    );

    const routes = [
        ...(isAuth ? ROUTES.PRIVATE : ROUTES.ROLE_GUEST),
        ...(isAuth ? ROUTES[userRole] : []),
    ];

    return (
        <header className='header'>
            <Container>
                <div className='header__container'>
                    <nav className='nav'>
                        {routes.map((route) => (
                            <li className='nav__item' key={route.label}>
                                <NavLink to={route.to}>{route.label}</NavLink>
                            </li>
                        ))}
                        {isAuth ? (
                            <li className='nav__item'>
                                <NavLink to='/logout'>Выход</NavLink>
                            </li>
                        ) : (
                            <>
                                <li className='nav__item'>
                                    <NavLink to='/login'>Вход</NavLink>
                                </li>
                                <li className='nav__item'>
                                    <NavLink to='/registration'>
                                        Регистриация
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </nav>
                </div>
            </Container>
        </header>
    );
};
