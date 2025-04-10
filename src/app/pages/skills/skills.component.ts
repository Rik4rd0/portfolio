import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = {
    languages: ['Java', 'PHP', 'Go'],
    frameworks: ['Spring Boot', 'Laravel', 'Angular', 'PrimeFaces'],
    databases: ['MySQL', 'PostgreSQL'],
    tools: ['Microsoft Office', 'Excel'],
  };
}
