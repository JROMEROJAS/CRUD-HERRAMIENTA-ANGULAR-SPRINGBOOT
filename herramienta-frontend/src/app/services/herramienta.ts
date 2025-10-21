import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Herramienta } from '../models/herramienta';

@Injectable({
  providedIn: 'root'
})
export class HerramientaService {
  
  constructor(private http: HttpClient) { }

  // Obtener una herramienta por ID
  get(id: number): Observable<Herramienta> {
    return this.http.get<Herramienta>(`/api/herramientas/${id}`);
  }

  // Actualizar una herramienta
  update(id: number, herramienta: Herramienta): Observable<Herramienta> {
    return this.http.put<Herramienta>(`/api/herramientas/${id}`, herramienta);
  }

  // Eliminar una herramienta
  delete(id: number): Observable<any> {
    return this.http.delete(`/api/herramientas/${id}`);
  }

  // Puedes agregar más métodos según necesites
  getAll(): Observable<Herramienta[]> {
    return this.http.get<Herramienta[]>('/api/herramientas');
  }

  create(herramienta: Herramienta): Observable<Herramienta> {
    return this.http.post<Herramienta>('/api/herramientas', herramienta);
  }
}