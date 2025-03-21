import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersViewModalComponent } from './orders-view-modal.component';

describe('OrdersViewModalComponent', () => {
  let component: OrdersViewModalComponent;
  let fixture: ComponentFixture<OrdersViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersViewModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
