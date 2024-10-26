import { FC, useState, useEffect } from "react";
import { api } from "@/shared/api/api";

export const StudentPage: FC = () => {
    const [data, setData] = useState<any>(null);

    const fetchData = async () => {
        try {
            console.log("fetch data")
            const response: any = await api.get("student/my-dashboard");
            console.log(response)
            setData(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <>
        <div>Дашборд студента</div>
        <button onClick={fetchData}>Нажать</button>
        {data && JSON.stringify(data)}
    </>
}