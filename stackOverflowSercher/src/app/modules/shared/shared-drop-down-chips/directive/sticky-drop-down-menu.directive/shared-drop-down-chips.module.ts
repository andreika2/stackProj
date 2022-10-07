import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDropDownChipsComponent } from '../../components/shared-drop-down-chips/shared-drop-down-chips.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatOptionModule} from "@angular/material/core";
import { StickyDropDownMenuDirective } from './sticky-drop-down-menu.directive';
import { StickyDropDownActionsComponent } from './components/sticky-drop-down-actions/sticky-drop-down-actions.component';



@NgModule({
  declarations: [
    SharedDropDownChipsComponent,
    StickyDropDownMenuDirective,
    StickyDropDownActionsComponent
  ],
  exports: [
    SharedDropDownChipsComponent,
    StickyDropDownMenuDirective
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatOptionModule
  ]
})
export class SharedDropDownChipsModule { }
