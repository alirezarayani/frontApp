import {GenericService} from '../../core/_base/generic/service/generic.service';
import {Question} from '../model/question.model';
import {HttpClient} from '@angular/common/http';
import {ApiConstraint} from '../../utility/ApiConstraint';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class QuestionService extends GenericService<Question> {
  constructor(http: HttpClient) {
    super(http, ApiConstraint.QUESTION_API);
  }
}
