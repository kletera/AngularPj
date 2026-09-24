import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExFormulaire } from './ex-formulaire';

describe('ExFormulaire', () => {
  let component: ExFormulaire;
  let fixture: ComponentFixture<ExFormulaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExFormulaire],
    }).compileComponents();

    fixture = TestBed.createComponent(ExFormulaire);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
