import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderIComponent } from './slider-i.component';

describe('SliderIComponent', () => {
  let component: SliderIComponent;
  let fixture: ComponentFixture<SliderIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
