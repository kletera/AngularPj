import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExAttributeBinding } from './ex-attribute-binding';

describe('ExAttributeBinding', () => {
  let component: ExAttributeBinding;
  let fixture: ComponentFixture<ExAttributeBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExAttributeBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(ExAttributeBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
