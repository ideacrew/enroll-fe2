import { Route } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { StartComponent } from './views/start/start.component';
import { TaxExemptionComponent } from './views/tax-exemption/tax-exemption.component';
import { EmployeesComponent } from './views/employees/employees.component';
import { AltLayoutComponent } from './layouts/alt-layout/alt-layout.component';
import { FaqComponent } from './views/faq/faq.component';
import { WagesComponent } from './views/wages/wages.component';
import { PremiumsComponent } from './views/premiums/premiums.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: StartComponent,
      },
      {
        path: 'tax-exemption',
        component: TaxExemptionComponent,
      },
      {
        path: 'employees',
        component: EmployeesComponent,
      },
      {
        path: 'wages',
        component: WagesComponent,
      },
      {
        path: 'premiums',
        component: PremiumsComponent,
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
