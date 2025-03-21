// src/app/orders-view-modal/orders-view-modal.component.ts
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; // Importa MatDialogRef
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; // Importa MatButtonModule

@Component({
  selector: 'app-orders-view-modal',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule // Agrega MatButtonModule a imports
  ],
  templateUrl: './orders-view-modal.component.html',
  styleUrl: './orders-view-modal.component.css'
})
export class OrdersViewModalComponent implements OnInit {
  orders!: MatTableDataSource<Order>;
  displayedColumns: string[] = ['orderId', 'requiredDate', 'shippedDate', 'shipName', 'shipAddress', 'shipCity'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { customerId: number },
    private orderService: OrderService,
    public dialogRef: MatDialogRef<OrdersViewModalComponent> // Inyecta MatDialogRef
  ) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrdersByCustomerId(this.data.customerId).subscribe(orders => {
      this.orders = new MatTableDataSource(orders);
      this.orders.paginator = this.paginator;
      this.orders.sort = this.sort;
    });
  }

  closeModal(): void {
    this.dialogRef.close(); // Cierra el modal
  }
}