import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
 
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
 
const routes: Route[] = [
    { path: '', component: MainComponent, children: [
      { path: '', component: HomeComponent },
    ]}
];
 
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);