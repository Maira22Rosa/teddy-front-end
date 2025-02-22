import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedInSubject: BehaviorSubject<boolean>;
  private usernameSubject: BehaviorSubject<string | null>;

  constructor() {
    //  inicializando o serviço
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUsername = localStorage.getItem('username');

    this.isLoggedInSubject = new BehaviorSubject<boolean>(storedIsLoggedIn);
    this.usernameSubject = new BehaviorSubject<string | null>(storedUsername);
  }

  isLoggedInObservable(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  login(username: string): void {
    this.isLoggedInSubject.next(true);
    this.usernameSubject.next(username);

    // Salvando os dados no localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
    this.usernameSubject.next(null);

    // Remove os dados do localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  }

  usernameObservable(): Observable<string | null> {
    return this.usernameSubject.asObservable();
  }
}
