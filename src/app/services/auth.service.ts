import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'user_data';
  private apiUrl = 'https://api.jobify.com'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    // For development/testing, you can use this mock implementation
    // In production, replace with actual API call
    if (email === 'test@example.com' && password === 'password123') {
      const mockResponse = {
        token: 'mock-jwt-token',
        user: {
          id: '1',
          email: email,
          name: 'Test User'
        }
      };
      this.setSession(mockResponse);
      return of(mockResponse);
    }
    
    // Uncomment for actual API implementation
    // return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password })
    //   .pipe(
    //     tap(response => this.setSession(response)),
    //     catchError(error => {
    //       console.error('Login error:', error);
    //       return throwError(() => new Error('Invalid credentials'));
    //     })
    //   );
    
    return throwError(() => new Error('Invalid credentials'));
  }

  loginWithGoogle(): Observable<any> {
    // This would typically redirect to Google OAuth
    // For now, we'll just return a mock successful response
    const mockResponse = {
      token: 'mock-google-jwt-token',
      user: {
        id: '2',
        email: 'google-user@example.com',
        name: 'Google User'
      }
    };
    this.setSession(mockResponse);
    return of(mockResponse);
    
    // Actual implementation would use your backend API
    // return this.http.get<any>(`${this.apiUrl}/auth/google`);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUserData(): any {
    const userData = localStorage.getItem(this.USER_KEY);
    return userData ? JSON.parse(userData) : null;
  }

  private setSession(authResult: any): void {
    localStorage.setItem(this.TOKEN_KEY, authResult.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(authResult.user));
  }
}