import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalStateLightweightComponent } from './signal-state-lightweight.component';

describe('SignalStateLightweightComponent', () => {
  let component: SignalStateLightweightComponent;
  let fixture: ComponentFixture<SignalStateLightweightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalStateLightweightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalStateLightweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
