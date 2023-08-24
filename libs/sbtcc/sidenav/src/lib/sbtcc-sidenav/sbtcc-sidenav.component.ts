import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sbtcc-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div>
      <div class="main">
        <h3>Progress {{ currentLocation }}</h3>

        <span data-complete>Start</span>
        <span data-current>Tax-exemption</span>
        <span>Full-time Employees</span>
        <span>Employee Wages</span>
        <span>Premiums</span>
        <span>Results</span>
      </div>

      <div class="alt">
        <a routerLink="/tax-exemption">Start Over</a>
        <a routerLink="/">Return Home</a>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
        width: 267px;
        box-sizing: border-box;

        color: var(--text-primary, #323130);
        font-family: Barlow;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px;
        -webkit-font-smoothing: antialiased;
      }

      h3 {
        color: var(--text-primary, #323130);
        margin: 0;

        font-size: 18px;
        font-weight: 700;
        line-height: 27px;
        margin-bottom: 10px;
      }

      a {
        display: block;
      }

      .main {
        border-radius: 5px;
        border: 1px solid var(--greys-grey-050, #d2d0ce);
        background: var(--greys-white, #fff);
        padding: 10px 10px 10px 15px;
      }

      .alt {
        display: grid;
        gap: 10px;
        background: transparent;
        padding: 10px;
      }

      .main span {
        display: block;
        text-decoration: none;
        position: relative;
        color: var(--text-primary, #323130);
      }

      .main span::after {
        content: '';
        display: block;
        position: absolute;
        top: calc(50% - 5px);
        right: 11px;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        box-shadow: inset 0 0px 0px 2px;
        color: #8b9ea9;
      }

      .main span:not(:last-child)::before {
        content: '';
        display: block;
        position: absolute;
        top: calc((50% - 8px) * 3);
        right: 15px;
        height: 16px;
        width: 2px;
        border-radius: 1px;
        background: #8b9ea9;
      }

      .main span[data-complete]::after {
        color: #253843;
        background: #253843;
      }

      .main span[data-current]::after {
        color: #253843;
      }

      .alt a {
        color: var(--primary-100-me, #3d5d6f);
        line-height: 24px;
      }
    `,
  ],
})
export class SbtccSidenavComponent {
  @Input() currentLocation: number | string = 0;
}
