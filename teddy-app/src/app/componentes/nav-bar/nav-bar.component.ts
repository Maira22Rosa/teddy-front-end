import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'teddy-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Output() onFecharNav = new EventEmitter<boolean>();
}
