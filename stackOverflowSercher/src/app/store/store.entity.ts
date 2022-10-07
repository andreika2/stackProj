interface IInitialState {
  answerList: IQuestionList;
  answerListIsLoading: boolean;
}

interface IQuestionList {
  has_more: boolean
  items: IQuestionListItems[];
  quota_max: number;
  quota_remaining: number;
}

interface IQuestionListItems {
  answer_count: number;
  body?: string;
  closed_date: number;
  closed_reason: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  link: string;
  owner: IOwner;
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
}

interface IOwner {
  account_id: number;
  display_name: string;
  link: string;
  profile_image: string;
  reputation: number;
  user_id: number;
  user_type: string;
}

const INITIAL_STATE: IQuestionList = {
  has_more: false,
  items: [],
  quota_max: -1,
  quota_remaining: -1,
};

const ANSWER_NODE = "answerList";

const ANSWER_LIST_IS_LOADING = "answerListIsLoading";

interface IIsLoadingState {
  [ANSWER_LIST_IS_LOADING] : boolean
}

export {
  IOwner,
  IInitialState,
  IQuestionList,
  IIsLoadingState,
  IQuestionListItems,
  ANSWER_NODE,
  INITIAL_STATE,
  ANSWER_LIST_IS_LOADING
}
