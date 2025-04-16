package com.student.management.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class OpenAIService {

    private final RestTemplate restTemplate;

    @Value("${openai.api.key}")
    private String apiKey;

    public OpenAIService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String enviarMensagem(String mensagemUsuario) {
        String url = "https://api.openai.com/v1/chat/completions";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        // Corpo da requisição para o modelo gpt-4o-mini
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "gpt-4o-mini");

        List<Map<String, String>> mensagens = new ArrayList<>();
        mensagens.add(Map.of("role", "user", "content", mensagemUsuario));
        requestBody.put("messages", mensagens);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<Map> response = restTemplate.postForEntity(url, request, Map.class);

            if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
                List<Map<String, Object>> choices = (List<Map<String, Object>>) response.getBody().get("choices");
                Map<String, Object> mensagem = (Map<String, Object>) choices.get(0).get("message");
                return mensagem.get("content").toString().trim();
            } else {
                return "Erro na resposta da OpenAI.";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "Erro ao se comunicar com a OpenAI: " + e.getMessage();
        }
    }
}
