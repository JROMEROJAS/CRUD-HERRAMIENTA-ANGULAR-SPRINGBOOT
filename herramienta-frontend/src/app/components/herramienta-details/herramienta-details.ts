import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Herramienta } from '../../models/herramienta';
import { HerramientaService } from '../../services/herramienta';


@Component({
  selector: 'app-herramienta-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './herramienta-details.html',
  styleUrls: ['./herramienta-details.css']
})
export class HerramientaDetailsComponent implements OnInit {

  // Inyección de dependencias
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private herramientaService = inject(HerramientaService);

  // Propiedades
  currentHerramienta: Herramienta = {
    nombre: '',
    descripcion: '',
    tipo: '',
    precio: 0
  };

  message: string = '';
  viewMode: boolean = true; // Controla si se muestra modo vista o edición

  ngOnInit(): void {
    this.message = '';
    this.viewMode = true;
    const id = this.route.snapshot.params['id'];
    this.getHerramienta(id);
  }

  // Carga la herramienta según el ID recibido por la URL
  getHerramienta(id: string): void {
    this.herramientaService.get(Number(id)).subscribe({
      next: (data: Herramienta) => {
        this.currentHerramienta = data;
        console.log('Herramienta cargada:', data);
      },
      error: (e: any) => {
        console.error('Error al cargar la herramienta:', e);
        this.message = 'Error: Herramienta no encontrada o error de conexión.';
      }
    });
  }

  // Cambia a modo edición
  editMode(): void {
    this.viewMode = false;
  }

  // Actualiza la herramienta
  updateHerramienta(): void {
    this.message = 'Actualizando...';

    if (!this.currentHerramienta.id) {
      this.message = 'Error: ID de herramienta faltante.';
      return;
    }

    this.herramientaService.update(this.currentHerramienta.id, this.currentHerramienta).subscribe({
      next: (res: Herramienta) => {
        console.log(res);
        this.message = 'La herramienta fue actualizada exitosamente!';
        this.viewMode = true; // Vuelve al modo vista
      },
      error: (e: any) => {
        console.error('Error al actualizar:', e);
        this.message = 'Error al actualizar la herramienta.';
      }
    });
  }

  // Elimina la herramienta y redirige al listado
  deleteHerramienta(): void {
    if (!this.currentHerramienta.id) {
      this.message = 'Error al eliminar: ID faltante.';
      return;
    }

    if (confirm(`¿Estás seguro de que deseas eliminar la herramienta: ${this.currentHerramienta.nombre}?`)) {
      this.herramientaService.delete(this.currentHerramienta.id).subscribe({
        next: () => {
          this.message = 'Herramienta eliminada correctamente.';
          this.router.navigate(['/herramientas']);
        },
        error: (e: any) => {
          console.error('Error al eliminar:', e);
          this.message = 'Error al eliminar la herramienta.';
        }
      });
    }
  }
}