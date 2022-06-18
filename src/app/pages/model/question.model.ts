import {Answer} from './answer.model';
import {BizEntityModel} from './bizEntity.model';

export interface Question extends BizEntityModel{
    question: string;
    description: string;
    difficulty: number;
    answers: Answer[];
  }



