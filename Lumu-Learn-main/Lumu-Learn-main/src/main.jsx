import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import App from "./pages/Home"; // Sua página home (pode estar em App ou Home)
import ExerciseGenerator from "./pages/ExerciseGenerator";
import ProfileScreen from "./pages/Profile";
import Layout from "./components/Layout";
import "./index.css";
import Routine from "./pages/Routine"; // certifique-se de que o caminho está certo




ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/* Rota de login fora do layout, se necessário */}
                <Route path="/login" element={<Login />} />

                {/* Rotas compartilhadas com navbar */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="exercise-generator" element={<ExerciseGenerator />} />
                    <Route path="routine" element={<Routine />} /> {/* <- essa linha estava faltando */}
                    <Route path="profile" element={<ProfileScreen />} />
                </Route>

            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
