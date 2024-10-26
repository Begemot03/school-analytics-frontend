import { FC } from "react";
import { LoginForm } from "@/widgets/loginForm";
import "./Login.css";
import { Link } from "react-router-dom";

// {
// username: "jhonsdjhnond",
// email: "testmdasdil@mail.ru",
// password: "233ddsda24",
// }

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
