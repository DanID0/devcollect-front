import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DefaultAvatar } from '../default-avatar/default-avatar';
@Component({
  selector: 'app-header-base',
  imports: [RouterLink, DefaultAvatar, RouterOutlet],
  templateUrl: './header-base.html',
  styleUrl: './header-base.css',
})
export class HeaderBase {
  auth = inject (AuthService);
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


