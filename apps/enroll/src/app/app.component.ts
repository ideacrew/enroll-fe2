import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@enroll/header';

@Component({
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  selector: 'enroll-root',
  template: `
    <h1>Welcome {{ title }}</h1>

    <!-- <enroll-header phoneNumber="800-965-7476" tty="711"></enroll-header> -->
    <enroll-header phoneNumber="800-965-7476" tty="711"></enroll-header>

    <div class="content-container">
      <router-outlet></router-outlet>
    </div>

    <!-- <enroll-footer
      email="smallbusiness@coverme.gov"
      phoneNumber="800-965-7476"
      tty="711"
      helpLink="https://www.coverme.gov/help/"
    ></enroll-footer> -->
  `,
})
export class AppComponent {
  title = 'enroll';
}
