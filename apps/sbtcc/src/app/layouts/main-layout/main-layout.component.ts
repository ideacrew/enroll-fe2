import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SbtccHeaderComponent } from '@enroll/sbtcc/header';

@Component({
  selector: 'sbtcc-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SbtccHeaderComponent],
  template: `
    <div class="wrapper">
      <sbtcc-header />

      <router-outlet />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class MainLayoutComponent {
  title = 'sbtcc App';
}
