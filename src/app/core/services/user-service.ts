import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../interfaces/userInterface';
@Service()
export class UserService {
private http = inject(HttpClient)
userUrl: string ="http://localhost:3000/user"


signup(userRegistration: Registration ) {
    return this.http.post<Registration>(this.userUrl, userRegistration)
} 

}
