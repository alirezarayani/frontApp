import {GenericService} from '../../../core/_base/generic/service/generic.service';
import {ProgramingLanguageModel} from '../../model/programingLanguage.model';
import {HttpClient} from '@angular/common/http';
import {ApiConstraint} from '../../../utility/ApiConstraint';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProgramingLanguageService extends GenericService<ProgramingLanguageModel> {
  constructor(http: HttpClient) {
    super(http, ApiConstraint.PROGRAMMING_LANGUAGES_API);
  }

}
