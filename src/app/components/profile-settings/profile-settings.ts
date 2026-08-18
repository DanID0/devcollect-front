import { Component, inject, signal } from '@angular/core';
import { ProfileUpdatePayload, User } from '../../core/interfaces/userInterface';
import { form, FormField } from '@angular/forms/signals';
import { AuthService } from '../../core/services/auth';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user-service';
@Component({
  selector: 'app-profile-settings',
  imports: [FormField, RouterLink],
  templateUrl: './profile-settings.html',
  styleUrl: './profile-settings.css',
})
export class ProfileSettings {
  private router = inject (Router)
  auth =  inject(AuthService);
  user = inject (UserService)
  userModel = signal<ProfileUpdatePayload>({
    username: '',
    email: '',
  });
  settings = form(this.userModel);
  onSubmit() {
    const currentUser = this.auth.currentUser();
  
    if (!currentUser) {
      return;
    }
  
    const values = this.settings().value();
  
    const creds: Partial<ProfileUpdatePayload> = {
      ...(values.username ? { username: values.username } : {}),
      ...(values.email ? { email: values.email } : {}),
    };
    this.user.patchUser(currentUser.id, creds).subscribe({
      next: (updatedUser) => {
        this.auth.setCurrentUser(updatedUser);
        if (creds.username !== currentUser!.username || creds.email !== currentUser!.email) {
          this.router.navigateByUrl('/profile');
        }
        
        else {
          return
        }
      },
      error: (err) => {
        console.error('UPDATE ERROR:', err);
      },
    });
  }
}
