import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedSearchPanelModule } from "./shared-search-panel/shared-search-panel.module";
import { SharedCellGridPanelModule } from "./shared-cell-grid-panel/shared-cell-grid-panel.module";
import { SharedMessagePanelModule } from "./shared-message-panel/shared-message-panel.module";
import { SharedGridPanelModule } from "./shared-grid-panel/shared-grid-panel.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    SharedSearchPanelModule,
    SharedCellGridPanelModule,
    SharedGridPanelModule,
    SharedMessagePanelModule
  ]
})
export class SharedModule { }
