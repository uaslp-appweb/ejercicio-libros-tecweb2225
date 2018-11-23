import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearComponent } from './libros/crear/crear.component';
import { ConsultarComponent } from './libros/consultar/consultar.component';
import { LlesComponent } from './libros/lles/lles.component';
import { DetallesComponent } from './libros/detalles/detalles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const rutas: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'crearLibro', component: CrearComponent},
  {path: 'libros/consultar', component: ConsultarComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'libro/:id', component: DetallesComponent},
  {path: '**', redirectTo: '/login'}
];

export let AppRutas = RouterModule.forRoot(rutas);
