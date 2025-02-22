import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from 'src/app/servicos/cliente-service';

@Component({
  selector: 'teddy-clients-selects',
  templateUrl: './lista-clientes-selecionados.component.html',
  styleUrls: ['./lista-clientes-selecionados.component.scss'],
})
export class ListaClientesSelecionadosComponent implements OnInit {
  clientesSelecionados: Cliente[] = [];
  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clientesSelecionados = this.clienteService.listaClientesSelecionados;
  }

  resetLista() {
    this.clienteService.resetListaClientesSelecionados();
    window.location.reload();
  }

  removerClienteSelected(cliente: Cliente) {
    this.clienteService.removeClienteSelecionado(cliente);
    this.clientesSelecionados = this.clienteService.listaClientesSelecionados;
  }
}
