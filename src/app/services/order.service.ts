// src/app/services/order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs'; // Importa catchError y throwError
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://localhost:7170/Orders'; // URL del controlador

  constructor(private http: HttpClient) { }

  getOrdersByCustomerId(customerId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/${customerId}`).pipe(
      catchError(this.handleError) // Agrega el manejo de errores
    );
  }

  private handleError(error: any) {
    console.error('Error al obtener las órdenes:', error);
    return throwError(error);
  }
}

