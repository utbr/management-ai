import React from "react";
import "../styles/ExerciseGenerator.css";

export default function ExerciseGenerator() {
    return (
        <div className="wrapper">
            <div className="exercise-container page-container">
                <h2 className="title">Gerador de exercícios</h2>

                <div className="input-container">
                    <label>Qual matéria você quer estudar?</label>
                    <select>
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
                    <input type="text" placeholder="Ex: Equações do 2º grau" />
                </div>

                <div className="input-container">
                    <label>Quantos exercícios você quer fazer?</label>
                    <input type="number" min="1" />
                </div>

                <div className="input-container">
                    <label>Qual a dificuldade?</label>
                    <select>
                        <option value="">Selecione a dificuldade</option>
                        <option value="facil">Fácil</option>
                        <option value="medio">Médio</option>
                        <option value="dificil">Difícil</option>
                    </select>
                </div>

                <button className="generate-button">Gerar</button>
            </div>
        </div>
    );
}
