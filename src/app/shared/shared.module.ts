import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from '../app.routing.module';



@NgModule({
    declarations: [HeaderComponent],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})
export class SharedModule { }
