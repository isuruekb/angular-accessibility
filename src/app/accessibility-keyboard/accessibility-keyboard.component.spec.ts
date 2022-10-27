import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityKeyboardComponent } from './accessibility-keyboard.component';

describe('AccessibilityKeyboardComponent', () => {
  let component: AccessibilityKeyboardComponent;
  let fixture: ComponentFixture<AccessibilityKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessibilityKeyboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibilityKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
