import { useAuthStore } from "@/app/stores/authStore";
import { email, password } from "@/shared/lib/validationEntities";
import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object({
    email,
    password,
});

export const LoginForm: FC = () => {
    const signin = useAuthStore((state) => state.signin);
    const navigate = useNavigate();
    const resolver = yupResolver(schema);
    const [loading, setLoading] = useState<boolean>(false);

    const onSumbit = async (data: any) => {
        setLoading(true);
        await signin(data);
        setLoading(false);
        navigate("/", { replace: true });
    };

    return (
        <Form defaultValues={{ resolver }} onSubmit={onSumbit}>
            <Input name='username' placeholder='Логин' />
            <Input name='email' placeholder='Электронная почта' />
            <Input name='password' type='password' placeholder='Пароль' />
            <Button
                loading={loading}
                className='button login__button'
                type='submit'>
                Войти
            </Button>
        </Form>
    );
};
