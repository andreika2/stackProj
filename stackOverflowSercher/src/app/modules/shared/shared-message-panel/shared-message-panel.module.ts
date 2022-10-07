import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMessagePanelComponent } from './components/shared-message-panel/shared-message-panel.component';
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
  declarations: [
    SharedMessagePanelComponent
  ],
  exports: [
    SharedMessagePanelComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class SharedMessagePanelModule { }
