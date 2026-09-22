import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExTextInterpolation } from './ex-text-interpolation';

describe('ExTextInterpolation', () => {
  let component: ExTextInterpolation;
  let fixture: ComponentFixture<ExTextInterpolation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExTextInterpolation],
    }).compileComponents();

    fixture = TestBed.createComponent(ExTextInterpolation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
