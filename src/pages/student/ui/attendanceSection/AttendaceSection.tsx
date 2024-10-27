import { useStudentStore } from "@/pages/student/model";
import { FC, useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

export const AttendaceSection: FC = () => {
    const [subject, setSubject] = useState<string>("Математика");

    const getAttendanceDataBySubject = useStudentStore(
        (state) => state.getAttendanceDataBySubject
    );

    const [attendanceData, setAttendanceData] = useState<
        {
            date: string;
            subject: string;
            present: boolean;
        }[]
    >([]);

    useEffect(() => {
        setAttendanceData(getAttendanceDataBySubject(subject));
    }, [subject, getAttendanceDataBySubject]);

    const attendanceChartData = {
        labels: ["Присутствовал", "Отсутствовал"],
        datasets: [
            {
                data: [
                    attendanceData.filter((data) => data.present).length,
                    attendanceData.filter((data) => !data.present).length,
                ],
                backgroundColor: ["#4caf50", "#f44336"],
            },
        ],
    };

    return (
        <>
            <select onChange={(e) => setSubject(e.target.value)}>
                <option value='Математика'>Математика</option>
                <option value='Физика'>Физика</option>
            </select>
            <h3>Посещаемость</h3>
            <div className="statistic__container">
                <Pie height={100}  data={attendanceChartData} />
                <table style={{ marginLeft: "20px" }}>
                    <thead>
                        <tr>
                            <th>Дата</th>
                            <th>Предмет</th>
                            <th>Посещаемость</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceData.map((data, idx) => (
                            <tr key={idx}>
                                <td>{data.date}</td>
                                <td>{data.subject}</td>
                                <td>
                                    {data.present
                                        ? "Присутствовал"
                                        : "Отсутствовал"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
