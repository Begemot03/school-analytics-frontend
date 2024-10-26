import { FC } from "react";
import { ROUTES } from "@/shared/consts";
import { NavLink } from "react-router-dom";
import { Container } from "@/shared/ui/container";
import { useAuthStore } from "@/app/stores/authStore";
import "./header.css";

export const Header: FC = () => {
    const isAuth = useAuthStore((state) => state.isAuth);

    const navigationContent = ROUTES.filter((route) =>
        route.isAuth ? isAuth : true
    ).map((route) => (
        <li className='nav__item' key={route.title}>
            <NavLink to={route.to} end>
                {route.title}
            </NavLink>
        </li>
    ));

    return (
        <header className='header'>
            <Container>
                <div className='header__container'>
                    <nav className='nav'>
                        {navigationContent}
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
