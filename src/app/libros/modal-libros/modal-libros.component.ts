import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-libros',
  templateUrl: './modal-libros.component.html',
  styleUrls: ['./modal-libros.component.css']
})
export class ModalLibrosComponent implements OnInit {

  constructor(public modalActivo: NgbActiveModal) { }

  ngOnInit() {
  }

  enviar(form: FormGroup) {
    this.modalActivo.dismiss();
    console.log(form.value.nombre);
  }
}
