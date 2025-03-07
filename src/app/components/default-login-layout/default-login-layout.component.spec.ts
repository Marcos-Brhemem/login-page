import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLoginLayoutComponent } from './default-login-layout.component';

describe('DefaultLoginComponent', () => {
  let component: DefaultLoginLayoutComponent;
  let fixture: ComponentFixture<DefaultLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLoginLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
