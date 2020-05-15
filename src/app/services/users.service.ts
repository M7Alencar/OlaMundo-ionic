import { Injectable } from '@angular/core';

// Precisamos do rxjs/Observable (requests assíncronos)
import { Observable } from 'rxjs';

// Importa módulo HTTP do Angular
import { HttpClient } from '@angular/common/http';

// Importa modelagem dos dados do usuário -> ResponseUser
import { ResponseUsers, ResponseUser, ResponseDelUser, ResponsePostUser, ResponsePutUser } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // URL da API
  private apiurl = 'http://localhost:8888/api';

  // Inicia objeto HTTP Client
  constructor(private http: HttpClient) { }

  // Método para obter todos os usuários (observe o get())
  getUsers(): Observable<ResponseUsers> {

    // Faz o GET na API
    return this.http.get<ResponseUsers>(this.apiurl);
  }

  // Método para listar um usuário específico
  getUser(id: string): Observable<ResponseUser> {

    // Inclui o Id na URL
    const url = `${this.apiurl}?id=${id}`;

    // Faz o GET na API
    return this.http.get<ResponseUser>(url);
  }

  // Método para apagar um usuário específico
  deleteUser(id: string): Observable<ResponseDelUser> {

    // Inclui o Id na URL
    const url = `${this.apiurl}?id=${id}`;

    // Faz o DELETE na API
    return this.http.delete<ResponseDelUser>(url);
  }

  // Método para salvar um novo usuario
  postUser(data: any): Observable<ResponsePostUser> {

    // Faz o POST na API
    return this.http.post<ResponsePostUser>(this.apiurl, data);
  }

  // Método para atualizar um novo usuario
  updateUser(data: any): Observable<ResponsePutUser> {

    // Faz o PUT na API
    return this.http.put<ResponsePutUser>(this.apiurl, data);
  }
}
