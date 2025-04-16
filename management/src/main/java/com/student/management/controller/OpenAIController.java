package com.student.management.controller;

import com.student.management.service.OpenAIService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/openai")
public class OpenAIController {

    private final OpenAIService openAIService;

    public OpenAIController(OpenAIService openAIService) {
        this.openAIService = openAIService;
    }

    @GetMapping("/chat")
    public String conversar(@RequestParam String mensagem) {
        return openAIService.enviarMensagem(mensagem);
    }
}
