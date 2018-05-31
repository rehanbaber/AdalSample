import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '404', component: NotFoundComponent }])
  ],
  declarations: [NotFoundComponent]
})
export class ErrorPagesModule { }
