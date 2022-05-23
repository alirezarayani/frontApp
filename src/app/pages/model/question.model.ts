import {Answer} from './answer.model';


export interface Question {
    id: number;
    question: string;
    description: string;
    difficulty: number;
    answers: Answer[];
  }



