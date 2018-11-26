import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ruteador: Router;

  constructor(unRuteador: Router, private servicioUsuarios: UsuariosService) {
    this.ruteador = unRuteador;
  }

  ngOnInit() {
  }

  ingresar(form: FormGroup): void {
    this.servicioUsuarios.logearUsuario(form.value.nomUsuario, form.value.contraseña).subscribe(
      resultado => {
        // si el nombre de usuario y contraseña es correcto
        // entonces navegar a consultar libros
        console.log(resultado);

        this.servicioUsuarios.token = resultado.token;
        console.log('El token es ', this.servicioUsuarios.token);

        this.ruteador.navigate(['libros', 'consultar']);
      },
      error => {
        console.log('Error al iniciar sesion ', error);
      }
    );
  }

}
