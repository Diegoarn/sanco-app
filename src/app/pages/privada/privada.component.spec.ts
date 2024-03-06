import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadaComponent } from './privada.component';

describe('PrivadaComponent', () => {
  let component: PrivadaComponent;
  let fixture: ComponentFixture<PrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
