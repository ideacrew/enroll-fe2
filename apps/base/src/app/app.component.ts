import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'enroll-root',
  template: `<enroll-nx-welcome></enroll-nx-welcome> `,
  styles: [''],
})
export class AppComponent {
  title = 'base';
}
