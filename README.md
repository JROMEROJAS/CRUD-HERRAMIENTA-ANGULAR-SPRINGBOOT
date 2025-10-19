🛠️ Proyecto CRUD de Gestión de Herramientas 🛠️

Este repositorio contiene una aplicación completa de tipo CRUD (Crear, Leer, Actualizar, Eliminar) diseñada para la gestión de un catálogo de herramientas. La arquitectura se implementó utilizando una separación clara entre el Frontend y el Backend (arquitectura de microservicios).

🚀 Tecnologías Utilizadas

Backend (API REST con Spring Boot)

Framework: Spring Boot 3+ (Java)

Persistencia: Spring Data JPA

Base de Datos: MySQL

CORS: Habilitado para comunicación con Angular (puerto 4200)

Frontend (Aplicación Web con Angular)

Framework: Angular 16+ (Utilizando Componentes Standalone)

Módulos clave: HttpClient (para la comunicación con el Backend), Router (para la navegación) y FormsModule (para la gestión de formularios con ngModel).

Estilos: Bootstrap (para un diseño limpio y responsive).

⚙️ Estructura del Proyecto

El proyecto está organizado en dos subdirectorios principales que deben ejecutarse de forma independiente:

herramienta-backend: Contiene todo el código fuente de la API REST de Java, incluyendo la entidad Herramienta, el repositorio JPA y el HerramientaController con los endpoints REST.

herramienta-frontend: Contiene la aplicación web de Angular con los componentes necesarios para el CRUD:

herramienta-list (Lectura de todas las herramientas)

herramienta-form (Creación de nuevas herramientas)

herramienta-details (Detalles, Actualización y Eliminación)

🛠️ Instrucciones de Configuración y Ejecución

Para iniciar el proyecto, debes configurar y ejecutar tanto el Backend como el Frontend.

1. Configuración de la Base de Datos (MySQL)

Asegúrate de que el servicio de MySQL esté activo.

Crea una base de datos con el nombre: herramientas_db.

IMPORTANTE: Edita el archivo de configuración del Backend:
herramienta-backend/src/main/resources/application.properties

Ajusta las credenciales de conexión:

spring.datasource.url=jdbc:mysql://localhost:3306/herramientas_db
spring.datasource.username=tu_usuario_mysql 
spring.datasource.password=tu_contraseña_mysql
spring.jpa.hibernate.ddl-auto=update 


2. Ejecutar el Backend (Spring Boot)

Navega a la carpeta herramienta-backend.

Ejecuta la aplicación desde tu IDE (IntelliJ, VS Code, etc.) o usando tu herramienta de construcción:

# Ejemplo usando Maven Wrapper
./mvnw spring-boot:run 
# O simplemente ejecuta la clase principal desde tu IDE.


La API estará disponible en: http://localhost:8080/api/herramientas

3. Ejecutar el Frontend (Angular)

Navega a la carpeta herramienta-frontend.

Instala las dependencias de Node (solo la primera vez):

npm install


Inicia la aplicación en modo desarrollo:

ng serve --open


La aplicación abrirá en su navegador en: http://localhost:4200