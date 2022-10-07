interface IActionPanel {
  actionName: string;
  actionFunction: () => void;
}

type INodeStyles = {
  [styleName in NodeStyle]: string;
};

enum NodeStyle {
  Position = "position",
  Bottom = "bottom",
  BackGroundColor = "background-color"
}

type ActionPanel = Readonly<IActionPanel[]>;

export {
  NodeStyle,
  INodeStyles,
  ActionPanel,
};
