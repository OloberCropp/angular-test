import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBtnComponent } from './tab-btn.component';

describe('TabBtnComponent', () => {
  let component: TabBtnComponent;
  let fixture: ComponentFixture<TabBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
