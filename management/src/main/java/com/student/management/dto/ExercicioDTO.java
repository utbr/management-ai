package com.student.management.dto;
import java.util.Map;

public class ExercicioDTO {
    private String enunciado;
    private Map<String, String> alternativas;
    private String respostaCorreta;

    // Getters e Setters
    public String getEnunciado() {
        return enunciado;
    }

    public void setEnunciado(String enunciado) {
        this.enunciado = enunciado;
    }

    public Map<String, String> getAlternativas() {
        return alternativas;
    }

    public void setAlternativas(Map<String, String> alternativas) {
        this.alternativas = alternativas;
    }

    public String getRespostaCorreta() {
        return respostaCorreta;
    }

    public void setRespostaCorreta(String respostaCorreta) {
        this.respostaCorreta = respostaCorreta;
    }
}
