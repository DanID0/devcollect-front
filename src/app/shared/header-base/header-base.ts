import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { User } from '../../core/interfaces/userInterface';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-header-base',
  imports: [RouterLink],
  templateUrl: './header-base.html',
  styleUrl: './header-base.css',
})
export class HeaderBase {
  auth = inject (AuthService);
  private router = inject (Router)
  menuOpen = signal(false);
ngOnInit(){
  
  this.auth.getUser().subscribe({
next: (user) => {
this.auth.currentUser.set(user)
},
error: () => {
this.auth.currentUser.set(null);
}
});
  
}

error :boolean = false;
logout() {

  this.auth.logout().subscribe({
    next: () => {
    this.auth.currentUser.set(null);
    },
    error: (err) => {
      console.error('LOGOUT ERROR', err);
    }
  });
}
}


