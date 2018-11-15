import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearComponent } from './libros/crear/crear.component';
import { ConsultarComponent } from './libros/consultar/consultar.component';
import { AppRutas } from './app.rutas';
import { LlesComponent } from './libros/lles/lles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CrearComponent,
    ConsultarComponent,
    LlesComponent
  ],
  imports: [
    BrowserModule,
    AppRutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
