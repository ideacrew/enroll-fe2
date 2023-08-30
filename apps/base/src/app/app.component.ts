import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'base-root',
  standalone: true,
  imports: [RouterOutlet],
  encapsulation: ViewEncapsulation.None,
  template: ` <router-outlet /> `,
})
export class AppComponent {
  title = 'base';
}
