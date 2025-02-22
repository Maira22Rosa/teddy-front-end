import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from 'src/app/servicos/cliente-service';

@Component({
  selector: 'teddy-client-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss'],
})
export class ClienteFormComponent implements OnChanges {
  @Output() onClose = new EventEmitter<boolean>();
  @Input() cliente: Cliente | null = null;
  clienteForm!: FormGroup;
  clienteId: string | null = null;

  constructor(private clienteService: ClienteService) {
    this.clienteForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      salary: new FormControl(''),
      companyValuation: new FormControl(''),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cliente']?.currentValue) {
      this.clienteForm.patchValue(this.cliente!);
      console.log(this.clienteForm.value);
    }
  }

  criarCliente() {
    if (this.cliente) {
      const clienteId = this.clienteForm.get('id')?.value;
      this.clienteService
        .update(clienteId, this.clienteForm.value)
        .subscribe(() => window.alert('Cliente editado com sucesso!'));
    } else {
      this.clienteService
        .create(this.clienteForm.value)
        .subscribe(() => window.alert('Cliente criado com sucesso!'));
    }
    this.fechar();
  }
  fechar() {
    this.onClose.emit();
    this.clienteForm.reset();
  }
}
