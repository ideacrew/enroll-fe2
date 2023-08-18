import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'sbtcc-premiums',
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
      4. What is the total estimated amount you will pay toward premiums during
      the applicable year?
    </h2>

    <p>
      The total wages you paid or expect to pay for both full-time and part-time
      employees should include all wages subject to Social Security and Medicare
      tax withholding (even if an employee's yearly wages are more than the wage
      base limit).
    </p>

    <form class="form-area">
      <mat-label>Total contribution in $USD</mat-label>
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
  styleUrls: ['./premiums.component.scss'],
})
export class PremiumsComponent {
  constructor(private router: Router) {}

  previousStep() {
    this.router.navigate(['/wages']);
  }

  nextStep() {
    this.router.navigate(['/results']);
  }
}
