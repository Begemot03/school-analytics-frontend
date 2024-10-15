import { FC } from "react";
import "./header.css";
import { useAuth } from "@/shared/lib/auth/useAuth";
import { ROUTES } from "@/shared/consts";
import { NavLink } from "react-router-dom";

export const Header: FC = () => {
    const { isAuth } = useAuth();

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
        </header>
    );
};
