// src/app/models/order-create.model.ts
export interface OrderCreateDto {
    empId: number;
    shipperId: number;
    shipName: string;
    shipAddress: string;
    shipCity: string;
    orderDate: Date;
    requiredDate: Date;
    shippedDate: Date;
    freight: number;
    shipCountry: string;
    custId: number;
    orderDetail: OrderDetailCreateDto;
  }
  
  export interface OrderDetailCreateDto {
    productId: number;
    unitPrice: number;
    qty: number;
    discount: number;
  }