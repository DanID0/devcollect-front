import { Component, inject, signal } from '@angular/core';
import { Registration } from '../../core/interfaces/userInterface';
import { form, FormField } from '@angular/forms/signals';
import { UserService } from '../../core/services/user-service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-page',
  imports: [FormField, RouterLink],
  templateUrl: './signup-page.html',
  styleUrl: './signup-page.css',
})
export class SignupPage {
  router = inject(Router)
  userService = inject(UserService);
  userModel = signal<Registration>({
      username: '',
      email: '',
      password: '',
    });
    signupForm = form(this.userModel);

    onSubmit(){
     const  credentials = this.signupForm().value()
      this.userService.signup(credentials).subscribe({next: (response ) => {
        this.router.navigate(['/guides'])
    
      },
      error: (err) => {
        alert("SIgnup error")
      }
    
    })
    }


    
}
