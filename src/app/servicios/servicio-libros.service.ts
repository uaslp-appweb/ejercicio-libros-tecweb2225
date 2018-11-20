import { Injectable } from '@angular/core';
import { Libro } from '../modelos/libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioLibrosService {
  libros: Libro[];
  idLibro: number;

  constructor() {
    this.libros = [];
    this.idLibro = 1;
  }

  agregar(unLibro: Libro) {
    unLibro.id = this.idLibro++;
    this.libros.push(unLibro);
    console.log('Soy el servicio agreando el libro ', unLibro);
    console.log(this.libros);
  }

  getLibros(): Libro[] {
    return this.libros;
  }

  getLibro(id: number): Libro {
    return this.libros.find(function(libro) {
      return id === libro.id;
    });
  }
}
