import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduceTransparencyComponent } from './reduce-transparency.component';

describe('ReduceTransparencyComponent', () => {
  let component: ReduceTransparencyComponent;
  let fixture: ComponentFixture<ReduceTransparencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduceTransparencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReduceTransparencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
