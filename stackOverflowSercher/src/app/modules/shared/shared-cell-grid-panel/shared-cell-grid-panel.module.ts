import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCellGridPanelComponent } from './components/shared-cell-grid-panel/shared-cell-grid-panel.component';
import { CellTextComponent } from './components/cell-grid-panel-types/cell-text/cell-text.component';
import { CellChipsComponent } from './components/cell-grid-panel-types/cell-chips/cell-chips.component';
import { CellUserComponent } from './components/cell-grid-panel-types/cell-user/cell-user.component';
import { CellDateComponent } from './components/cell-grid-panel-types/cell-date/cell-date.component';
import {MatChipsModule} from "@angular/material/chips";



@NgModule({
  declarations: [
    SharedCellGridPanelComponent,
    CellTextComponent,
    CellChipsComponent,
    CellUserComponent,
    CellDateComponent
  ],
  exports: [
    SharedCellGridPanelComponent,
  ],
    imports: [
        CommonModule,
        MatChipsModule
    ]
})
export class SharedCellGridPanelModule { }
