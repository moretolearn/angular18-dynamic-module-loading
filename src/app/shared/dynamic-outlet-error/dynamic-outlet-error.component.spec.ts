import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicOutletErrorComponent } from './dynamic-outlet-error.component';

describe('DynamicOutletErrorComponent', () => {
  let component: DynamicOutletErrorComponent;
  let fixture: ComponentFixture<DynamicOutletErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicOutletErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicOutletErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
