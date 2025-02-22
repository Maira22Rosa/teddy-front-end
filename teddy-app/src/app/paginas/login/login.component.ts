import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicos/login-service';

@Component({
  selector: 'teddy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  constructor(private router: Router, private loginService: LoginService) {}
  login(): void {
    this.loginService.login(this.username);
    this.router.navigate(['/clientes']);
  }
}
