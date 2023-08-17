import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SbtccHeaderComponent } from '@enroll/sbtcc/header';
import { SbtccFooterComponent } from '@enroll/sbtcc/footer';
import { SbtccSidenavComponent } from '@enroll/sbtcc/sidenav';

@Component({
  selector: 'sbtcc-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SbtccHeaderComponent,
    SbtccFooterComponent,
    SbtccSidenavComponent,
  ],
  template: `
    <div class="wrapper">
      <sbtcc-header />

      <div class="content">
        <div class="inner-content">
          <sbtcc-sidenav />

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
        background: #fafafa;
      }

      .content {
        display: grid;
        place-items: center;
        margin: 48px 0;
      }

      .inner-content {
        display: grid;
        grid-template-columns: 1fr 3fr;
        max-width: 1172px;
        width: 100%;
        padding: 0 16px;
      }
    `,
  ],
})
export class MainLayoutComponent {
  title = 'sbtcc App';
}
