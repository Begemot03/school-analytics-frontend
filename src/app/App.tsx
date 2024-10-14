import { AuthProvider } from "@/app/providers/authProvider";
import "./styles/global.css";
import { AppRouter } from "@/app/routes";

function App() {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
}

export default App;
