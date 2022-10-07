import { Component } from '@angular/core';
import {ICellConfigOptions, ITypeCellComponent} from "../../shared-cell-grid-panel/shared-cell-grid-panel.entity";
import {IOwner} from "../../../../../../store/store.entity";

@Component({
  selector: 'app-cell-user',
  templateUrl: './cell-user.component.html',
  styleUrls: ['./cell-user.component.scss']
})
export class CellUserComponent implements ITypeCellComponent<IOwner, unknown> {

  public configOptions: ICellConfigOptions<IOwner> | undefined;

}
