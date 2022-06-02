import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionComponent} from './question/question.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [QuestionComponent],
  exports: [
    QuestionComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule {
}
