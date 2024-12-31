import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token; // Return true if token exists, false otherwise
  }

  static setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken'); 
  }

  getUserInfo(): any {
    const token = this.getToken();
    if (token) {
      try {
        return JSON.parse(atob(token.split('.')[1])); 
      } catch (e) {
        console.error('Error decoding token:', e);
        return null;
      }
    }
    return null;
  }

  logout(): void {
    localStorage.removeItem('authToken'); 
    this.router.navigate(['login']); 
  }
}
