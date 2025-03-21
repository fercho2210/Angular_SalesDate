// src/app/services/order-create.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderCreateDto } from '../models/order-create.model';

@Injectable({
  providedIn: 'root'
})
export class OrderCreateService {
  private apiUrl = 'https://localhost:7170/OrdersCreate'; // URL del controlador

  constructor(private http: HttpClient) { }

  createOrder(orderCreateDto: OrderCreateDto): Observable<number> {
    return this.http.post<number>(this.apiUrl, orderCreateDto);
  }
}