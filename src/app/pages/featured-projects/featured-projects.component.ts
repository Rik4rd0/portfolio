import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-projects',
  imports: [CommonModule],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {
  projects = [
    {
      title: 'AppReciScan',
      description: 'Aplicación móvil en Flutter que identifica residuos usando la cámara del dispositivo y sugiere el contenedor adecuado para reciclaje.',
      technologies: ['Flutter', 'YOLO', 'Python', 'Dart', 'C++'],
      link: 'https://github.com/Rik4rd0/AppReciScan'
    },
    {
      title: 'Auth-Service',
      description: 'Microservicio de autenticación y autorización con Spring Security, JWT y OAuth2 para proteger endpoints y gestionar acceso de usuarios.',
      technologies: ['Java', 'Spring Boot', 'JWT', 'OAuth2'],
      link: 'https://github.com/Rik4rd0/auth-service'
    },
    {
      title: 'Tesis: Diagnóstico Bovino con CNNs',
      description: 'Modelo de diagnóstico basado en redes neuronales convolucionales para detectar enfermedades bovinas en pastoreo rotacional.',
      technologies: ['Python', 'TensorFlow', 'CNNs'],
      link: '#'
    }
  ];
}
