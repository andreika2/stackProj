import {Component, EventEmitter, Output} from '@angular/core';
import {ICellConfigOptions, ITypeCellComponent} from "../../shared-cell-grid-panel/shared-cell-grid-panel.entity";
import {ITitleData} from "../../../../../answer-list/components/answer-list/answer-list.entity";

@Component({
  selector: 'app-cell-text',
  templateUrl: './cell-text.component.html',
  styleUrls: ['./cell-text.component.scss']
})
export class CellTextComponent implements ITypeCellComponent<ITitleData, number> {

  @Output() public cellEmitData: EventEmitter<number> | undefined = new EventEmitter<number>();

  public configOptions: ICellConfigOptions<ITitleData> | undefined;

  readonly textCellClick = (cellData: number | undefined): void => this.cellEmitData?.emit(cellData || 0);

}
