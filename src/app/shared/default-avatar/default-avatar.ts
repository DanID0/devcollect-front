import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-default-avatar',
  imports: [],
  templateUrl: './default-avatar.html',
  styleUrl: './default-avatar.css',
})
export class DefaultAvatar {
   router = inject(Router);
   auth = inject (AuthService);
   
}
