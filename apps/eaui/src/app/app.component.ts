import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'eaui-root',
  standalone: true,
  imports: [RouterModule],
  encapsulation: ViewEncapsulation.None,
  template: ` <router-outlet /> `,
})
export class AppComponent {
  title = 'eaui';
}
