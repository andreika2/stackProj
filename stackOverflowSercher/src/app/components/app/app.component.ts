import { Component } from '@angular/core';
import {
  ActionPanel
} from "../../modules/shared/shared-drop-down-chips/directive/sticky-drop-down-menu.directive/sticky-drop-down-menu.directive.entity";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  test: ActionPanel = [
    {
      actionName: "Test",
      actionFunction: () => {
        alert("test")
      }
    }
  ]
}
