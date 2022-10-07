import { Component } from '@angular/core';
import { ICellConfigOptions, ITypeCellComponent} from "../../shared-cell-grid-panel/shared-cell-grid-panel.entity";

@Component({
  selector: 'app-cell-date',
  templateUrl: './cell-date.component.html',
  styleUrls: ['./cell-date.component.scss']
})
export class CellDateComponent implements ITypeCellComponent<number, unknown> {
  public configOptions: ICellConfigOptions<number> | undefined;
}
