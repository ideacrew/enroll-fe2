import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sbtcc-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <img src="{{ imgSrc }}" alt="Cover Me Logo" width="208" height="41" />

      <span class="span"></span>

      <h2>{{ title }}</h2>
    </div>
  `,
  styleUrls: ['./sbtcc-header.component.scss'],
})
export class SbtccHeaderComponent {
  @Input() title = 'Application Name Calculator';
  @Input() imgSrc = 'app-logo.svg';
}
