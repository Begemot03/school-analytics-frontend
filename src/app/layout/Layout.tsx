import { Footer } from "@/widgets/footer/ui/Footer";
import { Header } from "@/widgets/header";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";
import { Container } from "@/shared/ui/container";

export const Layout: FC = () => {
    return (
        <div className='layout layout__wrapper'>
            <Header />

            <main className='layout__content'>
                <Container>
                    <Outlet />
                </Container>
            </main>

            <Footer />
        </div>
    );
};
