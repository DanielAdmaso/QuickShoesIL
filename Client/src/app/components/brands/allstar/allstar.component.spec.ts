import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstarComponent } from './allstar.component';

describe('AllstarComponent', () => {
  let component: AllstarComponent;
  let fixture: ComponentFixture<AllstarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllstarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
