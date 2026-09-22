import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDataComponent } from './user-data-component';

describe('UserDataComponent', () => {
  let component: UserDataComponent;
  let fixture: ComponentFixture<UserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDataComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
