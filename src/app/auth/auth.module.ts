import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: LoginComponent
      }]
  }
];

@NgModule({
  declarations: [LoginComponent, AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule {
}
