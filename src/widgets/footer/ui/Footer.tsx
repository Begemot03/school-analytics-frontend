import { FC } from "react";
import "./footer.css";
import { Container } from "@/shared/ui/container";

export const Footer: FC = () => {
    return (
        <footer className='footer'>
            <Container>
                <div className='footer__container'>®10.10.2024</div>
            </Container>
        </footer>
    );
};
