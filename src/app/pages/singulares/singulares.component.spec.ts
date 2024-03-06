import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingularesComponent } from './singulares.component';

describe('SingularesComponent', () => {
  let component: SingularesComponent;
  let fixture: ComponentFixture<SingularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingularesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
