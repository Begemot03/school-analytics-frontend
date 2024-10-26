import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Form } from "@/shared/ui/form";
import { useAuth } from "@/shared/lib/auth/useAuth";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { email, fio, password } from "@/shared/lib/validationEntities";

//FIXME: Надо думать над тем как юзать username, на бэке есть, в фигме нет, пока username = email
const schema = yup.object({
    fio,
    email,
    password,
});

export const RegistrationForm: FC = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();
    const resolver = yupResolver(schema);

    const onSumbit = async (data: any) => {
        data.username = data.email;
        await signup(data);
        navigate("/", { replace: true });
    };

    return (
        <Form defaultValues={{ resolver }} onSubmit={onSumbit}>
            <Input name='fio' placeholder='ФИО' />
            <Input name='email' placeholder='Электронная почта' />
            <Input name='password' type='password' placeholder='Пароль' />
            <Button className='button registration__button' type='submit'>
                Продолжить
            </Button>
        </Form>
    );
};
