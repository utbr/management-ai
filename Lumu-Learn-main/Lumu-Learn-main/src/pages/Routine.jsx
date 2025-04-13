import React from "react";
import "../styles/Routine.css";

export default function Routine() {
    return (
        <div className="wrapper">
            <div className="routine-container">
                <h2 className="title">📜 Sua Rotina de Estudos</h2>

                <div className="routine-section">
                    <h3>Hoje</h3>
                    <ul>
                        <li>✔️ 20min de Matemática</li>
                        <li>⏳ 15min de Física</li>
                        <li>❌ Redação (não iniciado)</li>
                    </ul>
                </div>

                <div className="routine-section">
                    <h3>Meta da Semana</h3>
                    <p>🗓️ Estudar ao menos 5 dias</p>
                    <p>📌 Total de horas: <strong>5h de 7h</strong></p>
                </div>

                <button className="generate-button">Adicionar Atividade</button>
            </div>
        </div>
    );
}
