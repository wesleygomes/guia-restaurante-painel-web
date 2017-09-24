import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDescribeComponent } from './restaurant-describe.component';

describe('RestaurantDescribeComponent', () => {
  let component: RestaurantDescribeComponent;
  let fixture: ComponentFixture<RestaurantDescribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDescribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDescribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
