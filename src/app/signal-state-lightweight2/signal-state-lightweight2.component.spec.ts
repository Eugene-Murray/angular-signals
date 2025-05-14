import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalStateLightweight2Component } from './signal-state-lightweight2.component';

describe('SignalStateLightweight2Component', () => {
  let component: SignalStateLightweight2Component;
  let fixture: ComponentFixture<SignalStateLightweight2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalStateLightweight2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalStateLightweight2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
