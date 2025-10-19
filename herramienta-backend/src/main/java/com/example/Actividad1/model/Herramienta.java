package com.example.Actividad1.model;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Indexed;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //Genera getters, setters, toString, hashCode, equals. Gracias al plugin de lombok.
@NoArgsConstructor //Genera un constructor sin argumentos (util para JPA).
@Entity
@Table(name = "herramientas")
public class Herramienta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(length = 500)
    private String descripcion;

    @Column(nullable = false)
    private String tipo;

    @Column(nullable = false)
    private Double precio;

}
