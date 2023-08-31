import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sbtcc-footer',
  standalone: true,
  imports: [RouterLink, NgClass],
  template: `
    <div class="container">
      <div class="top">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9613 6.98651C17.0918 6.5934 16.8789 6.16892 16.4858 6.0384C16.0927 5.90789 15.6682 6.12078 15.5377 6.51389C15.3898 6.95938 15.2337 7.55385 15.1181 8.02636C14.3819 8.05155 13.6725 8.04441 13.0512 8.00192C12.638 7.97366 12.28 8.28575 12.2518 8.699C12.2235 9.11224 12.5356 9.47016 12.9489 9.49842C13.512 9.53693 14.1391 9.54883 14.7931 9.53567C14.6493 10.3013 14.5518 10.9848 14.4928 11.5995C13.2779 12.2419 12.4318 13.1041 11.9543 14.0119C11.3412 15.1776 11.2937 16.5683 12.1596 17.4547C12.7313 18.0391 13.5679 18.095 14.2889 17.9402C14.6945 17.8532 15.1145 17.6919 15.5292 17.466C15.5352 17.4817 15.5411 17.4972 15.5468 17.5125C15.6917 17.9005 16.1237 18.0977 16.5118 17.9529C16.8998 17.808 17.097 17.376 16.9522 16.9879C16.8956 16.8363 16.8385 16.6966 16.7818 16.5641C17.8051 15.6283 18.6965 14.2557 19.0671 12.5174C19.7047 12.8294 20.1363 13.3529 20.345 13.9166C20.5723 14.5303 20.5579 15.229 20.2479 15.8693C19.9403 16.5047 19.3154 17.1338 18.2327 17.5502C17.8461 17.6988 17.6532 18.1327 17.8018 18.5194C17.9505 18.906 18.3844 19.0989 18.771 18.9502C20.1576 18.4171 21.1017 17.548 21.598 16.523C22.0918 15.5031 22.116 14.3795 21.7517 13.3957C21.3384 12.2798 20.4512 11.3853 19.2474 10.972C19.2492 10.8986 19.2501 10.8246 19.2501 10.7502C19.2501 10.336 18.9143 10.0002 18.5001 10.0002C18.0948 10.0002 17.7646 10.3217 17.7506 10.7236C17.2257 10.7194 16.6655 10.7944 16.0784 10.9614C16.1416 10.5058 16.2261 10.0076 16.3354 9.46137C17.5197 9.37197 18.6989 9.20879 19.6716 8.98029C20.0748 8.88556 20.3249 8.48188 20.2302 8.07865C20.1354 7.67541 19.7317 7.42532 19.3285 7.52005C18.5605 7.70047 17.6387 7.83792 16.6905 7.9262C16.7765 7.59639 16.8719 7.25572 16.9613 6.98651ZM13.2819 14.7102C13.5082 14.2799 13.8817 13.8238 14.4278 13.4104C14.4449 13.9015 14.4933 14.3357 14.5646 14.7275C14.6589 15.2462 14.8005 15.7013 14.9508 16.0998C14.6455 16.2711 14.3192 16.3996 13.9741 16.4736C13.4893 16.5777 13.2868 16.462 13.2317 16.4057C12.9929 16.1612 12.8383 15.5535 13.2819 14.7102ZM17.5959 12.2226C17.3869 13.1893 16.8955 14.2447 16.1823 15.0708C16.1295 14.8871 16.0817 14.6863 16.0404 14.4591C15.9513 13.9695 15.9006 13.3672 15.9286 12.593C16.0381 12.551 16.1511 12.5106 16.2676 12.4721C16.7491 12.3132 17.1924 12.2353 17.5959 12.2226ZM7.96084 7.53004C5.72117 6.87843 3.95773 7.68117 3.38512 7.99715C3.02245 8.19727 2.89069 8.65349 3.09081 9.01616C3.29093 9.37882 3.74715 9.51059 4.10982 9.31047C4.51469 9.08705 5.84606 8.47728 7.54098 8.97008C8.31403 9.19709 8.63905 9.60925 8.80538 10.0261C8.93783 10.3581 8.97952 10.717 8.99259 11.0683C8.72336 10.9931 8.41199 10.9183 8.07049 10.8576C6.93793 10.6563 5.38792 10.595 3.94794 11.2847C2.36169 12.0445 1.81748 13.601 2.04591 14.9817C2.27037 16.3384 3.26232 17.6483 4.84609 17.9333C6.2756 18.1906 7.65146 17.6774 8.60343 17.1719C8.74209 17.0983 8.87408 17.0236 8.9985 16.9496V17.2502C8.9985 17.6644 9.33429 18.0002 9.7485 18.0002C10.1627 18.0002 10.4985 17.6644 10.4985 17.2502L10.4985 11.4605C10.4988 11.0064 10.4993 10.2239 10.1986 9.47022C9.86774 8.64108 9.19434 7.89191 7.96246 7.53051L7.96084 7.53004ZM7.80802 12.3344C8.29139 12.4204 8.70564 12.5403 8.9985 12.6388V15.1448C8.96621 15.1693 8.93112 15.1955 8.89337 15.2231C8.6526 15.3993 8.3091 15.6298 7.89995 15.8471C7.05912 16.2936 6.0502 16.6259 5.11177 16.457C4.26739 16.3051 3.66714 15.5912 3.52579 14.7369C3.3884 13.9064 3.70477 13.0644 4.59594 12.6375C5.63338 12.1406 6.82165 12.1591 7.80802 12.3344Z"
            fill="currentColor"
          />
        </svg>

        <a
          (click)="switchLanguage('en')"
          [ngClass]="{ active: language === 'en' }"
          >English</a
        >
        <a
          (click)="switchLanguage('es')"
          [ngClass]="{ active: language === 'es' }"
          >Español</a
        >
      </div>

      <div class="bottom">
        <span>{{ company }} - {{ copyright }}</span>
        <span></span>
        <a href="tel:{{ phone }}">{{ phone }} / TTY: {{ tty }}</a>
        <a
          href="mailto:{{ email }}?subject=Contact from {{ appName }} Website"
          >{{ email }}</a
        >
        <a routerLink="/faq">FAQs</a>
      </div>
    </div>
  `,
  styleUrls: ['./sbtcc-footer.component.scss'],
})
export class SbtccFooterComponent implements OnInit {
  language = 'en';
  appName = '';

  @Input() phone = '(800) 555-5555';
  @Input() tty = '111';
  @Input() email = 'info@company.com';
  @Input() company = 'Company Name';
  @Input() copyright = 'All Rights Reserved.';
  @Input() title = 'Name of App';
  @Input()
  set currentLanguage(value: string) {
    this.language = value ?? 'en';
  }
  @Output() switchLanguageEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.appName = `${this.company} ${this.title}`;
  }

  switchLanguage(lang: string): void {
    this.switchLanguageEvent.emit(lang);
  }
}
