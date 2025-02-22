import { Component, OnInit } from '@angular/core';
import { LoginService } from './servicos/login-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'teddy-app';
  isLoggedIn: boolean = false;
  nameUsuario: string = '';
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.isLoggedInObservable().subscribe((isLogged) => {
      this.isLoggedIn = isLogged;
    });
  }
}
