import { Component } from '@angular/core';
import { NavComponent } from "../../layouts/nav/nav.component";
import { HeroComponent } from "../../layouts/hero/hero.component";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  imports: [NavComponent, HeroComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
