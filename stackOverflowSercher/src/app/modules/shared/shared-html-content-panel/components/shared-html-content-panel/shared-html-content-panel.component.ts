import {Component, Input} from '@angular/core';
import {DEFAULT_INNER_HTML_CONTENT} from "./shared-html-content-panel.component.entity";

@Component({
  selector: 'app-shared-html-content-panel',
  templateUrl: './shared-html-content-panel.component.html',
  styleUrls: ['./shared-html-content-panel.component.scss']
})
export class SharedHtmlContentPanelComponent {

  @Input() public innerHTMLContent = DEFAULT_INNER_HTML_CONTENT;

}
