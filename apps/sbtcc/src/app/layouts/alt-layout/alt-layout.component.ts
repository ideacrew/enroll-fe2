import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SbtccHeaderComponent } from '@enroll/sbtcc/header';
import { SbtccFooterComponent } from '@enroll/sbtcc/footer';
import { Tenant } from '../../../../tenant-config';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'sbtcc-alt-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SbtccHeaderComponent,
    SbtccFooterComponent,
  ],
  template: `
    <div class="wrapper">
      <sbtcc-header [title]="title" [imgSrc]="imgSrc" />

      <div class="content">
        <div class="inner-content">
          <main>
            <router-outlet />
          </main>
        </div>
      </div>

      <sbtcc-footer
        (switchLanguageEvent)="switchLanguage($event)"
        [currentLanguage]="currentLanguage"
        [phone]="phone"
        [tty]="tty"
        [email]="email"
        [company]="company"
        [copyright]="copyright"
        [title]="title"
      />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100dvh;
      }

      .wrapper {
        display: grid;
        grid-template-rows: max-content 1fr max-content;
        height: 100%;
        background: #fafafa;
      }

      .content {
        display: grid;
        place-items: center;
        margin: 48px 0;
      }

      .inner-content {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 1172px;
        width: 100%;
        padding: 24px 16px;
        height: 100%;
      }
    `,
  ],
})
export class AltLayoutComponent {
  title = Tenant.title;
  currentLanguage = Tenant.defaultLanguage;
  phone = Tenant.phone;
  tty = Tenant.tty;
  email = Tenant.email;
  company = Tenant.company;
  copyright = Tenant.copyright;
  imgSrc = Tenant.imgSrc;

  constructor(private transloco: TranslocoService) {}

  switchLanguage(lang: string): void {
    this.transloco.setActiveLang(lang);
    this.currentLanguage = this.getCurrentLanguage();
  }

  getCurrentLanguage(): string {
    return this.transloco.getActiveLang();
  }
}
