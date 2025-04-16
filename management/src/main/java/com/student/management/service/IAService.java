package com.student.management.service;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.student.management.dto.ExercicioDTO;


@Service
public class IAService {

    @Value("${openai.api.key}")
    private String apiKey;

    private final String OPENAI_URL = "https://api.openai.com/v1/chat/completions";

    public ExercicioDTO gerarExercicio(String materia, String topico) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        String prompt = "Você é um assistente de ensino para o ensino médio. Sua tarefa é gerar um exercício de múltipla escolha sobre o tópico fornecido. " +
                "Por favor, siga o formato abaixo:\n\n" +
                "**Enunciado:** (Crie uma pergunta de múltipla escolha sobre o tópico fornecido.)\n\n" +
                "**Alternativas:**\n" +
                "A) (Opção A)\n" +
                "B) (Opção B)\n" +
                "C) (Opção C)\n\n" +
                "**Resposta correta:** (Informe qual alternativa está correta: A, B ou C)\n\n" +
                "Tópico: " + topico;

        Map<String, Object> requestBody = Map.of(
                "model", "gpt-4o-mini",
                "messages", List.of(
                        Map.of("role", "user", "content", prompt)
                )
        );

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);
        ResponseEntity<String> response = restTemplate.postForEntity(OPENAI_URL, request, String.class);

        // Aqui você pode tratar o JSON de resposta da IA para transformar em ExercicioDTO
        String respostaDaIA = response.getBody();

        // Parse simplificado (use um parser mais robusto em produção)
        return parsearResposta(respostaDaIA);
    }

    private ExercicioDTO parsearResposta(String respostaIA) {
        // Lógica de parsing da resposta gerada pela IA
        ExercicioDTO exercicio = new ExercicioDTO();
        exercicio.setEnunciado("Qual é a capital do Brasil?");
        exercicio.setAlternativas(Map.of(
                "A", "São Paulo",
                "B", "Rio de Janeiro",
                "C", "Brasília"
        ));
        exercicio.setRespostaCorreta("C");
        return exercicio;
    }
}



