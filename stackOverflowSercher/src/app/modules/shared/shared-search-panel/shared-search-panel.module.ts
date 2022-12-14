import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedSearchPanelComponent } from './components/shared-search-panel/shared-search-panel.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SharedSearchPanelComponent
  ],
  exports: [
    SharedSearchPanelComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class SharedSearchPanelModule { }
