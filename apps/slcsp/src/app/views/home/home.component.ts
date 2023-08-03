import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'slcsp-home',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  template: `
    <p>This is the Home View</p>
    <mat-slide-toggle>Slide me!</mat-slide-toggle>
  `,
  styles: [
    `
      :host {
        display: grid;
        place-items: center;
        align-content: center;
        width: 300px;
        height: 100px;
        background-color: #ff81de;
      }
    `,
  ],
})
export class HomeComponent {}
