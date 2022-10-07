import {EventEmitter, Type, ViewContainerRef} from "@angular/core";
import {CellTextComponent} from "../cell-grid-panel-types/cell-text/cell-text.component";
import {CellChipsComponent} from "../cell-grid-panel-types/cell-chips/cell-chips.component";
import {CellDateComponent} from "../cell-grid-panel-types/cell-date/cell-date.component";
import {CellUserComponent} from "../cell-grid-panel-types/cell-user/cell-user.component";

enum CellTypes {
  User = "User",
  Chips = "Chips" ,
  Text = "Text",
  Date = "Date"
}

interface ITypeCellComponent<T, P> {
  configOptions: ICellConfigOptions<T> | undefined;
  cellEmitData?: EventEmitter<P>
}

interface ICellConfigOptions<T> {
  cellType: CellTypes;
  cellData: T;
}

const DEFAULT_CONTAINER_VALUE = {} as ViewContainerRef;

const DEFAULT_CELL_CONFIG_OPTIONS: ICellConfigOptions<object>  = {
  cellType: CellTypes.Text,
  cellData: {}
};

const CELL_TYPES_MAP: Map<CellTypes, Type<ITypeCellComponent<unknown, unknown>>> =
  new Map<CellTypes, Type<ITypeCellComponent<unknown, unknown>>>()
    .set(CellTypes.Text, CellTextComponent as Type<ITypeCellComponent<unknown, unknown>>)
    .set(CellTypes.Chips, CellChipsComponent)
    .set(CellTypes.Date, CellDateComponent)
    .set(CellTypes.User, CellUserComponent);

export {
  CellTypes,
  CELL_TYPES_MAP,
  ICellConfigOptions,
  ITypeCellComponent,
  DEFAULT_CONTAINER_VALUE,
  DEFAULT_CELL_CONFIG_OPTIONS
};
