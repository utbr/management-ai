package com.student.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.student.management.model.Activity;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
    // Métodos de consulta adicionais podem ser adicionados aqui se necessário.
}
