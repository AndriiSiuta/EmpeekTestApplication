import {Routes} from "@angular/router";

export const appRoutes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'main',
}, {
  path: 'main',
  loadChildren: './main/main.module#MainModule'
}];
