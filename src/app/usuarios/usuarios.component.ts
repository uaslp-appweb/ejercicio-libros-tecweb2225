import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any;

  constructor(private servicioUsuarios: UsuariosService) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.servicioUsuarios.obtenerUsuarios().subscribe(
      resultado => {
        console.log('Este es el resultado: ', resultado);
        this.usuarios = resultado.data;
      },
      error => {
        console.log('Hubo un error ', error);
      }
    );
  }

}
