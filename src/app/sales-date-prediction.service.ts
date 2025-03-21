import { Injectable } from '@angular/core';
    import { HttpClient, HttpParams } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { CustomerOrderPrediction } from './models/customer-order-prediction';
    import { Order } from './models/order';

    @Injectable({
      providedIn: 'root'
    })
    export class SalesDatePredictionService {
      private apiUrl = 'https://localhost:7170/CustomerOrderPredictions';

      constructor(private http: HttpClient) { }

      getPredictions(search?: string): Observable<CustomerOrderPrediction[]> {
        let params = new HttpParams();
        if (search) {
          params = params.set('search', search);
        }
        return this.http.get<CustomerOrderPrediction[]>(`${this.apiUrl}`, { params });
      }

      getOrdersByCustomerId(customerId: number): Observable<Order[]> {
        return this.http.get<Order[]>(`${this.apiUrl}/orders/${customerId}`);
      }
    }