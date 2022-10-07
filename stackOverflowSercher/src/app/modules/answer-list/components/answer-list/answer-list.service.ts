import {Injectable, OnDestroy} from '@angular/core';
import { IQuestionList } from "../../../../store/store.entity";
import { Store } from "@ngrx/store";
import {SELECT_ANSWER_LIST_IS_LOADING, SELECT_ANSWER_LIST_ITEMS} from "../../../../store/selectors";
import {map, takeUntil} from "rxjs/operators";
import { ANSWER_GRID_COLUMNS, AnswerGridColumns, IAnswerListGridData } from "./answer-list.entity";
import {Observable, Subject} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AnswerListService implements OnDestroy {

  readonly destroy$ = new Subject<void>();

  readonly answerListItems: Observable<IAnswerListGridData[]>  =
    this.store.select(SELECT_ANSWER_LIST_ITEMS).pipe(
      takeUntil(this.destroy$),
      map(
        listItems => listItems.map(
            ({ owner, tags, title, creation_date, question_id}) => ({
              owner,
              title: { title, question_id },
              tags,
              creation_date
            })
        )
      )
  );

  readonly answerListIsLoading: Observable<boolean> =
    this.store.select(SELECT_ANSWER_LIST_IS_LOADING).pipe(
      takeUntil(this.destroy$)
    )

  readonly answerDisplayColumns: AnswerGridColumns[] = ANSWER_GRID_COLUMNS;

  constructor(readonly store: Store<IQuestionList>,
              readonly router: Router) { }

  public navigateTo(questionId: number): void {
    this.router.navigate([`/answer-page/${ questionId }`])
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
