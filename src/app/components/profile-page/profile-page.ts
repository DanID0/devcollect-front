import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { User } from '../../core/interfaces/userInterface';
import { HeaderBase } from '../../shared/header-base/header-base';
@Component({
  selector: 'app-profile-page',
  imports: [HeaderBase],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {

  auth = inject(AuthService);
  
}
