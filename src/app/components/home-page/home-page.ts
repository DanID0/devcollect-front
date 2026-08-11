import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderBase } from '../../shared/header-base/header-base';
@Component({
  selector: 'app-home-page',
  imports: [HeaderBase],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
