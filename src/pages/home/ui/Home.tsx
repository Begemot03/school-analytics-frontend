import { FC, useState, useEffect } from "react";
import { api } from "@/shared/api/api";


export const HomePage: FC = () => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: any = await api.get("/example").json();
                setData(response);
            } catch (error) {
                setError('Failed to fetch data');
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return <>
        <div>Home page</div>
        {data && JSON.stringify(data)}
    </>;
};
