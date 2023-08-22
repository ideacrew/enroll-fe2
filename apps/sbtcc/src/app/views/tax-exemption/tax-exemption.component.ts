import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'sbtcc-tax-exemption',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatRadioModule],
  styleUrls: ['tax-exemption.component.scss'],
  template: `
    <h2>1. Are you a tax-exempt employer?</h2>

    <p>
      The credit is refundable for tax-exempt employers, but is limited to the
      amount of the tax-exempt employer's payroll taxes withheld during the
      calendar year.
    </p>

    <mat-radio-group class="questions" name="tax-exempt-question">
      <mat-radio-button class="radio" value="yes">
        Yes, I'm a tax-exempt employer
      </mat-radio-button>
      <mat-radio-button class="radio" value="no">
        No, I'm not a tax-exempt employer
      </mat-radio-button>
    </mat-radio-group>

    <button mat-raised-button color="primary" (click)="nextStep()">
      Continue to Next Step
    </button>
  `,
})
export class TaxExemptionComponent {
  constructor(private router: Router) {}

  nextStep(): void {
    this.router.navigate(['/employees']);
  }
}
