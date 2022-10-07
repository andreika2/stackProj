import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnswerListRoutingModule } from './answer-list-routing.module';
import { AnswerListComponent } from './components/answer-list/answer-list.component';
import { SharedGridPanelModule } from "../shared/shared-grid-panel/shared-grid-panel.module";
import { SharedCellGridPanelModule } from "../shared/shared-cell-grid-panel/shared-cell-grid-panel.module";
import {SharedProgressBarModule} from "../shared/shared-progress-bar/shared-progress-bar.module";


@NgModule({
  declarations: [
    AnswerListComponent
  ],
    imports: [
        CommonModule,
        AnswerListRoutingModule,
        SharedGridPanelModule,
        SharedCellGridPanelModule,
        SharedProgressBarModule
    ]
})
export class AnswerListModule { }
