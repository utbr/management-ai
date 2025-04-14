package com.student.management.controller;

import com.student.management.model.Activity;
import com.student.management.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/routine")
@CrossOrigin(origins = "http://localhost:3000") // Altere a origem conforme a porta do seu React, se necessário.
public class ActivityController {

    @Autowired
    private ActivityRepository activityRepository;

    // Endpoint para retornar todas as atividades (GET /routine)
    @GetMapping
    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    // Endpoint para criar uma nova atividade (POST /routine)
    @PostMapping
    public Activity createActivity(@RequestBody Activity activity) {
        return activityRepository.save(activity);
    }
}
