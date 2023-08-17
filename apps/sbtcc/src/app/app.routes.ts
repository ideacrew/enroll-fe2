import { Route } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './views/home/home.component';
import { PageTwoComponent } from './views/page-two/page-two.component';
import { PageThreeComponent } from './views/page-three/page-three.component';
import { AltLayoutComponent } from './layouts/alt-layout/alt-layout.component';
import { FaqComponent } from './views/faq/faq.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'page2',
        component: PageTwoComponent,
      },
      {
        path: 'page3',
        component: PageThreeComponent,
      },
    ],
  },
  {
    path: 'faq',
    component: AltLayoutComponent,
    children: [
      {
        path: '',
        component: FaqComponent,
      },
    ],
  },
];
