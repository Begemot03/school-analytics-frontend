import { StudentView } from "@/widgets/student/ui/StudentView";
import { FC } from "react";

type StudentListProps = {
    studentList: Array<{ fio: string; id: number }>
};

export const StudentList: FC<StudentListProps> = ({ studentList }) => {
    return <>
        {studentList?.map((student, key) => <StudentView key={key} fio={student?.fio} id={student?.id} />)}
    </>
}