//Este archivo DEFINE como se ve una herramienta

export interface Herramienta {
    id?: number;          // El "?" significa que es opcional
    nombre: string;
    descripcion: string;
    tipo: string;
    precio: number;       // Cambié de string a number
}
