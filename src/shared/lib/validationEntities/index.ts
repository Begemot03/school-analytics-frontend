import * as yup from "yup";

const email = yup.string().min(5).max(255).email().required();
const password = yup.string().min(8).max(255).required();
const fio = yup.string().min(8).max(100).matches(/^\w+\s\w+\s\w+$/).required();


export {
    email,
    password,
    fio,
}