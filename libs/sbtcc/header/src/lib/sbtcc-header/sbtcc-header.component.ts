import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sbtcc-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div>
      <img src="covermelogo.svg" alt="Cover Me Logo" />

      <span class="span"></span>

      <h2>Small Business Tax Credit Calculator</h2>
    </div>
  `,
  styleUrls: ['./sbtcc-header.component.scss'],
})
export class SbtccHeaderComponent {}
