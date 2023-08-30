import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'sbtcc-sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslocoModule],
  template: `
    <ng-container *transloco="let t; read: 'progress'">
      <div>
        <div class="main">
          <h3>{{ t('header') }}</h3>

          <span>{{ t('start') }}</span>
          <span>{{ t('tax-exempt') }}</span>
          <span>{{ t('employees') }}</span>
          <span>{{ t('wages') }}</span>
          <span>{{ t('premiums') }}</span>
          <span>{{ t('results') }}</span>
        </div>

        <div class="alt" *ngIf="this.location !== 0">
          <a routerLink="/tax-exemption" (click)="resetData()">
            {{ t('start-over') }}
          </a>
          <a routerLink="/" (click)="resetData()">{{ t('home') }}</a>
        </div>
      </div>
    </ng-container>
  `,
  styleUrls: ['./sbtcc-sidenav.component.scss'],
})
export class SbtccSidenavComponent implements OnChanges, AfterContentChecked {
  location: number | null = null;

  @Input()
  set currentLocation(value: number | null) {
    this.location = value ?? 0;
  }

  @Output() resetDataEvent = new EventEmitter<void>();

  resetData(): void {
    this.resetDataEvent.emit();
  }

  ngAfterContentChecked(): void {
    this.updateLocation(this.location as number);
  }

  ngOnChanges(): void {
    this.updateLocation(this.location as number);
  }

  private updateLocation(location: number): void {
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
