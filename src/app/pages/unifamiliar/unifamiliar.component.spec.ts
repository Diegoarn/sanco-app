import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifamiliarComponent } from './unifamiliar.component';

describe('UnifamiliarComponent', () => {
  let component: UnifamiliarComponent;
  let fixture: ComponentFixture<UnifamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnifamiliarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnifamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
