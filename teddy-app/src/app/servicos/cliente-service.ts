import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  readonly URI: string = '/api/users';
  listaClientesSelecionados: Cliente[] = [];
  constructor(private http: HttpClient) {}

  getClientes(page: number, limit: number): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.URI}?page=${page}&limit=${limit}`);
  }

  create(cliente: Cliente): Observable<any> {
    return this.http.post<Cliente>(`${this.URI}`, cliente);
  }

  getById(clienteId: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.URI}/${clienteId}`);
  }

  delete(clienteId: any): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.URI}/${clienteId}`);
  }

  update(clienteId: any, cliente: Cliente): Observable<Cliente> {
    return this.http.patch<Cliente>(`${this.URI}/${clienteId}`, cliente);
  }

  addClienteSelecionado(cliente: Cliente) {
    this.listaClientesSelecionados.push(cliente);
  }

  removeClienteSelecionado(cliente: Cliente) {
    this.listaClientesSelecionados = this.listaClientesSelecionados.filter(
      (c) => c.id !== cliente.id
    );
  }

  resetListaClientesSelecionados() {
    this.listaClientesSelecionados = [];
  }
}
