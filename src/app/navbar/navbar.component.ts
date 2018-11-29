import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLibrosComponent } from '../libros/modal-libros/modal-libros.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean;

  constructor(public servicioUsuarios: UsuariosService,
    private servicioModal: NgbModal) { }

  ngOnInit() {
  }

  abrirModal() {
    this.servicioModal.open(ModalLibrosComponent);
  }
}
