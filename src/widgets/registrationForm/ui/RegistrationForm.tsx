import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Form } from "@/shared/ui/form";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { email, fio, password } from "@/shared/lib/validationEntities";
import { useAuthStore } from "@/app/stores/authStore";

//FIXME: Надо думать над тем как юзать username, на бэке есть, в фигме нет, пока username = email
const schema = yup.object({
    fio,
    email,
    password,
});

export const RegistrationForm: FC = () => {
    const signup = useAuthStore((state) => state.signup);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const resolver = yupResolver(schema);

    const onSumbit = async (data: any) => {
        setLoading(true);
        data.username = data.email;
        await signup(data);
        navigate("/", { replace: true });
        setLoading(false);
    };

    return (
        <Form defaultValues={{ resolver }} onSubmit={onSumbit}>
            <Input name='fio' placeholder='ФИО' />
            <Input name='email' placeholder='Электронная почта' />
            <Input name='password' type='password' placeholder='Пароль' />
            <Button
                loading={loading}
                className='button registration__button'
                type='submit'>
                Продолжить
            </Button>
        </Form>
    );
};
