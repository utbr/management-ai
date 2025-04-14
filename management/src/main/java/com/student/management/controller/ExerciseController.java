package com.student.management.controller;

import com.student.management.model.Exercise;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/exercises")
@CrossOrigin(origins = "http://localhost:3000") // Permitir chamadas do frontend no Vite
public class ExerciseController {

    @PostMapping("/generate")
    public ExerciseResponse generateExercises(@RequestBody Exercise request) {
        List<String> generated = new ArrayList<>();

        for (int i = 1; i <= request.getQuantity(); i++) {
            String desc = "Exercício " + i + " de " + request.getTopic()
                    + " (" + request.getSubject() + ", dificuldade: " + request.getDifficulty() + ")";
            generated.add(desc);
        }

        // Retorna uma resposta com a lista de exercícios gerados
        return new ExerciseResponse(String.join("\n", generated));
    }

    static class ExerciseResponse {
        private String description;

        public ExerciseResponse(String description) {
            this.description = description;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }
    }
}
