import {IOwner} from "../../../../store/store.entity";
import {CellTypes} from "../../../shared/shared-cell-grid-panel/components/shared-cell-grid-panel/shared-cell-grid-panel.entity";

interface IAnswerListGridData {
  owner: IOwner;
  tags: string[];
  title: ITitleData;
  creation_date: number;
}

interface ITitleData {
  title: string;
  question_id: number;
}

enum AnswerGridColumns {
  Owner = "owner",
  Tags = "tags",
  Title = "title",
  Creation_date = "creation_date"
}

const ANSWER_GRID_COLUMNS =  [
  AnswerGridColumns.Owner,
  AnswerGridColumns.Title,
  AnswerGridColumns.Tags,
  AnswerGridColumns.Creation_date
];

const GRID_CELL_ASSOCIATION =
  new Map<AnswerGridColumns, CellTypes>()
    .set(AnswerGridColumns.Title, CellTypes.Text)
    .set(AnswerGridColumns.Tags, CellTypes.Chips)
    .set(AnswerGridColumns.Owner, CellTypes.User)
    .set(AnswerGridColumns.Creation_date, CellTypes.Date);

export {
  ITitleData,
  AnswerGridColumns,
  IAnswerListGridData,
  ANSWER_GRID_COLUMNS,
  GRID_CELL_ASSOCIATION
};
