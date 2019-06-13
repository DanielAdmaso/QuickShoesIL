import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShoesComponent } from './single-shoes.component';

describe('SingleShoesComponent', () => {
  let component: SingleShoesComponent;
  let fixture: ComponentFixture<SingleShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
