import { FC } from "react";
import { ROUTES } from "@/shared/consts";
import { NavLink } from "react-router-dom";
import { Container } from "@/shared/ui/container";
import { useAuthStore } from "@/app/stores/authStore";
import { useShallow } from "zustand/shallow";
import "./header.css";

export const Header: FC = () => {
    const [isAuth, userRole, setRole] = useAuthStore(
        useShallow((state) => [state.isAuth, state.userRole, state.setRole])
    );

    const toStudent = () => setRole("ROLE_STUDENT");
    const toAdmin = () => setRole("ROLE_ADMIN");
    const toTeacher = () => setRole("ROLE_TEACHER");

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
                            <span className='nav__item' key={route.label}>
                                <NavLink to={route.to}>{route.label}</NavLink>
                            </span>
                        ))}
                        {isAuth ? (
                            <span className='nav__item'>
                                <NavLink to='/logout'>Выход</NavLink>
                            </span>
                        ) : (
                            <>
                                <span className='nav__item'>
                                    <NavLink to='/login'>Вход</NavLink>
                                </span>
                                <span className='nav__item'>
                                    <NavLink to='/registration'>
                                        Регистриация
                                    </NavLink>
                                </span>
                            </>
                        )}
                        <span className='nav__item nav_item--selected' onClick={toStudent}>
                            Стать учеником
                        </span>
                        <span className='nav__item nav_item--selected' onClick={toTeacher}>
                            Стать учителем
                        </span>
                        <span className='nav__item nav_item--selected' onClick={toAdmin}>
                            Стать админом
                        </span>
                    </nav>
                </div>
            </Container>
        </header>
    );
};
