// src/app/new-order-form/new-order-form.component.ts
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OrderCreateService } from '../services/order-create.service';
import { OrderCreateDto, OrderDetailCreateDto } from '../models/order-create.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-order-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-order-form.component.html',
  styleUrls: ['./new-order-form.component.css']
})
export class NewOrderFormComponent implements OnInit {
  orderForm!: FormGroup;
  orderCreated = false;
  orderId: number | null = null;

  @Output() close = new EventEmitter<void>();
  dialogRef: any;

  constructor(private fb: FormBuilder, private orderService: OrderCreateService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.orderForm = this.fb.group({
      empId: ['', Validators.required],
      shipperId: ['', Validators.required],
      shipName: ['', Validators.required],
      shipAddress: ['', Validators.required],
      shipCity: ['', Validators.required],
      orderDate: ['', Validators.required],
      requiredDate: ['', Validators.required],
      shippedDate: [''],
      freight: ['', Validators.required],
      shipCountry: ['', Validators.required],
      custId: ['', Validators.required],
      productId: ['', Validators.required],
      unitPrice: ['', Validators.required],
      qty: ['', Validators.required],
      discount: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      const orderDetail: OrderDetailCreateDto = {
        productId: this.orderForm.value.productId,
        unitPrice: this.orderForm.value.unitPrice,
        qty: this.orderForm.value.qty,
        discount: this.orderForm.value.discount
      };

      const orderCreateDto: OrderCreateDto = {
        empId: this.orderForm.value.empId,
        shipperId: this.orderForm.value.shipperId,
        shipName: this.orderForm.value.shipName,
        shipAddress: this.orderForm.value.shipAddress,
        shipCity: this.orderForm.value.shipCity,
        orderDate: this.orderForm.value.orderDate,
        requiredDate: this.orderForm.value.requiredDate,
        shippedDate: this.orderForm.value.shippedDate,
        freight: this.orderForm.value.freight,
        shipCountry: this.orderForm.value.shipCountry,
        custId: this.orderForm.value.custId,
        orderDetail: orderDetail
      };

      this.orderService.createOrder(orderCreateDto).subscribe(orderId => {
        this.orderCreated = true;
        this.orderId = orderId;
      });
    } else {
      // Marca los campos como "touched" para mostrar los mensajes de error
      Object.values(this.orderForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  resetForm(): void {
    this.orderCreated = false;
    this.orderId = null;
    this.orderForm.reset();
  }

  closeModal(): void {
    this.dialogRef.close(); // Cierra el modal
  }
}