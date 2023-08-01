import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'enroll-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="container">
        <a class="home-link" routerLink="/">
          <img
            class="client-logo"
            src="/assets/logos/{{ tenant }}-logo.svg"
            alt="logo image"
          />
          <span class="visually-hidden">Home</span>
        </a>

        <span class="tag-line">tagline here</span>

        <div class="customer-service">
          <div class="title">Customer Service</div>
          <span class="phone-link">
            <svg
              class="phone-icon"
              aria-hidden="true"
              viewBox="0 0 512 512"
              height="14"
              width="14"
            >
              <path
                fill="var(--type-placeholder)"
                d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
              />
            </svg>
            <a href="tel:{{ phoneNumber }}">{{ fullPhone }}</a></span
          >
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      .header {
        background-color: var(--grey-000);
        border-bottom: 3px solid var(--theme-secondary-100);
      }

      .container {
        padding: var(--s-1) var(--s0);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      /* .container * {
         outline: 1px solid red;
       } */

      .customer-service {
        display: none;
      }

      .home-link {
        width: 15ch;
        display: block;
      }

      @media screen and (min-width: 768px) {
        .header {
          height: var(--header-height);
        }

        .container {
          max-width: var(--content-width);
          margin: 0 auto;
          padding: 0;

          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: 1fr;
          column-gap: var(--s-1);
          align-content: center;
          /* height: var(--header-height); */
          height: 100%;
        }

        .home-link {
          padding-right: var(--s0);
          border-right: 1px solid var(--grey-040, chartreuse);
          grid-column: span 2;
          display: flex;
          align-items: center;
          align-self: stretch;
        }

        .client-logo {
          max-height: 40px;
          display: inline;
        }

        .tag-line {
          grid-column: span 7;
          align-self: center;
          font-weight: 400;
        }

        .customer-service {
          display: block;
          grid-column: 10 / span 3;
          align-self: center;
          justify-self: end;
          text-align: right;

          .phone-link {
            display: flex;
            align-items: center;
            gap: var(--s-2);
          }

          a {
            text-decoration: none;
            color: var(--type-primary);
          }

          svg {
            transform: scale(-1, 1);
          }
        }
      }
    `,
  ],
})
export class HeaderComponent {
  @Input() phoneNumber = '';
  @Input() tty = '';
  @Input() tenant = 'me';

  get fullPhone(): string {
    return this.tty.length > 0
      ? `${this.phoneNumber} / TTY: ${this.tty}`
      : this.phoneNumber;
  }
}
