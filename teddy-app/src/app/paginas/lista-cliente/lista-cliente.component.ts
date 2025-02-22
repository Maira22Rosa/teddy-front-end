import { Component } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from 'src/app/servicos/cliente-service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss'],
})
export class ListaClienteComponent {
  viewForm: boolean = false;
  viewConfirmacao: boolean = false;
  cliente: Cliente | null = null;
  page = 1;
  itemsPerPage = 12;
  pageSizeOptions = [4, 8, 12];
  listaClientes: Cliente[] = [];
  constructor(private clienteService: ClienteService) {}
  ngOnInit() {
    this.buscarAllClients();
  }

  buscarAllClients() {
    this.clienteService
      .getClientes(this.page, 40)
      .subscribe((response: any) => (this.listaClientes = response.clients));
  }

  get clientes(): Cliente[] {
    return this.listaClientes;
  }

  editarCliente(cliente: Cliente) {
    this.cliente = { ...cliente };
    this.viewForm = true;
  }

  selectedCliente(cliente: Cliente) {
    this.listaClientes = this.listaClientes.filter((c) => c.id !== cliente.id);
    this.clienteService.addClienteSelecionado(cliente);
  }

  excluirCliente(cliente: Cliente) {
    this.cliente = { ...cliente };
    this.viewConfirmacao = true;
  }

  fecharForm() {
    this.viewForm = false;
    this.cliente = null;
    window.location.reload();
  }

  fecharModal() {
    this.viewConfirmacao = false;
    this.cliente = null;
    window.location.reload();
  }
}
