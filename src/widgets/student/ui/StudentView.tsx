import { FC, useState } from "react";
import { Button } from "@/shared/ui/button";
import { api } from "@/shared/api/api";
import "./StudentView.css";

// {
//     "value": 4,
//     "dateTime": "2024-10-26T15:50:16.641Z",
//     "student_id": 9,
//     "subject_name": "Физика"
// }

type StudentProps = {
    fio: string;
    id: number;
};

const ATTENDANCE = ["PRESENT", "ABSENT"];

export const StudentView: FC<StudentProps> = ({ fio, id }) => {
    const [isAddingGradeVisible, setIsAddingGradeVisible] = useState(false);
    const [isMarkingAttendanceVisible, setIsMarkingAttendanceVisible] = useState(false);

    const handleAddGrade = () => {
        setIsAddingGradeVisible(true);
    };

    const handleMarkAttendance = () => {
        setIsMarkingAttendanceVisible(true);
    };

    const addGrade = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const dateTime = new Date().toISOString();
        const gradeValue = formData.get("grade") as string;
        const sendData = {
            value: parseInt(gradeValue),
            dateTime: dateTime,
            student_id: id,
            subject_name: "Физика"
        }

        try {
            await api.post("grade", {
                body: JSON.stringify(sendData),
            })
                .json();
        } catch (error) {
            console.error("Error:", error);
        }

        console.log(sendData);
        setIsAddingGradeVisible(false);
    }

    const addAttendance = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const dateTime = new Date().toISOString();
        const attendance = formData.get("attendance") as string;
        const sendData = {
            dateTime: dateTime,
            student_id: id,
            subject_name: "Физика",
            attendance_status: attendance
        }

        try {
            await api.post("grade", {
                body: JSON.stringify(sendData),
            })
                .json();
        } catch (error) {
            console.error("Error:", error);
        }

        console.log(sendData);
        setIsMarkingAttendanceVisible(false);
    }

    return <div className="student__list-item">
        <p>{id} {fio}</p>
        <div className="student__list-tools">
            <Button onClick={handleAddGrade} className="button student__list-button" type="button">Добавить оценку</Button>
            <Button onClick={handleMarkAttendance} className="button student__list-button" type="button">Отметить посещение</Button>
        </div>
        {isAddingGradeVisible && (
            <div className="modal">
                <form onSubmit={addGrade}>
                    <select className="modal-select" id="grade" name="grade" required>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                    </select>
                    <Button className="button modal-button" type="submit">Добавить</Button>
                </form>
            </div>
        )}
        {isMarkingAttendanceVisible && (
            <div className="modal">
                <form onSubmit={addAttendance}>
                    <select className="modal-select" id="attendance" name="attendance" required>
                        <option value={ATTENDANCE[0]}>Присутствует</option>
                        <option value={ATTENDANCE[1]}>Отсутствует</option>
                    </select>
                    <Button className="button modal-button" type="submit">Применить</Button>
                </form>
            </div>
        )}
    </div>
}