import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccinfoComponent } from './accinfo.component';

describe('AccinfoComponent', () => {
  let component: AccinfoComponent;
  let fixture: ComponentFixture<AccinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
