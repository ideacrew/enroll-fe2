import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sbtcc-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div>
      <div class="main">
        <h3>Progress</h3>

        <span>Start</span>
        <span>Tax-exemption</span>
        <span>Full-time Employees</span>
        <span>Employee Wages</span>
        <span>Premiums</span>
        <span>Results</span>
      </div>

      <div class="alt">
        <a routerLink="/tax-exemption" (click)="resetData()">Start Over</a>
        <a routerLink="/" (click)="resetData()">Return Home</a>
      </div>
    </div>
  `,
  styleUrls: ['./sbtcc-sidenav.component.scss'],
})
export class SbtccSidenavComponent implements OnChanges {
  location: number | null = null;

  @Input()
  set currentLocation(value: number | null) {
    this.location = value ?? 0;
  }

  @Output() resetDataEvent = new EventEmitter<void>();

  resetData(): void {
    this.resetDataEvent.emit();
  }

  ngOnChanges(): void {
    this.checkLocation(this.location as number);
  }

  private checkLocation(location: number): void {
    const spans = document.querySelectorAll('.main span');

    if (spans.length) {
      spans.forEach((span, index) => {
        // Add Current style to the current span
        if (index == location) {
          span.setAttribute('data-current', '');
        } else {
          span.removeAttribute('data-current');
        }

        if (index < location) {
          span.setAttribute('data-complete', '');
        } else {
          span.removeAttribute('data-complete');
        }
      });
    }
  }
}
