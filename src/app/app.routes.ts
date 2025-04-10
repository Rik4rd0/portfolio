import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { FeaturedProjectsComponent } from './pages/featured-projects/featured-projects.component';

export const routes: Routes = [
    
    { path: 'home', component: HomeComponent },
    { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'skills', component: SkillsComponent },
        { path: 'projects', component: FeaturedProjectsComponent },
        { path: 'contact', component: ContactFormComponent },

    

];
