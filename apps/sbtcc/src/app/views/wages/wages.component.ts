import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'sbtcc-wages',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
  ],
  template: `
    <h2>
      3. What are your total estimated employee wages for the applicable tax
      year?
    </h2>

    <p>
      The total wages you paid or expect to pay for both full-time and part-time
      employees should include all wages subject to Social Security and Medicare
      tax withholding (even if an employee's yearly wages are more than the wage
      base limit).
    </p>

    <form class="form-area">
      <mat-label>Total wages in $USD</mat-label>
      <mat-form-field appearance="outline" floatLabel="always">
        <input matInput />
      </mat-form-field>
    </form>

    <button mat-raised-button color="basic" (click)="previousStep()">
      Previous Step
    </button>
    <button mat-raised-button color="primary" (click)="nextStep()">
      Continue to Next Step
    </button>
  `,
  styleUrls: ['./wages.component.scss'],
})
export class WagesComponent {
  constructor(private router: Router) {}

  previousStep() {
    this.router.navigate(['/employees']);
  }

  nextStep() {
    this.router.navigate(['/premiums']);
  }
}
