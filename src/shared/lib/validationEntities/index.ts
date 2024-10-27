import * as yup from "yup";

const email = yup.string().min(5).max(255).email().required();
const password = yup.string().min(8).max(255).required();
const fio = yup.string().min(8).max(100).matches(/^\w+\s\w+\s\w+$/).required();

const gradeOptions = [
    { value: '5', label: '5' },
    { value: '4', label: '4' },
    { value: '3', label: '3' },
    { value: '2', label: '2' },
];

const attendanceOptions = [
    { value: 'PRESENT', label: 'Присутствует' },
    { value: 'ABSENT', label: 'Отсутствует' },
];

const validationSchema = yup.object({
    grade: yup.string().oneOf(Object.keys(gradeOptions).map((_, index) => gradeOptions[index].value)),
    attendance: yup.string().oneOf([attendanceOptions[0].value, attendanceOptions[1].value])
}).required();

export {
    email,
    password,
    fio,
    validationSchema,
}