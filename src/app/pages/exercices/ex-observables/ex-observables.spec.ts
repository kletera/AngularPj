import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExObservables } from './ex-observables';

describe('ExObservables', () => {
  let component: ExObservables;
  let fixture: ComponentFixture<ExObservables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExObservables],
    }).compileComponents();

    fixture = TestBed.createComponent(ExObservables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
