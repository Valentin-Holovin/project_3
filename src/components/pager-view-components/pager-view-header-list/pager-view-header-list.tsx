import { HStack, IBoxProps } from 'native-base';
import React from 'react';
import { Animated } from 'react-native';

import { headerThemeType } from '../../../types/chat';
import { headerItemType } from '../../../types/pager-view';
import { Indicator } from '../pager-view-header-indicator/pager-view-header-indicator';
import { PagerViewHeaderItem } from '../pager-view-header-item/pager-view-header-item';

type Props = {
  data: headerItemType[];
  activePage: number;
  onPageScrollOffset: Animated.Value;
  onPageScrollPosition: Animated.Value;
  onPressHeaderItem: (index: number) => void;
  wrapperOptions?: IBoxProps;
  theme: headerThemeType;
};

export const PagerViewHeaderList = ({
  data,
  activePage,
  onPageScrollOffset,
  onPageScrollPosition,
  onPressHeaderItem,
  wrapperOptions,
  theme,
}: Props) => {
  return (
    <HStack alignItems='center' height={'48px'} {...wrapperOptions}>
      {React.useMemo(
        () =>
          data.map((item, index) => (
            <PagerViewHeaderItem
              key={index}
              Icon={item.icon}
              isActive={activePage === index}
              title={item.title}
              onPress={() => onPressHeaderItem(index)}
              backgroundColor={theme.headerBackgroundColor}
            />
          )),
        [activePage, onPressHeaderItem, data, theme.headerBackgroundColor],
      )}
      <Indicator
        onPageScrollOffset={onPageScrollOffset}
        onPageScrollPosition={onPageScrollPosition}
        size={data.length}
        color={theme.headerIndicatorColor}
      />
    </HStack>
  );
};
