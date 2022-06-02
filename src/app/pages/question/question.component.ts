import {Component, OnInit} from '@angular/core';
import {QuestionService} from './question.service';
import {ProgramingLanguageService} from './programingLanguage/programingLanguage.service';
import {ProgramingLanguageModel} from '../model/programingLanguage.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {StringUtilService} from '../../core/_base/generic/utils/stringUtilService';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatOptionSelectionChange} from "@angular/material/core";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  title = 'Select Language';
  programingLanguages$: Observable<ProgramingLanguageModel[]>;
  formGroup: FormGroup;

  constructor(private questionService: QuestionService,
              private programingLanguageService: ProgramingLanguageService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loadForm();
    this.getAllProgrammingLanguage();
  }

  private getAllProgrammingLanguage() {
    this.programingLanguages$ = this.programingLanguageService.getAll().pipe(map((response) => {
      if (response.length && response.length > 0) {
        for (const programingLanguageModel of response) {
          programingLanguageModel.language = StringUtilService.firstCharacterToUpperCase(programingLanguageModel.language);
        }
      }
      return response;
    }));
  }

  loadForm() {
    this.formGroup = this.fb.group({
      programming: ['', Validators.required]
    });
  }


  getQuestion(event: MatSelectChange) {
    if (event && event.value){

    }
  }
}
