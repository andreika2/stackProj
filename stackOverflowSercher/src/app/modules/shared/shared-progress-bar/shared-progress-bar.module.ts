import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedProgressBarComponent } from './components/shared-progress-bar/shared-progress-bar.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [
    SharedProgressBarComponent
  ],
  exports: [
    SharedProgressBarComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule
  ]
})
export class SharedProgressBarModule { }
