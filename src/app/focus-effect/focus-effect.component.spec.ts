import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusEffectComponent } from './focus-effect.component';

describe('FocusEffectComponent', () => {
  let component: FocusEffectComponent;
  let fixture: ComponentFixture<FocusEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
