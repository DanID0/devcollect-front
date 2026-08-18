import { inject, Service, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileUpdatePayload, Registration, User } from '../interfaces/userInterface';
@Service()
export class UserService {
private http = inject(HttpClient)
userUrl: string ="http://localhost:3000/user"

emailTaken = signal(false);
usernameTaken = signal(false);

signup(userRegistration: Registration ) {
    return this.http.post<Registration>(this.userUrl, userRegistration)
} 
patchUser(id: User["id"], settings: Partial<ProfileUpdatePayload>) {
    const url = `${this.userUrl}/${id}`; 
     return this.http.patch<User>(url, settings)
    }
}
