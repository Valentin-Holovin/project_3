import { IIconProps } from 'native-base';

export type Menu = { title?: string; options: MenuOption[] };

export type MenuOption = {
  title: string;
  handlePress: () => void;
  Icon: (props: IIconProps) => JSX.Element;
  isVisible?: boolean;
};
