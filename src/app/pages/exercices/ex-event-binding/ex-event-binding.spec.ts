import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExEventBinding } from './ex-event-binding';

describe('ExEventBinding', () => {
  let component: ExEventBinding;
  let fixture: ComponentFixture<ExEventBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExEventBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(ExEventBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
