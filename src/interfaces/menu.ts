export interface IMenuItem {
  key: string;
}
export interface IMenu {
  key: string;
  //   icon?: {
  //     fill?: React.ElementType;
  //     outline?: React.ElementType;
  //   };
  icon?: React.ElementType;
  path?: string;
  children?: IMenuItem[];
  type?: "group" | "divider";
  openSubMenu?: boolean;
}
