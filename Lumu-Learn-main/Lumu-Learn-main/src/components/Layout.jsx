import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./Layout.css"; // se precisar de algum estilo específico para o layout

export default function Layout() {
    return (
        <div className="layout-container">
            {/* Conteúdo principal das páginas */}
            <div className="content">
                <Outlet />            </div>
            {/* Navbar fixa na parte inferior */}
            <Navbar />
        </div>
    );
}
