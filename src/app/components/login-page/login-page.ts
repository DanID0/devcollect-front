import { Component, inject } from '@angular/core';
import { signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { AuthService } from '../../core/services/auth';
import { Login } from '../../core/interfaces/userInterface';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  imports: [FormField, RouterLink],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  auth = inject(AuthService);
  private router = inject(Router);
  userModel = signal<Login>({
    identifier: '',
    password: '',
  });
  loginForm = form(this.userModel);

  onSubmit() {
    const credentials = this.loginForm().value();
    this.auth.login(credentials).subscribe({
      next: (response) => {
        this.router.navigate(['/guides']);
      },
      error: (err) => {
        alert('Login error');
      },
    });
  }
}
