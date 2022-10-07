import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-shared-grid-panel',
  templateUrl: './shared-grid-panel.component.html',
  styleUrls: ['./shared-grid-panel.component.scss']
})
export class SharedGridPanelComponent<T> {

  @Input() public gridPanelData: T[] = [];
  @Input() public gridDataDisplayColumns: string[] = [];
  @Input() public customCell: TemplateRef<unknown> | undefined;
  @Input() public emptyMessageText = "";

}
