import { Component, OnInit } from '@angular/core';
import { ServicioLibrosService } from 'src/app/servicios/servicio-libros.service';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/modelos/libro';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  rutaActiva: ActivatedRoute;
  servicioLibros: ServicioLibrosService;
  libro: Libro;

  constructor(laRutaActiva: ActivatedRoute,
    unServicioLibros: ServicioLibrosService) {
    this.rutaActiva = laRutaActiva;
    this.servicioLibros = unServicioLibros;
    this.libro = new Libro();
   }

  ngOnInit() {
    console.log('Consultando detalles del libro ', this.rutaActiva.snapshot.params.id);
    console.log('Tipo del parámetro ', typeof(this.rutaActiva.snapshot.params.id));
    const idLibro = Number(this.rutaActiva.snapshot.params.id);
    this.libro = this.servicioLibros.getLibro(idLibro);
    console.log(this.libro);
  }
}
