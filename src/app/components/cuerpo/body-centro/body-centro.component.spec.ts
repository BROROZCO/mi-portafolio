import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCentroComponent } from './body-centro.component';

describe('BodyCentroComponent', () => {
  let component: BodyCentroComponent;
  let fixture: ComponentFixture<BodyCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
