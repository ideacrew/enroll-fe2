import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'slcsp-page-three',
  standalone: true,
  imports: [CommonModule],
  template: `<p>page-three works!</p>`,
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
export class PageThreeComponent {}
