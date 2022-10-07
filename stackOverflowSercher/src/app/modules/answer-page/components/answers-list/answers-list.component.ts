import {Component, Input} from '@angular/core';
import {IQuestionListItems} from "../../../../store/store.entity";
import {EMPTY_ANSWER_LIST_TEXT} from "./answers-list.entity";

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.scss']
})
export class AnswersListComponent {
  @Input() public questionAnswers: IQuestionListItems[] = [];
  public emptyAnswerListText = EMPTY_ANSWER_LIST_TEXT;
}
