import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TpHome } from './tp-home';

describe('TpHome', () => {
  let component: TpHome;
  let fixture: ComponentFixture<TpHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpHome],
    }).compileComponents();

    fixture = TestBed.createComponent(TpHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
