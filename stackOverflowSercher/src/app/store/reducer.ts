import {ActionReducerMap, createReducer, on} from "@ngrx/store";
import {ANSWER_LIST_IS_LOADING, ANSWER_NODE, IInitialState, INITIAL_STATE} from "./store.entity";
import {SET_ANSWER_LIST_IS_LOADING, SET_QUESTION_LIST} from "./actions";

const questionListReducer = createReducer(
  INITIAL_STATE,
  on(SET_QUESTION_LIST, (state, { answerList }) => ({ ...state, ...answerList }))
);

const answerListIsLoading = createReducer(
  false,
  on(SET_ANSWER_LIST_IS_LOADING, (state, { answerListIsLoading }) => answerListIsLoading)
)

const reducer: ActionReducerMap<IInitialState> = {
  [ANSWER_NODE]: questionListReducer,
  [ANSWER_LIST_IS_LOADING]: answerListIsLoading
}

export {
  reducer
};
