import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExercicesHome } from './exercices-home';

describe('ExercicesHome', () => {
  let component: ExercicesHome;
  let fixture: ComponentFixture<ExercicesHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicesHome],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicesHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
