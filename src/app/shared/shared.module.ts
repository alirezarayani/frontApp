import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app.routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class SharedModule {
}
