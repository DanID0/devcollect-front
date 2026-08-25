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
  private router = inject(Router);
  auth = inject(AuthService);
  user = inject(UserService);
  userModel = signal<ProfileUpdatePayload>({
    username: '',
    email: '',
    profileDescription: this.auth.currentUser()?.profileDescription ?? '',
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
      ...(values.profileDescription ? { profileDescription: values.profileDescription } : {}),
    };
    this.user.patchUser(currentUser.id, creds).subscribe({
      next: (updatedUser) => {
        this.auth.setCurrentUser(updatedUser);
        if (
          creds.username !== currentUser!.username ||
          creds.email !== currentUser!.email ||
          creds.profileDescription !== currentUser!.profileDescription
        ) {
          this.router.navigateByUrl('/profile');
        } else {
          return;
        }
      },
      error: (err) => {
        console.error('UPDATE ERROR:', err);
      },
    });
  }
  uploadFile(event: any) {
    const formData = new FormData();

    formData.append('image', event.target.files[0]);

    this.user.uploadAvatar(formData).subscribe({
      next: (result: any) => {},
      error: (error: any) => {},
    });
  }
}
