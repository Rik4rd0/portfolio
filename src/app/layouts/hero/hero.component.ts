import { Component } from '@angular/core';
import { ModelViewerComponent } from '../../shared/model-viewer/model-viewer.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  imports: [ModelViewerComponent]
  
})
export class HeroComponent {

}
