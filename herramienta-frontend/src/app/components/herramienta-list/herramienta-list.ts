import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HerramientaService } from '../../services/herramienta';
import { Herramienta } from '../../models/herramienta';

@Component({
  selector: 'app-herramienta-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './herramienta-list.html',
  styleUrl: './herramienta-list.css'
})
export class HerramientaListComponent implements OnInit {

  herramientas: Herramienta[] = [];
  message = '';

  constructor(private herramientaService: HerramientaService){}

  ngOnInit(): void {
      this.cargarHerramientas();
  }

  cargarHerramientas(): void {
    this.herramientaService.getAll().subscribe({
      next: (data: Herramienta[]) => {
        this.herramientas = data;
      },
      error: (e: any) => {
        console.error('Error al cargar herramientas:', e);
        this.message = 'No se pudieron cargar las herramientas.';
      }
    });
  }

  eliminarHerramientas(id:number): void {
    if(confirm('Seguro que deseas eliminar esta herramienta?')) {
      this.herramientaService.delete(id).subscribe({
        next: () => {
          this.message = 'Herramienta eliminada correctamente.';
          this.cargarHerramientas();
        },
        error:(e: any) => {
          console.error('Error al eliminar la herramienta: ', e);
          this.message = 'Error al eliminar la herramienta.'
        }
      });
    }
  }
}
