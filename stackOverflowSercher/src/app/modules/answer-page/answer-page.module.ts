import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnswerPageRoutingModule } from './answer-page-routing.module';
import { AnswerPageComponent } from './components/answer-page/answer-page.component';
import {SharedProgressBarModule} from "../shared/shared-progress-bar/shared-progress-bar.module";
import {MatDividerModule} from "@angular/material/divider";
import {SharedMessagePanelModule} from "../shared/shared-message-panel/shared-message-panel.module";
import { AnswersListComponent } from './components/answers-list/answers-list.component';
import {SharedHtmlContentPanelModule} from "../shared/shared-html-content-panel/shared-html-content-panel.module";
import { AnswerInfoUserPanelComponent } from './components/answer-info-user-panel/answer-info-user-panel.component';


@NgModule({
  declarations: [
    AnswerPageComponent,
    AnswersListComponent,
    AnswerInfoUserPanelComponent
  ],
    imports: [
        CommonModule,
        AnswerPageRoutingModule,
        SharedProgressBarModule,
        MatDividerModule,
        SharedMessagePanelModule,
        SharedHtmlContentPanelModule
    ]
})
export class AnswerPageModule { }
