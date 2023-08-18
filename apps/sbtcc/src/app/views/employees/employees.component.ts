import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'sbtcc-employees',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  template: `
    <h2>2. How many of your employees work 40 hours or more a week?</h2>

    <p>
      Full-time employees are employees who worked or who you expect to work the
      equivalent of 40 hours a week for 52 weeks (for a total of 2,080 hours
      each).
    </p>

    <form class="form-area">
      <mat-label>Number of full-time employees</mat-label>
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
  styleUrls: ['employees.component.scss'],
})
export class EmployeesComponent {
  constructor(private router: Router) {}

  nextStep(): void {
    // this.router.navigate(['/tax-exemption']);
    console.log('Clicked Next Step');
  }

  previousStep(): void {
    this.router.navigate(['/tax-exemption']);
  }
}
