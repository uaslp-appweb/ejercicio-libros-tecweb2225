import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lles',
  templateUrl: './lles.component.html',
  styleUrls: ['./lles.component.css']
})
export class LlesComponent implements OnInit {
  rutaActiva: ActivatedRoute;

  constructor(laRutaActiva: ActivatedRoute) {
    this.rutaActiva = laRutaActiva;
  }

  ngOnInit() {
    console.log(this.rutaActiva.snapshot.params);
  }

}
