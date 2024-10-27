import { FC } from "react";
import { RegistrationForm } from "@/widgets/registrationForm";
import "./Registration.css";
import { Link } from "react-router-dom";

export const RegistrationPage: FC = () => {
    return (
        <div className='registration__container'>
            <div className='registration__layout'>
                <h1 className='registration__heading'>Создать аккаунт</h1>
                <p className='registraton__info'>
                    Создайте учетную запись, чтобы пользоваться всеми услугами!
                </p>
                <RegistrationForm />
                <p className='registraton__to-login'>
                    У вас уже есть учетная запись?{" "}
                    <Link className='registraton__ref' to='/login'>
                        Войти
                    </Link>
                </p>
            </div>
        </div>
    );
};
