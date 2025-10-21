# 🖥️ Backend - CRUD de Herramientas
Esta parte contiene todo el **backend** del proyecto **CRUD de Herramientas**, desarrollado con **Spring Boot**. Aqui se maneja la logica del servidor, la conexion con la base de datos y la creacion de las rutas para el frontend.

---

## ⚙️ Tecnologias Utilizdas
- **Lenguaje:** Java  
- **Framework:** Spring Boot  
- **Dependencias:**  
  - Spring Web  
  - Spring Data JPA  
  - MySQL Driver  
  - Lombok (para simplificar el codigo)

---

## 🧠 Flujo de Funcionamiento
1. El **frontend (Angular)** envia las solicitudes HTTP (GET, POST, PUT, DELETE).
2. El **controlador** recibe la solicitud y la envia al servicio.
3. El **servicio** aplica la logica y utiliza el repositorio JPA para acceder a la base de datos.
4. Finalmente, se devuelve la respuesta al **frontend** en formato JSON.

---

## 🧾 Controlador
```java
@RestController
@RequestMapping("/api/herramientas")
@CrossOrigin(origins = "http://localhost:8080")
public class HerramientaController {
    
    @Autowired
    private HerramientaRepository HerramientaRepository;

    @GetMapping
    public List<Herramienta> getAllHerramientas() {
        return HerramientaRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Herramienta> getHerramientaById(@PathVariable Long id) {
        Optional<Herramienta> herramienta = HerramientaRepository.findById(id);
        return herramienta.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Herramienta createHerramienta(@RequestBody Herramienta herramienta){
        return HerramientaRepository.save(herramienta);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Herramienta> updateHerramienta(@PathVariable Long id, @RequestBody Herramienta herramientaDetails){
        Optional<Herramienta> optionalHerramienta = HerramientaRepository.findById(id);
        if (optionalHerramienta.isEmpty()){
            return ResponseEntity.notFound().build();
        }   

        Herramienta herramienta = optionalHerramienta.get();
        herramienta.setNombre(herramientaDetails.getNombre());
        herramienta.setDescripcion(herramientaDetails.getDescripcion());
        herramienta.setTipo(herramientaDetails.getTipo());
        herramienta.setPrecio(herramientaDetails.getPrecio());

        Herramienta updatedHerramienta = HerramientaRepository.save(herramienta);
        return ResponseEntity.ok(updatedHerramienta);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHerramienta(@PathVariable Long id){
        if (!HerramientaRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        HerramientaRepository.deleteById(id);
        return ResponseEntity.noContent().build();    
    } 
}
```

---

## 🧱 Repositorio JPA
```java
@Repository
public interface HerramientaRepository extends JpaRepository<Herramienta, Long> {
}
```



