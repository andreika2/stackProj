import {IRenderElements} from "./base-structure.directive.entity";
import {DEFAULT_RENDER_ELEMENT} from "./base-structure.directive.config";

abstract class BaseStructureDirective<NodeStyles, ComponentType> {

  public set renderElements(renderElements: IRenderElements<NodeStyles>) {
    this._renderElements = renderElements ?? DEFAULT_RENDER_ELEMENT;
  }

  public get renderElements(): IRenderElements<NodeStyles> {
    return this._renderElements;
  }

  private _renderElements: IRenderElements<NodeStyles> = DEFAULT_RENDER_ELEMENT as IRenderElements<NodeStyles>;

}

export {
  BaseStructureDirective
};
