import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExHttpModuleApi } from './ex-http-module-api';

describe('ExHttpModuleApi', () => {
  let component: ExHttpModuleApi;
  let fixture: ComponentFixture<ExHttpModuleApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExHttpModuleApi],
    }).compileComponents();

    fixture = TestBed.createComponent(ExHttpModuleApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
