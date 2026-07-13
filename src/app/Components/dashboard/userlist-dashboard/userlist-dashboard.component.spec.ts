import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistDashboardComponent } from './userlist-dashboard.component';

describe('UserlistDashboardComponent', () => {
  let component: UserlistDashboardComponent;
  let fixture: ComponentFixture<UserlistDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
