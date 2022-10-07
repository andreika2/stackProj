interface IRenderElement<NodeStyle> {
  elementName: string;
  elementFunction: () => void;
  elementStyles: IElementStyles<NodeStyle>;
}

type IElementStyles<NodeStyle> = {
  [styleName in keyof NodeStyle]: string
};

type IRenderElements<NodeStyle> = ReadonlyArray<IRenderElement<NodeStyle>>;

export {
  IRenderElements
}
