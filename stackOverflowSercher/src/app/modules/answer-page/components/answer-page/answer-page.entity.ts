import {IQuestionListItems} from "../../../../store/store.entity";
import {IAnswerPanelInfo} from "../../answer-page.module.entity";

const GET_QUESTION_CONTENT_URL = "questions";

const GET_ANSWERS_CONTENT_URL = "answers";

const ANSWER_PAGE_FILTER_PARAM = "withbody";

const URL_SPLIT_SYMBOL = "/";

const QUESTION_NUMBER_INDEX = 2;

interface IAnswerPageData {
  questionData: IQuestionListItems;
  answerListData: IQuestionListItems[];
}

interface IPanelInfo {
  questionInfoPanel: IAnswerPanelInfo;
  answerListInfoPanel: IAnswerPanelInfo[]
}

enum AnswerPageData {
  QUESTION_DATA = 0,
  ANSWER_LIST = 1
}

export {
  IPanelInfo,
  AnswerPageData,
  IAnswerPageData,
  URL_SPLIT_SYMBOL,
  QUESTION_NUMBER_INDEX,
  GET_ANSWERS_CONTENT_URL,
  GET_QUESTION_CONTENT_URL,
  ANSWER_PAGE_FILTER_PARAM
}
