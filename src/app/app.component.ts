import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatFormFieldModule], // Agrega MatFormFieldModule a imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sales-date-prediction-spa';
}