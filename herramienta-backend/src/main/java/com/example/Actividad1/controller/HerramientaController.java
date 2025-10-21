package com.example.Actividad1.controller;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController; 
import com.example.Actividad1.model.Herramienta;
import com.example.Actividad1.repository.HerramientaRepository;

@RestController
@RequestMapping("/api/herramientas")
@CrossOrigin(origins = "http://localhost:8080")
public class HerramientaController {
    
    @Autowired
    private HerramientaRepository herramientaRepository;

    @GetMapping
    public List<Herramienta> getAllHerramientas() {
        return herramientaRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Herramienta> getHerramientaById(@PathVariable Long id) {
        Optional<Herramienta> herramienta = herramientaRepository.findById(id);
        return herramienta.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Herramienta createHerramienta(@RequestBody Herramienta herramienta){
        return herramientaRepository.save(herramienta);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Herramienta> updateHerramienta(@PathVariable Long id, @RequestBody Herramienta herramientaDetails){
        Optional<Herramienta> optionalHerramienta = herramientaRepository.findById(id);
        if (optionalHerramienta.isEmpty()){
            return ResponseEntity.notFound().build();
        }   

        Herramienta herramienta = optionalHerramienta.get();
        herramienta.setNombre(herramientaDetails.getNombre());
        herramienta.setDescripcion(herramientaDetails.getDescripcion());
        herramienta.setTipo(herramientaDetails.getTipo());
        herramienta.setPrecio(herramientaDetails.getPrecio());

        Herramienta updatedHerramienta = herramientaRepository.save(herramienta);
        return ResponseEntity.ok(updatedHerramienta);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHerramienta(@PathVariable Long id){
        if (!herramientaRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        herramientaRepository.deleteById(id);
        return ResponseEntity.noContent().build();    
    } 
}
