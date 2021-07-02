import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaHechiceriaComponent } from './casa-hechiceria.component';

describe('CasaHechiceriaComponent', () => {
  let component: CasaHechiceriaComponent;
  let fixture: ComponentFixture<CasaHechiceriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaHechiceriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaHechiceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
