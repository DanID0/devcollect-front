import { Component, inject, signal } from '@angular/core';
import { Registration } from '../../core/interfaces/userInterface';
import { form, FormField } from '@angular/forms/signals';
import { UserService } from '../../core/services/user-service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';
@Component({
  selector: 'app-signup-page',
  imports: [FormField, RouterLink],
  templateUrl: './signup-page.html',
  styleUrl: './signup-page.css',
})
export class SignupPage {
  router = inject(Router);
  userService = inject(UserService);
  authService = inject(AuthService);
  userModel = signal<Registration>({
    username: '',
    email: '',
    password: '',
  });
  signupForm = form(this.userModel);

  onSubmit() {
    const credentials = this.signupForm().value();
    this.userService.signup(credentials).subscribe({
      next: (response) => {
        this.authService
          .login({
            identifier: credentials.username,
            password: credentials.password,
          })
          .subscribe({
            next: () => {
              this.router.navigate(['/guides']);
            },
            error: (err) => {
              alert('Error with loging in, try again via login');
            },
          });
      },
      error: (err) => {
        alert('Signup error');
      },
    });
  }
}
