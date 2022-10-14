import {IRenderElements} from "./base-structure.directive.entity";
import {DEFAULT_RENDER_ELEMENT} from "./base-structure.directive.config";
import {ActionPanel} from "../sticky-drop-down-menu.directive/sticky-drop-down-menu.directive.entity";

abstract class BaseStructureDirective<NodeStyles, ComponentType> {

  public set renderElements(renderElements: ActionPanel) {
    this._renderElements = renderElements ?? DEFAULT_RENDER_ELEMENT;
  }

  public get renderElements(): ActionPanel {
    return this._renderElements;
  }

  private _renderElements: ActionPanel = DEFAULT_RENDER_ELEMENT as ActionPanel;

}

export {
  BaseStructureDirective
};
