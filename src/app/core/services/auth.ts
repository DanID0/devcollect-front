import { inject, Service, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User,Login } from '../interfaces/userInterface';
@Service()
export class AuthService {
private http = inject(HttpClient);
authUrl: string = "http://localhost:3000/auth"
    
currentUser = signal<User | null>(null)
login(credentials: Login){
    return this.http.post<Login>(`${this.authUrl}/signin`,  credentials, { withCredentials: true })
}
getUser() {
   return this.http.get<User>(`${this.authUrl}/protected`, { withCredentials: true })
  }
  
logout(){
    return this.http.post(`${this.authUrl}/logout`, {}, { withCredentials: true })
}
}
// .subscribe({
//   next: (user) => {
//     this.currentUser.set(user)
//   },
//   error: () => {
//     this.currentUser.set(null);
//   }
// });