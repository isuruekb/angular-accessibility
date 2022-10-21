import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomInOutComponent } from './zoom-in-out.component';

describe('ZoomInOutComponent', () => {
  let component: ZoomInOutComponent;
  let fixture: ComponentFixture<ZoomInOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomInOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoomInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
