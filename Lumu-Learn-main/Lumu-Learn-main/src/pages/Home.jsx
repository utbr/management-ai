import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
    return (
        <div className="wrapper">
            <div className="home-container">
                <h2 className="home-title">Olá, João!</h2>
                <p className="home-subtitle">Pronto para estudar hoje?</p>

                <div className="home-summary">
                    <p>📚 Exercícios feitos hoje: <strong>3</strong></p>
                    <p>🔥 Progresso semanal: <strong>5 de 7 dias</strong></p>
                </div>

                <div className="home-actions">
                    <Link to="/exercise-generator" className="action-button">➕ Gerar exercícios</Link>
                    <Link to="/routine" className="action-button">📜 Rotina</Link>
                    <Link to="/profile" className="action-button">📈 Perfil</Link>
                </div>

                <div className="home-tip">
                    <p>💡 Dica do dia:</p>
                    <p>Estudar 20 minutos por vez melhora a retenção!</p>
                </div>
            </div>
        </div>
    );
}
