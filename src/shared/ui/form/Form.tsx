import { Children, createElement, FC, ReactElement } from "react";
import { useForm, UseFormProps } from "react-hook-form";

type FormProps = {
    defaultValues?: UseFormProps<any, unknown>;
    children: ReactElement | ReactElement[];
    onSubmit: () => {};
};

export const Form: FC<FormProps> = ({ defaultValues, children, onSubmit }) => {
    const { register, handleSubmit } = useForm(defaultValues);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {Children.map(children, (child: ReactElement) => {
                return child.props.name
                    ? createElement(child.type, {
                          ...{
                              ...child.props,
                              register: register,
                              key: child.props.name,
                          },
                      })
                    : child;
            })}
        </form>
    );
};
