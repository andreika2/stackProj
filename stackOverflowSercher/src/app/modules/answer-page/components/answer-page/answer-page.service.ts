import {Injectable, OnDestroy} from '@angular/core';
import {IQuestionList, IQuestionListItems} from "../../../../store/store.entity";
import {forkJoin, Observable, Subject} from "rxjs";
import {map, takeUntil} from "rxjs/operators";
import {ApiService} from "../../../../services/api-service/api.service";
import {
  ANSWER_PAGE_FILTER_PARAM,
  AnswerPageData,
  GET_ANSWERS_CONTENT_URL,
  GET_QUESTION_CONTENT_URL,
  IAnswerPageData, IPanelInfo, QUESTION_NUMBER_INDEX, URL_SPLIT_SYMBOL
} from "./answer-page.entity";
import {IApiQueryParams} from "../../../../services/api-service/api.service.entity";
import {Router} from "@angular/router";
import {IAnswerPanelInfo} from "../../answer-page.module.entity";

@Injectable()
export class AnswerPageService implements OnDestroy {

  public questionPageData$: Observable<IAnswerPageData> | undefined;
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly router: Router,
              private readonly apiService: ApiService<IQuestionList>) { }

  readonly initAnswerPageData = (): void => this.getAnswerPageContent();

  readonly getAnswerPanelInfo = (questionPageData$: Observable<IAnswerPageData> | undefined): Observable<IPanelInfo> | undefined =>
    questionPageData$?.pipe(
      map(({ answerListData, questionData }) => ({
        questionInfoPanel: AnswerPageService.getInfoPanel(questionData),
        answerListInfoPanel: answerListData.map(answer => AnswerPageService.getInfoPanel(answer))
      }))
    );

  private readonly getFilter = (): IApiQueryParams => ({ filter: ANSWER_PAGE_FILTER_PARAM });

  private readonly getQuestionIdFromRouter = (): number => Number(this.router.url.split(URL_SPLIT_SYMBOL)[QUESTION_NUMBER_INDEX]);

  private getAnswerPageContent(): void {
    const questionId = this.getQuestionIdFromRouter();
    this.questionPageData$ = forkJoin([
      this.apiService.getRequest(`${GET_QUESTION_CONTENT_URL}/${questionId}`, this.getFilter()),
      this.apiService.getRequest(`${GET_QUESTION_CONTENT_URL}/${questionId}/${GET_ANSWERS_CONTENT_URL}`, this.getFilter())
    ]).pipe(
      takeUntil(this.destroy$),
      map(answerPageData => ({
        questionData: answerPageData[AnswerPageData.QUESTION_DATA].items[0],
        answerListData: answerPageData[AnswerPageData.ANSWER_LIST].items
      }))
    );
  }

  static getInfoPanel({ owner, score }: IQuestionListItems): IAnswerPanelInfo {
    const { link, profile_image, display_name } = owner;
    return {
      score,
      owner: { link, profile_image, display_name }
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
