import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-focus-effect',
  imports: [],
  templateUrl: './focus-effect.component.html',
  styleUrl: './focus-effect.component.scss'
})
export class FocusEffectComponent {

  mouseX = 0;
  mouseY = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    this.updateMask();
  }

  updateMask(): void {
    const mask = `radial-gradient(circle 300px at ${this.mouseX}px ${this.mouseY}px, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.97) 100%)`;
    this.renderer.setStyle(document.body, 'maskImage', mask);
    this.renderer.setStyle(document.body, 'webkitMaskImage', mask);
  }
}
