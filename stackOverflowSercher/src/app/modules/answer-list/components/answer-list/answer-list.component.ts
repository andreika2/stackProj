import { Component, Self } from '@angular/core';
import { AnswerListService}  from "./answer-list.service";
import {
  CellTypes,
  ICellConfigOptions
} from "../../../shared/shared-cell-grid-panel/components/shared-cell-grid-panel/shared-cell-grid-panel.entity";
import {AnswerGridColumns, GRID_CELL_ASSOCIATION} from "./answer-list.entity";

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss'],
  providers: [ AnswerListService ]
})
export class AnswerListComponent {

  constructor(@Self() readonly answerListService: AnswerListService) { }

  readonly emptyMessageText = "Data wasn't load";

  readonly getCellConfigOptions = (cellType: AnswerGridColumns, cellData: unknown): ICellConfigOptions<unknown> => ({
    cellType: GRID_CELL_ASSOCIATION.get(cellType) as CellTypes,
    cellData
  });

  readonly onCellEmmitData = (cellEmmitData: unknown): void => this.answerListService.navigateTo(cellEmmitData as number);
}
