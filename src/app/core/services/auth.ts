import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User,Login } from '../interfaces/userInterface';
@Service()
export class AuthService {
private http = inject(HttpClient);
authUrl: string = "http://localhost:3000/auth"
    

login(credentials: Login){
    return this.http.post<Login>(`${this.authUrl}/signin`,  credentials, { withCredentials: true })
}
getUser(){
   return this.http.get<User>(`${this.authUrl}/protected`, { withCredentials: true } )
}
logout(){
    return this.http.post(`${this.authUrl}/logout`, { withCredentials: true })
}
}
