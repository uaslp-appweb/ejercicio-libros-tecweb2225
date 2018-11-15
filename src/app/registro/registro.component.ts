import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  ruteador: Router;

  constructor(unRuteador: Router) {
    this.ruteador = unRuteador;
  }

  ngOnInit() {
  }

  enviar(): void {
    // si la información del registro es correcta
    // entonces navegar al login
    this.ruteador.navigate(['login']);
  }

}
