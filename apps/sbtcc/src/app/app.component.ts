import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tenant } from '../../tenant-config';

@Component({
  selector: 'sbtcc-root',
  standalone: true,
  imports: [RouterOutlet],
  encapsulation: ViewEncapsulation.None,
  template: ` <router-outlet /> `,
})
export class AppComponent {
  title = Tenant.title;
}
