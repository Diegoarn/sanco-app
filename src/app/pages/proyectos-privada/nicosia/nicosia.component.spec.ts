import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicosiaComponent } from './nicosia.component';

describe('NicosiaComponent', () => {
  let component: NicosiaComponent;
  let fixture: ComponentFixture<NicosiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NicosiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NicosiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
