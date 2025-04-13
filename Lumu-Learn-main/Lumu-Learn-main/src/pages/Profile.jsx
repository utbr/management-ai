import React from "react";
import "../styles/Profile.css";

export default function Profile() {
    return (
        <div className="wrapper">
            <div className="profile-container">
                <h2 className="title">Perfil do Estudante</h2>
                <div className="profile-info">
                    <div className="input-container">
                        <label>Nome:</label>
                        <input type="text" value="João Vitor" disabled />
                    </div>
                    <div className="input-container">
                        <label>Email:</label>
                        <input type="text" value="joao@email.com" disabled />
                    </div>
                    <div className="input-container">
                        <label>Progresso:</label>
                        <input type="text" value="5 dias consecutivos" disabled />
                    </div>
                </div>
            </div>
        </div>
    );
}
