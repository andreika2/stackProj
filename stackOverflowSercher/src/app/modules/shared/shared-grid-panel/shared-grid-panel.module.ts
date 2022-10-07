import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedGridPanelComponent } from './components/shared-grid-panel/shared-grid-panel.component';
import { MatTableModule } from "@angular/material/table";
import {SharedMessagePanelModule} from "../shared-message-panel/shared-message-panel.module";



@NgModule({
  declarations: [
    SharedGridPanelComponent
  ],
  exports: [
    SharedGridPanelComponent
  ],
    imports: [
        CommonModule,
        MatTableModule,
        SharedMessagePanelModule
    ]
})
export class SharedGridPanelModule { }
