import { Component } from '@angular/core';
import { HeroComponent } from "../../layouts/hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { FeaturedProjectsComponent } from "../featured-projects/featured-projects.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { NavComponent } from "../../layouts/nav/nav.component";


@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, SkillsComponent, FeaturedProjectsComponent, ContactFormComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



}
