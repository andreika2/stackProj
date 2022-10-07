import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHtmlContentPanelComponent } from './components/shared-html-content-panel/shared-html-content-panel.component';



@NgModule({
    declarations: [
        SharedHtmlContentPanelComponent
    ],
    exports: [
        SharedHtmlContentPanelComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedHtmlContentPanelModule { }
