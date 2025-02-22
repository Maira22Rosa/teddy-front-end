import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'teddy-botao-primary',
  templateUrl: './botao-primary.component.html',
  styleUrls: ['./botao-primary.component.scss'],
})
export class BotaoPrimaryComponent {
  @Output() onClick = new EventEmitter();
  @Input() label: string = '';
}
