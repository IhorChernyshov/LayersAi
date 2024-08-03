import { Routes } from '@angular/router';
import {LayoutsComponent} from "./layouts/layouts.component";
import {HeaderComponent} from "./Navigation/header/header.component";
import {FooterComponent} from "./Navigation/footer/footer.component";
import {HomeComponent} from "./content/home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: 'home', redirectTo: '', pathMatch: 'full' },
      { path: '', component: HomeComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'footer', component: FooterComponent },
      ]
  }
];
