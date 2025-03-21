export interface CustomerOrderPrediction {
    customerId : number; 
    customerName: string;
    lastOrderDate: Date;
    nextPredictedOrder: Date;
  }