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
  styleUrls: ['./main-layout.component.scss'],
  template: `
    <div class="wrapper">
      <sbtcc-header />

      <div class="content">
        <div class="inner-content">
          <sbtcc-sidenav />

          <main>
            <h1>Small Business Tax Credit Calculator</h1>
            <router-outlet />
          </main>
        </div>
      </div>

      <sbtcc-footer />
    </div>
  `,
})
export class MainLayoutComponent {
  title = 'sbtcc App';
}
