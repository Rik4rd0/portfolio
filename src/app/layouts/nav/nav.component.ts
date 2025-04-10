import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(private readonly router: Router) {}

  
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }

  navigateToSkills() {
    this.router.navigate(['/skills']);
  }
  
  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
  
  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
