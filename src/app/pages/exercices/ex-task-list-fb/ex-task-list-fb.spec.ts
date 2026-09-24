import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExTaskListFb } from './ex-task-list-fb';

describe('ExTaskListFb', () => {
  let component: ExTaskListFb;
  let fixture: ComponentFixture<ExTaskListFb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExTaskListFb],
    }).compileComponents();

    fixture = TestBed.createComponent(ExTaskListFb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
