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
    frameworks: [
      { name: 'Spring Boot', badge: 'https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white' },
      { name: 'Laravel', badge: 'https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white' },
      { name: 'Angular', badge: 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white' },
      { name: 'PrimeFaces', badge: 'https://img.shields.io/badge/PrimeFaces-39BDF8?style=for-the-badge&logo=java&logoColor=white' }
    ],
    databases: [
      { name: 'MySQL', badge: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white' },
      { name: 'PostgreSQL', badge: 'https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white' }
    ],
    languages: [
      { name: 'Java', badge: 'https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white' },
      { name: 'PHP', badge: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white' },
      { name: 'Go', badge: 'https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white' }
    ],
    tools: [
      { name: 'Microsoft Office', badge: 'https://img.shields.io/badge/Microsoft%20Office-D83B01?style=for-the-badge&logo=microsoftoffice&logoColor=white' },
      { name: 'Excel', badge: 'https://img.shields.io/badge/Excel-217346?style=for-the-badge&logo=microsoftexcel&logoColor=white' }
    ],
  };
}
