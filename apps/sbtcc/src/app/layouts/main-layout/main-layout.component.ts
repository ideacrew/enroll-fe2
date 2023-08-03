import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sbtcc-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="wrapper">
      <h1>IdeaCrew, Inc.</h1>
      <img src="/assets/images/IdeaCrew_Logo.png" alt="IdeaCrew Logo" />
      <h2>{{ title }}</h2>

      <ul class="links">
        <li><a routerLink="/">Link 1 (Home)</a></li>
        <li><a routerLink="/page2">Link 2 (Page 2)</a></li>
        <li><a routerLink="/page3">Link 3 (Page 3)</a></li>
      </ul>

      <router-outlet />
    </div>
  `,
  styles: [
    `
      .wrapper {
        display: grid;
        place-items: center;
        align-content: center;
        height: 100dvh;
      }

      img {
        width: 100px;
      }

      .links {
        list-style: none;
        padding: 0;
        margin: 0;

        display: grid;
        gap: 8px;

        font-size: 0.7rem;

        position: absolute;
        top: 16px;
        right: 16px;

        background-color: #ff81de;
        background-image: linear-gradient(315deg, #ff81de 0%, #aba8ec 74%);
        padding: 8px;
        border-radius: 8px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
      }

      .links a {
        display: block;
        background-color: #4d4dc3;
        color: white;
        text-decoration: none;
        padding: 4px 7px;
        width: 100%;
        border-radius: 4px;
        text-align: center;
      }
    `,
  ],
})
export class MainLayoutComponent {
  title = 'sbtcc App';
}
