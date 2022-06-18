import {Component, OnInit} from '@angular/core';
import {QuestionService} from './question.service';
import {ProgramingLanguageService} from './programingLanguage/programingLanguage.service';
import {ProgramingLanguageModel} from '../model/programingLanguage.model';
import {interval, Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {StringUtilService} from '../../core/_base/generic/utils/stringUtilService';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSelectChange} from '@angular/material/select';
import {Question} from '../model/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  title = 'Select Language';
  programingLanguages$: Observable<ProgramingLanguageModel[]>;
  timerSub: Subscription;
  questions: Question[];
  formGroup: FormGroup;
  index = 0;
  isHidden = true;
  timer = 24000;

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
      programming: ['', Validators.required],
      answer: [''],
    });
  }

  getQuestion(event: MatSelectChange) {
    if (event && event.value) {
      this.questionService.getListByID(event.value).subscribe(response => {
        this.questions = response;
        this.isHidden = false;
        this.moveToNextQuestion();
      });
    }
  }

  nextQuestion() {
    this.index = ++this.index;
  }

  checkState(questionID: number, answerID: number) {
    setTimeout(() => {
      this.moveToNextQuestion();
    }, 5000);
  }

  moveToNextQuestion() {
    this.timerSub = interval(this.timer).subscribe(() => {
      if (this.index === this.questions.length - 1) {
        this.timerSub.unsubscribe();
      } else {
        this.index++;
      }
    });
  }
}
