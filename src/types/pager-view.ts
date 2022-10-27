import { IIconProps } from 'native-base';

import { IBottomTabsIconProps } from './navigations';

export type headerItemType = {
  title: string;
  icon: (props: IBottomTabsIconProps) => JSX.Element;
};

export type headerAdminItemType = {
  title: string;
  icon: (props: IBottomTabsIconProps) => JSX.Element;
};

export type headerUserItemType = {
  title: string;
  icon: (props: IBottomTabsIconProps) => JSX.Element;
};

export type pageEmpty = {
  IconComponent: (props: IIconProps) => JSX.Element;
  iconSize: number | string;
  title: string;
  subTitle: string;
};

export type ItemsType = {
  [property: string]: {
    headerItems: headerItemType[];
    headerAdminItems: headerAdminItemType[];
    headerUserItem: headerUserItemType[];
    pageEmpty: pageEmpty[];
  };
};

export type headerItemsType = {
  [property: string]: Array<headerItemType>;
};

export type headerAdminItemsType = {
  [property: string]: Array<headerAdminItemType>;
};

export type headerUserItemsType = {
  [property: string]: Array<headerUserItemType>;
};

