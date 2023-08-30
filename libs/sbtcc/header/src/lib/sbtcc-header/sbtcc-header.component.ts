import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sbtcc-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <img src="covermelogo.svg" alt="Cover Me Logo" width="208" height="41" />

      <span class="span"></span>

      <h2>Small Business Tax Credit Calculator</h2>
    </div>
  `,
  styleUrls: ['./sbtcc-header.component.scss'],
})
export class SbtccHeaderComponent {}
