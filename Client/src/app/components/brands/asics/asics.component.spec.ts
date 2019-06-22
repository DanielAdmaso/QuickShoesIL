import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsicsComponent } from './asics.component';

describe('AsicsComponent', () => {
  let component: AsicsComponent;
  let fixture: ComponentFixture<AsicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
