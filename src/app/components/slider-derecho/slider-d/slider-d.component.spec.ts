import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDComponent } from './slider-d.component';

describe('SliderDComponent', () => {
  let component: SliderDComponent;
  let fixture: ComponentFixture<SliderDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
