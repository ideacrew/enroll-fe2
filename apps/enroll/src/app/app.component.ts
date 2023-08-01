import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'enroll-root',
  template: `
    <h1>Welcome {{ title }}</h1>

    <div class="content-container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'enroll';
}
