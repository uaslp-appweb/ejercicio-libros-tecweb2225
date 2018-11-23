import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  ruteador: Router;

  constructor(unRuteador: Router, private servicioUsuarios: UsuariosService) {
    this.ruteador = unRuteador;
  }

  ngOnInit() {
  }

  registrar(formulario: FormGroup): void {
    console.log(formulario.value);
    if (formulario.value.contraseña === formulario.value.contraseña2) {
      this.servicioUsuarios.registrarUsuario(formulario.value.nomUsuario, formulario.value.contraseña).subscribe(respuesta => {
        console.log('Resultado: ', respuesta);
      // si la información del registro es correcta
      // entonces navegar al login
      this.ruteador.navigate(['login']);
  }, error => {
        console.log('Error ', error);
      });
    }
  }

}
