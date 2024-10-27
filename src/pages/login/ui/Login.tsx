import { FC } from "react";
import { LoginForm } from "@/widgets/loginForm";
import { Link } from "react-router-dom";
import "./Login.css";

export const LoginPage: FC = () => {
    return (
        <div className='login__container'>
            <div className='login__layout'>
                <h1 className='login__heading'>Войти</h1>
                <p className='login__info'>
                    Войдите в аккаунт, чтобы продолжить работу с платформой!
                </p>
                <LoginForm />
                <p className='login__to-registration'>
                    Нет аккаунта?{" "}
                    <Link className='login__ref' to='/registration'>
                        Зарегистрироваться
                    </Link>
                </p>
            </div>
        </div>
    );
};
