// src/app/sales-date-prediction-view/sales-date-prediction-view.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { SalesDatePredictionService } from '../sales-date-prediction.service';
import { CustomerOrderPrediction } from '../models/customer-order-prediction';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OrdersViewModalComponent } from '../orders-view-modal/orders-view-modal.component';
import { NewOrderFormComponent } from '../new-order-form/new-order-form.component'; // Corrige la importación
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-date-prediction-view',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './sales-date-prediction-view.component.html',
  styleUrl: './sales-date-prediction-view.component.css'
})
export class SalesDatePredictionViewComponent implements OnInit {
  predictions!: MatTableDataSource<CustomerOrderPrediction>;
  displayedColumns: string[] = ['customerName', 'lastOrderDate', 'nextPredictedOrder', 'actions'];
  search: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private predictionService: SalesDatePredictionService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadPredictions();
  }

  loadPredictions(): void {
    this.predictionService.getPredictions(this.search).subscribe(data => {
      this.predictions = new MatTableDataSource(data);
      this.predictions.paginator = this.paginator;
      this.predictions.sort = this.sort;
    });
  }

  openOrdersModal(row: CustomerOrderPrediction): void {
    const dialogRef = this.dialog.open(OrdersViewModalComponent, {
      width: '5000px',
      height: '900px',
      data: { customerId: row.customerId }
    });
  }

  openNewOrderModal(customer: CustomerOrderPrediction): void {
    this.dialog.open(NewOrderFormComponent, {
      width: '5000px',
      height: '900px', 
      data: { customerName: customer.customerName }
    });
  }

  applyFilter(): void {
    this.loadPredictions();
  }
}