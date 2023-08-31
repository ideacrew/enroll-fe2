import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  selector: 'sbtcc-sidenav',
  standalone: true,
  imports: [NgIf, RouterLink, TranslocoDirective],
  template: `
    <ng-container *transloco="let t; read: 'progress'">
      <aside>
        <div class="main">
          <h3>{{ t('header') }}</h3>
          <ul>
            <li>{{ t('start') }}</li>
            <li>{{ t('tax-exempt') }}</li>
            <li>{{ t('employees') }}</li>
            <li>{{ t('wages') }}</li>
            <li>{{ t('premiums') }}</li>
            <li>{{ t('results') }}</li>
          </ul>
        </div>

        <div class="alt" *ngIf="this.location !== 0">
          <a routerLink="/tax-exemption" (click)="resetData()">
            {{ t('start-over') }}
          </a>
          <a routerLink="/" (click)="resetData()">{{ t('home') }}</a>
        </div>
      </aside>
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
    const lis = document.querySelectorAll('.main li');

    if (lis.length) {
      lis.forEach((li, index) => {
        // Add Current style to the current li
        if (index == location) {
          li.setAttribute('data-current', '');
        } else {
          li.removeAttribute('data-current');
        }

        if (index < location) {
          li.setAttribute('data-complete', '');
        } else {
          li.removeAttribute('data-complete');
        }
      });
    }
  }
}
