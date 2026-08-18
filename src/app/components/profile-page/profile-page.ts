import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-profile-page',
  imports: [RouterLink],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {

  auth = inject(AuthService);
  
}
