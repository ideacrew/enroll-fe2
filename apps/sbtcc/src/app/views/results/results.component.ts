import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'sbtcc-results',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
  ],
  template: `
    <h2>Results</h2>

    <h3>Estimated annual tax-credit:</h3>

    <button mat-raised-button color="basic" (click)="previousStep()">
      Return Home
    </button>
    <button mat-raised-button color="primary" (click)="nextStep()">
      Start Over
    </button>
  `,
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  constructor(private router: Router) {}

  previousStep() {
    this.router.navigate(['/']);
  }

  nextStep() {
    this.router.navigate(['/']);
  }
}
