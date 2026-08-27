import { inject, Service, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Login } from '../interfaces/userInterface';
import { tap } from 'rxjs';
@Service()
export class AuthService {
  private http = inject(HttpClient);
  authUrl: string = 'http://localhost:3000/auth';

  currentUser = signal<User | null | undefined>(undefined);
  authChecked = signal(false);

  setCurrentUser(user: User | null) {
    this.currentUser.set(user);
  }

  checkAuth() {
    return this.getUser().pipe(
      tap({
        next: (user) => this.currentUser.set(user),
        error: () => this.currentUser.set(null),
        finalize: () => this.authChecked.set(true),
      }),
    );
  }
  getUser() {
    return this.http.get<User>(`${this.authUrl}/protected`, { withCredentials: true });
  }
  login(credentials: Login) {
    return this.http.post<Login>(`${this.authUrl}/signin`, credentials, { withCredentials: true });
  }

  logout() {
    return this.http.post(`${this.authUrl}/logout`, {}, { withCredentials: true });
  }
}
// .subscribe({
//   next: (user) => {
//     this.currentUser.set(user)
//   },
//   error: () => {
//     this.currentUser.set(null);
//   }
// })
