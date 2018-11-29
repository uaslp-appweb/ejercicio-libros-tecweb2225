import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearComponent } from './libros/crear/crear.component';
import { ConsultarComponent } from './libros/consultar/consultar.component';
import { AppRutas } from './app.rutas';
import { LlesComponent } from './libros/lles/lles.component';
import { ServicioLibrosService } from './servicios/servicio-libros.service';
import { FormsModule } from '@angular/forms';
import { DetallesComponent } from './libros/detalles/detalles.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalLibrosComponent } from './libros/modal-libros/modal-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CrearComponent,
    ConsultarComponent,
    LlesComponent,
    DetallesComponent,
    NavbarComponent,
    UsuariosComponent,
    ModalLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRutas,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ ServicioLibrosService],
  bootstrap: [AppComponent],
  entryComponents: [ModalLibrosComponent]
})
export class AppModule { }
