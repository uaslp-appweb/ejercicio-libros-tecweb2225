import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

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
}
