import { Component, OnInit } from '@angular/core';
import { ICellConfigOptions, ITypeCellComponent} from "../../shared-cell-grid-panel/shared-cell-grid-panel.entity";

@Component({
  selector: 'app-cell-ships',
  templateUrl: './cell-chips.component.html',
  styleUrls: ['./cell-chips.component.scss']
})
export class CellChipsComponent implements ITypeCellComponent<string[], unknown> {
  public configOptions: ICellConfigOptions<string[]> | undefined;
}
