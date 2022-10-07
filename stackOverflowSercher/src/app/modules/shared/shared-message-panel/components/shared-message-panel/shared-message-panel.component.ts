import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-message-panel',
  templateUrl: './shared-message-panel.component.html',
  styleUrls: ['./shared-message-panel.component.scss']
})
export class SharedMessagePanelComponent {

  @Input() public emptyMessageText = "";

}
