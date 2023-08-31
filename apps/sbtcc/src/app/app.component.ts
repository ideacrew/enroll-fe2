import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tenant } from '../../tenant-config';

@Component({
  selector: 'sbtcc-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
})
export class AppComponent {
  title = Tenant.title;
}
