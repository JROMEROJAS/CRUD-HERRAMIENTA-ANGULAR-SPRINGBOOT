import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Herramienta } from '../../models/herramienta';
import { HerramientaService } from '../../services/herramienta';

@Component({
  selector: 'app-herramienta-details',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './herramienta-details.html',
  styleUrl: './herramienta-details.css'
})
export class HerramientaDetailsComponent implements OnInit {

  //Inyeccion de dependencias.
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private herramientaService = inject(HerramientaService);

  //Propiedades 
  currentHerramienta: Herramienta = {
    nombre:'',
    descripcion:'',
    tipo:'',
    precio:0
  };
  message = '';
  viewMode = true; //Controla si muestra el modo vista o el modo edicion.

  ngOnInit(): void {
    //Inicializa el modo vista y limpia el mensaje de carga.
    this.message = '';
    this.viewMode = true;

    //Obtiene el ID de la URL y carga los datos.
    this.getHerramienta(this.route.snapshot.params['id']);
  }

  //Carga los datos de las herramientas usando el ID de la URL.
  //@param id - el ID de la herramienta a cargar.

  getHerramienta(id: String): void {
    this.herramientaService.get(Number(id)).subscribe({
      next: (data) => {
        this.currentHerramienta = data;
        console.log(data);
      },
      error: (e) => {
        console.error('Error al cargar la herramienta: ', e);
        this.message = 'Error: Herramienta no encontrada o error de conexion.';
      }
    });
  }

  //Cambia al modo de edicion.
  editMode() : void {
    this.viewMode = false;
  }

  //Llama al servicio para actualizar la herramienta.
  updateHerramienta(): void {
    this.message = 'Actualizando...';
  }

  //El ID se obtiene del objeto cargando.
  if (!this.currentHerramienta.id) {
    this.message = 'Error: ID de herramienta faltante.';
    return;
  }

  this.herramientaService.update(this.currentHerramienta.id, this.currentHerramienta).subscribe({
    next: (res) => {
      console.log(res);
      this.message = 'La herramienta fue actualizada exitosamente!';
      this.viewMode = true; //Vuelve al modo vista despues de actualizar.
    },
    error: (e) => {
      console.error('Error al actualizar: ', e);
      this.message = 'Error al actualizar la herramienta.';
    }
  });

  //Llama al servicio para eliminar la herramienta y redirige a la lista.
  deleteHerramienta(): void {
    if(confirm('Estas seguro de que deseas eliminar la herramienta: ${this.currentHerramienta.nombre}?')) {
      console.error('No se puede eliminar: ID de herramienta faltante.');
      this.message = 'Error al eliminar: ID faltante.';
    }
  }

}
