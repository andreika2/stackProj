import {Component, Input} from '@angular/core';
import {INodeStyles} from "../../sticky-drop-down-menu.directive.entity";
import {DEFAULT_ACTION_PANEL_LIST} from "../../sticky-drop-down-menu.directive.config";
import {IRenderElements} from "../../../base-structure.directive/base-structure.directive.entity";

@Component({
  selector: 'app-sticky-drop-down-actions',
  templateUrl: './sticky-drop-down-actions.component.html',
  styleUrls: ['./sticky-drop-down-actions.component.scss']
})
export class StickyDropDownActionsComponent {
  @Input() public actionsPanelList: IRenderElements<INodeStyles> = DEFAULT_ACTION_PANEL_LIST;
}
