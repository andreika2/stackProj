import { createAction, props } from "@ngrx/store";
import {ANSWER_LIST_IS_LOADING, ANSWER_NODE, IQuestionList} from "./store.entity";

const SET_QUESTION_LIST = createAction(
  "Set question list",
  props<{ [ANSWER_NODE]: IQuestionList }>()
);

const SET_ANSWER_LIST_IS_LOADING = createAction(
  "Set answer list is loading",
  props<{ [ANSWER_LIST_IS_LOADING]: boolean }>()
);

export {
  SET_QUESTION_LIST,
  SET_ANSWER_LIST_IS_LOADING
};
