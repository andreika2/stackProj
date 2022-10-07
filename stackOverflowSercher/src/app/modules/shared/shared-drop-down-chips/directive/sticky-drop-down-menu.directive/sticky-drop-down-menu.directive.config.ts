import {ActionPanel, INodeStyles, NodeStyle} from "./sticky-drop-down-menu.directive.entity";
import {IRenderElements} from "../base-structure.directive/base-structure.directive.entity";

const DEFAULT_ACTION_PANEL_LIST: IRenderElements<INodeStyles> = [];

const SEARCH_TAG_NAME = "mat-option";

const STICKY_PANEL_CLASS_NAME = "sticky-panel";

const INITIAL_TAG_NAME = "div";

const STICKY_CONTAINER_INDEX = 0;

const ELEMENT_TAG_INDEX = 0;

const PROJECTABLE_NODES: any[][] = [];

const NODE_WRAPPER_STYLES: INodeStyles = {
  [NodeStyle.Position]: "sticky",
  [NodeStyle.Bottom]: "0",
  [NodeStyle.BackGroundColor]: "white"
};

export {
  SEARCH_TAG_NAME,
  INITIAL_TAG_NAME,
  ELEMENT_TAG_INDEX,
  PROJECTABLE_NODES,
  NODE_WRAPPER_STYLES,
  STICKY_CONTAINER_INDEX,
  STICKY_PANEL_CLASS_NAME,
  DEFAULT_ACTION_PANEL_LIST
};
