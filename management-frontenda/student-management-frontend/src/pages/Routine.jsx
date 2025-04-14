import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importando o useNavigate
import "../styles/Routine.css";

export default function Routine() {
  const navigate = useNavigate(); // Usando o hook de navegação
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({
    name: "",
    duration: "",
    status: "",
    type: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/routine")
      .then((response) => {
        setActivities(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("Erro ao buscar atividades:", error);
      });
  }, []);

  const handleChange = (e) => {
    setNewActivity({
      ...newActivity,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/routine", newActivity)
      .then((response) => {
        setActivities([...activities, response.data]);
        setNewActivity({
          name: "",
          duration: "",
          status: "",
          type: "",
        });
      })
      .catch((error) => {
        console.error("Erro ao adicionar atividade:", error);
      });
  };

  return (
    <div className="wrapper">
      <div className="routine-container">
        <h2 className="title">📜 Sua Rotina de Estudos</h2>

        <button className="back-button" onClick={() => navigate("/")}>
          Voltar para Home
        </button>

        <div className="routine-section">
          <h3>Hoje</h3>
          <ul>
            {activities.map((activity) => (
              <li key={activity.id}>
                {activity.status === "done"
                  ? "✔️"
                  : activity.status === "in_progress"
                  ? "⏳"
                  : "❌"}{" "}
                {activity.name} - {activity.duration}
              </li>
            ))}
          </ul>
        </div>

        <div className="routine-section">
          <h3>Meta da Semana</h3>
          <p>🗓️ Estudar ao menos 5 dias</p>
          <p>
            📌 Total de horas: <strong>5h de 7h</strong>
          </p>
        </div>

        <button
          className="generate-button"
          onClick={() => {
            const form = document.getElementById("activityForm");
            form.style.display =
              form.style.display === "none" ? "block" : "none";
          }}
        >
          Adicionar Atividade
        </button>

        <form
          id="activityForm"
          onSubmit={handleSubmit}
          style={{ display: "none", marginTop: "20px" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Nome da atividade"
            value={newActivity.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="duration"
            placeholder="Duração (ex.: 20min)"
            value={newActivity.duration}
            onChange={handleChange}
            required
          />
          <select
            name="status"
            value={newActivity.status}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o status</option>
            <option value="done">Concluído</option>
            <option value="in_progress">Em andamento</option>
            <option value="pending">Não iniciado</option>
          </select>
          <input
            type="text"
            name="type"
            placeholder="Tipo (ex.: Matemática, Física...)"
            value={newActivity.type}
            onChange={handleChange}
            required
          />
          <button type="submit">Salvar Atividade</button>
        </form>
      </div>
    </div>
  );
}
