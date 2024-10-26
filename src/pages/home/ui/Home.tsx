import { FC, useState, useEffect } from "react";
import { api } from "@/shared/api/api";

export const HomePage: FC = () => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            console.log("fetch data")
            const response: any = await api.get("example");
            console.log(response)
            setData(response);
        } catch (error) {
            setError("Failed to fetch data");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // if (error) {
    //     console.log(error)
    //     return <div>{error}</div>;
    // }

    return (
        <>
            <div>Home page</div>
            <button onClick={fetchData}>Нажать</button>
            {data && JSON.stringify(data)}
        </>
    );
};
