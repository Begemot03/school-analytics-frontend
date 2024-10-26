import { FC } from "react";
import { LoginForm } from "@/widgets/loginForm";
import "./Login.css";

// {
// username: "jhonsdjhnond",
// email: "testmdasdil@mail.ru",
// password: "233ddsda24",
// }

export const LoginPage: FC = () => {
    return <div className="login__container">
        <div className="login__layout">
            <h1 className="login__heading">Войти</h1>
            <p className="login__info">Войдите в аккаунт, чтобы продолжить работу с платформой!</p>
            <LoginForm />
            <p className="login__to-registration">Нет аккаунта? <a className="login__ref" href="/registration">Зарегистрироваться</a></p>
        </div>
    </div>;
};
