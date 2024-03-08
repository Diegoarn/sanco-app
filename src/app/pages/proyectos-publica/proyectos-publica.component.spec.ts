import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosPublicaComponent } from './proyectos-publica.component';

describe('ProyectosPublicaComponent', () => {
  let component: ProyectosPublicaComponent;
  let fixture: ComponentFixture<ProyectosPublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosPublicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProyectosPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
