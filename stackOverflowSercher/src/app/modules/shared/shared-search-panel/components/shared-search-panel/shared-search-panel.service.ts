import {Injectable, OnDestroy} from '@angular/core';
import { ApiService } from "../../../../../services/api-service/api.service";
import { IApiQueryParams } from "../../../../../services/api-service/api.service.entity";
import { SEARCH_END_POINT_NAME } from "./shared-search-panel.component.entity";
import { SET_ANSWER_LIST_IS_LOADING, SET_QUESTION_LIST } from "../../../../../store/actions";
import { Store } from "@ngrx/store";
import { IQuestionList, IInitialState, IIsLoadingState } from "../../../../../store/store.entity";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Injectable()
export class SharedSearchPanelService implements OnDestroy {

  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor(private readonly apiService: ApiService<IQuestionList>,
              private readonly router: Router,
              private readonly store: Store<IInitialState>) { }

  private readonly getQueryParams = (searchText: string): IApiQueryParams => ({ q: searchText });

  private readonly getIsLoading = (answerListIsLoading: boolean): IIsLoadingState => ({ answerListIsLoading });

  public searchRequest(searchText: string, redirectUrl: string): void {
    this.navigateToPageByUrl(redirectUrl);
    this.store.dispatch(SET_ANSWER_LIST_IS_LOADING(this.getIsLoading(true)));
    this.apiService
      .getRequest(SEARCH_END_POINT_NAME, this.getQueryParams(searchText))
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        answerList => {
          this.store.dispatch(SET_ANSWER_LIST_IS_LOADING(this.getIsLoading(false)));
          this.store.dispatch(SET_QUESTION_LIST({ answerList }))
        }
      );
  }

  private navigateToPageByUrl(redirectUrl: string): void {
    if (this.router.url !== redirectUrl) {
      this.router.navigate([redirectUrl]);
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
