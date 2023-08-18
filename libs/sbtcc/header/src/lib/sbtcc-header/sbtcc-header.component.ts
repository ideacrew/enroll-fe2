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
  styles: [
    `
      :host {
        display: grid;
        place-items: center;
        box-sizing: border-box;
        background-color: #3d5d6f;
        color: #fff;
        -webkit-font-smoothing: antialiased;
      }

      div {
        display: grid;
        align-items: center;
        grid-template-columns: max-content 3px 1fr;
        gap: 12px;
        width: 1172px;
        height: 70px;
        padding: 0 16px;

        @media (max-width: 660px) {
          display: flex;
          flex-direction: column;
          height: auto;
          width: auto;
          margin: 16px 0;
        }
      }

      span {
        display: block;
        background-color: #b1bf9c;
        border-radius: 3px;
        height: 51px;
        width: 3px;

        @media (max-width: 660px) {
          display: none;
        }
      }

      img {
        height: 41px;
        translate: 0 4px;
      }

      h2 {
        margin: 0;
        font-family: Barlow;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;

        @media (max-width: 660px) {
          text-align: center;
        }
      }
    `,
  ],
})
export class SbtccHeaderComponent {}
