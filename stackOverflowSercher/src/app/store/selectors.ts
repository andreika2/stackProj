import { createFeatureSelector, createSelector } from "@ngrx/store";
import {ANSWER_LIST_IS_LOADING, ANSWER_NODE, IQuestionList} from "./store.entity";

const SELECT_ANSWER = createFeatureSelector<IQuestionList>(ANSWER_NODE);
const SELECT_LIST_IS_LOADING = createFeatureSelector<boolean>(ANSWER_LIST_IS_LOADING);

const SELECT_ANSWER_LIST_ITEMS = createSelector(
  SELECT_ANSWER,
  (state: IQuestionList) => state.items
);

const SELECT_ANSWER_LIST_IS_LOADING = createSelector(
  SELECT_LIST_IS_LOADING,
  (state: boolean) => state
);

export {
  SELECT_ANSWER_LIST_ITEMS,
  SELECT_ANSWER_LIST_IS_LOADING
}
