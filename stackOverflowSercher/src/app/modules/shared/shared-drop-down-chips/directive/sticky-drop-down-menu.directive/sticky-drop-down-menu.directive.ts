import {
  AfterViewChecked, ApplicationRef, ComponentFactoryResolver, ComponentRef,
  Directive, Injector, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef, ViewRef
} from '@angular/core';

import { StickyDropDownActionsComponent } from "./components/sticky-drop-down-actions/sticky-drop-down-actions.component";
import {ActionPanel, INodeStyles, NodeStyle} from "./sticky-drop-down-menu.directive.entity";
import {
  ELEMENT_TAG_INDEX, INITIAL_TAG_NAME, NODE_WRAPPER_STYLES,
  PROJECTABLE_NODES, SEARCH_TAG_NAME, STICKY_CONTAINER_INDEX, STICKY_PANEL_CLASS_NAME
} from "./sticky-drop-down-menu.directive.config";
import {BaseStructureDirective} from "../base-structure.directive/base-structure.directive";
import {IRenderElements} from "../base-structure.directive/base-structure.directive.entity";

@Directive({
  selector: '[appStickyDropDownMenu]'
})
export class StickyDropDownMenuDirective
  extends BaseStructureDirective<INodeStyles, StickyDropDownActionsComponent>
  implements OnInit, AfterViewChecked {

  @Input()
  public set actionsPanelList(actionsPanelList: IRenderElements<INodeStyles> ) {
    this.renderElements = actionsPanelList;
    this.clearStickyContainer();
    this.ngAfterViewChecked();
  }

  constructor(
    private readonly injector: Injector,
    private readonly renderer: Renderer2,
    readonly applicationRef: ApplicationRef,
    readonly template: TemplateRef<unknown>,
    readonly viewContainerRef: ViewContainerRef,
    private readonly resolver: ComponentFactoryResolver,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  public ngAfterViewChecked(): void {
    this.createStickyContainer();
  }

  readonly clearStickyContainer = (): void => this.stickyPanelContainer[STICKY_CONTAINER_INDEX]?.remove();

  readonly isElementAvailable = (element: Element, { length }: HTMLCollectionOf<Element>): boolean => (
    element && !length && !!this.renderElements.length
  );

  private get templateParentNode(): HTMLElement {
    return this.template.elementRef.nativeElement.parentNode;
  }

  private get elementContainer(): Element {
    return this.templateParentNode.getElementsByTagName(SEARCH_TAG_NAME)[ELEMENT_TAG_INDEX];
  }

  private get stickyPanelContainer(): HTMLCollectionOf<Element> {
    return this.templateParentNode.getElementsByClassName(STICKY_PANEL_CLASS_NAME);
  }

  private createStickyContainer(): void {
    if (this.isElementAvailable(this.elementContainer, this.stickyPanelContainer)) {
      const initialNode = this.createNodeWrapper();
      this.elementContainer.parentElement?.appendChild(initialNode);
      this.applicationRef.attachView(this.createHostView(initialNode));
    }
  }

  private createHostView(initialNode: HTMLDivElement): ViewRef {
    const stickyComponentRef = this.createStickyComponent(initialNode);
    stickyComponentRef.instance.actionsPanelList = this.renderElements;
    return stickyComponentRef.hostView;
  }

  private createStickyComponent(initialNode: HTMLDivElement): ComponentRef<StickyDropDownActionsComponent> {
    return this.resolver
      .resolveComponentFactory(StickyDropDownActionsComponent)
      .create(this.injector, PROJECTABLE_NODES, initialNode);
  }

  private createNodeWrapper(): HTMLDivElement {
    const initialNode: HTMLDivElement = this.renderer.createElement(INITIAL_TAG_NAME);
    this.renderer.addClass(initialNode, STICKY_PANEL_CLASS_NAME);
    this.setNodeWrapperStyles(initialNode);
    return initialNode;
  }

  private setNodeWrapperStyles(initialNode: HTMLDivElement): void {
    Object.keys(NODE_WRAPPER_STYLES).forEach(
      key => this.renderer.setStyle(initialNode, key, NODE_WRAPPER_STYLES[key as NodeStyle])
    );
  }

}

