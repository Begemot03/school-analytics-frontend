import { AuthProvider } from "@/app/providers/authProvider";
import { AppRouter } from "@/app/routes";
import "./styles/global.css";

function App() {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
}

export default App;
