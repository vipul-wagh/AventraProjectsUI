import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferClientComponent } from './refer-client.component';

describe('ReferClientComponent', () => {
  let component: ReferClientComponent;
  let fixture: ComponentFixture<ReferClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
