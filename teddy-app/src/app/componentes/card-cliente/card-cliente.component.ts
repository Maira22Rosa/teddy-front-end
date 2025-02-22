import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';

@Component({
  selector: 'teddy-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.scss'],
})
export class CardClienteComponent {
  @Input() cliente!: Cliente;
  @Input() selected: boolean = false;
  @Output() onEdit = new EventEmitter<boolean>();
  @Output() onDelete = new EventEmitter<boolean>();
  @Output() onAdd = new EventEmitter<boolean>();
  @Output() onRemoveClientSelected = new EventEmitter<boolean>();
}
