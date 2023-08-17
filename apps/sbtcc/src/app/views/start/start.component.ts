import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'sbtcc-start',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <p>
      Use our calculator to find out if your business might qualify for a tax
      credit, and if so, what amount of financial help you may expect. Keep in
      mind that results from the calculator are simply an estimate. Please
      consult your tax adviser for further assistance.
    </p>

    <button mat-raised-button color="primary">Begin the Calculator</button>
  `,
  styleUrls: ['start.component.scss'],
})
export class StartComponent {}
