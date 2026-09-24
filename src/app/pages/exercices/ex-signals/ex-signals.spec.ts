import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExSignals } from './ex-signals';

describe('ExSignals', () => {
  let component: ExSignals;
  let fixture: ComponentFixture<ExSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(ExSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
