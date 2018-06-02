import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingDerectiveComponent } from './data-binding-derective.component';

describe('DataBindingDerectiveComponent', () => {
  let component: DataBindingDerectiveComponent;
  let fixture: ComponentFixture<DataBindingDerectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingDerectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingDerectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
