import { Footer } from "@/widgets/footer/ui/Footer";
import { Header } from "@/widgets/header";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
    return (
        <div className='layout layout__wrapper'>
            <Header />

            <main className='layout__content'>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};
