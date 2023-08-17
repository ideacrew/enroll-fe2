import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SbtccHeaderComponent } from '@enroll/sbtcc/header';
import { SbtccFooterComponent } from '@enroll/sbtcc/footer';

@Component({
  selector: 'sbtcc-alt-layout',
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
        <div class="inner-content">
          <main>
            <router-outlet />
          </main>
        </div>
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

      .content {
        display: grid;
        place-items: center;
        background: #fafafa;
      }

      .inner-content {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 1172px;
        width: 100%;
        padding: 24px 16px;
        height: 100%;
      }
    `,
  ],
})
export class AltLayoutComponent {}