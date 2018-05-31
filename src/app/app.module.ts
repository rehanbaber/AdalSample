import { Adal6Service, Adal6HTTPService } from 'adal-angular6';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { Route, RouterModule, Router } from '@angular/router';
import { AppRoutes } from './app.routing';

import { Http, HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationGuard } from './common/guards/authentication-guard';
import { TestserviceService } from './testservice.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'error', loadChildren: './error-pages/error-pages.module#ErrorPagesModule'},
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: '', component: MainComponent, canActivate: [AuthenticationGuard], canActivateChild: [AuthenticationGuard], children: [
        { path: '', component: HomeComponent },
      ]},
      { path: '**', pathMatch: 'full', redirectTo: 'error/404' }
    ])
  ],
  providers: [
    Adal6Service,
    {
        provide: Adal6HTTPService,
        useFactory: Adal6HTTPService.factory,
        deps: [Http, Adal6Service]
    },
    AuthenticationGuard, TestserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
