import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SbtccHeaderComponent } from '@enroll/sbtcc/header';
import { SbtccFooterComponent } from '@enroll/sbtcc/footer';

@Component({
  selector: 'sbtcc-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SbtccHeaderComponent,
    SbtccFooterComponent,
  ],
  template: `
    <div class="wrapper">
      <sbtcc-header />

      <div class="content">
        <router-outlet />
      </div>

      <sbtcc-footer />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100dvh;
      }

      .wrapper {
        display: grid;
        grid-template-rows: max-content 1fr max-content;
        height: 100%;
      }
    `,
  ],
})
export class MainLayoutComponent {
  title = 'sbtcc App';
}
