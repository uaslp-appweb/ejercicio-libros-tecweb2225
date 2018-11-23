import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private token: string;

  constructor(private http: HttpClient) {
    this.token = null;
  }

  usuarioLogeado(): boolean {
    return this.token !== null;
  }

  obtenerUsuarios(): Observable<any> {
    return this.http.get('https://reqres.in/api/users', {
      headers: {
        'Autorizacion': 'elsupertoken',
        'Cualquier': 'cosa'
      },
      params: {
        page: '3'
      }
    });
  }

  registrarUsuario(nombreUsuario: string, contraseña: string)
  : Observable<any> {
    return this.http.post('https://reqres.in/api/register', {
      username: nombreUsuario,
      password: contraseña
    });
  }

  logearUsuario(nombreUsuario: string, contraseña: string)
  : Observable<any> {
    return this.http.post('https://reqres.in/api/login', {
      username: nombreUsuario,
      password: contraseña
    });
  }
}
