import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ExerciseGenerator() {
    const [subject, setSubject] = useState("");
    const [topic, setTopic] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [difficulty, setDifficulty] = useState("");
    const [exercises, setExercises] = useState(null);
    const navigate = useNavigate();

    const handleGenerateClick = async () => {
        try {
            // Enviar a requisição para o backend
            const response = await axios.post("/api/exercises/generate", {
                subject,
                topic,
                quantity,
                difficulty
            });
            
            // Processar a resposta (exercícios)
            const exercisesList = response.data.description.split("\n").map((exercise, index) => ({
                id: index + 1,
                description: exercise
            }));
            
            // Atualizar o estado com os exercícios gerados
            setExercises(exercisesList);
    
            // Navegar para outra página (opcional)
            navigate("/exercises");
        } catch (error) {
            console.error("Erro ao gerar exercícios:", error);
        }
    };
    

    return (
        <div className="wrapper">
            <div className="exercise-container page-container">
                <h2 className="title">Gerador de Exercícios</h2>

                <div className="input-container">
                    <label>Qual matéria você quer estudar?</label>
                    <select value={subject} onChange={e => setSubject(e.target.value)}>
                        <option value="">Selecione a matéria</option>
                        <option value="matematica">Matemática</option>
                        <option value="portugues">Português</option>
                        <option value="fisica">Física</option>
                        <option value="quimica">Química</option>
                        <option value="biologia">Biologia</option>
                        <option value="historia">História</option>
                        <option value="geografia">Geografia</option>
                        <option value="sociologia">Sociologia</option>
                        <option value="filosofia">Filosofia</option>
                        <option value="ingles">Inglês</option>
                    </select>
                </div>

                <div className="input-container">
                    <label>Qual assunto você quer estudar?</label>
                    <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="Ex: Equações do 2º grau" />
                </div>

                <div className="input-container">
                    <label>Quantos exercícios você quer fazer?</label>
                    <input type="number" min="1" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
                </div>

                <div className="input-container">
                    <label>Qual a dificuldade?</label>
                    <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                        <option value="">Selecione a dificuldade</option>
                        <option value="facil">Fácil</option>
                        <option value="medio">Médio</option>
                        <option value="dificil">Difícil</option>
                    </select>
                </div>

                {/* Botão para gerar exercícios */}
                <button className="generate-button" onClick={handleGenerateClick}>Gerar</button>

                {exercises && (
                    <div className="exercise-results">
                        <h3>Exercícios gerados:</h3>
                        <p>{exercises}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
