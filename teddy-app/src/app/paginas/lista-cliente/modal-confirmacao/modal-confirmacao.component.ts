import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from 'src/app/servicos/cliente-service';

@Component({
  selector: 'teddy-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.scss'],
})
export class ModalConfirmacaoComponent {
  @Output() onClose = new EventEmitter<boolean>();
  @Input() cliente: Cliente | null = null;
  constructor(private clienteService: ClienteService) {}
  excluirCliente() {
    this.clienteService
      .delete(this.cliente?.id)
      .subscribe(() => window.alert('Cliente excluído com sucesso!'));

    this.fechar();
  }
  fechar() {
    this.onClose.emit();
  }
}
