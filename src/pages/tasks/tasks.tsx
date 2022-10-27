import { RouteProp } from '@react-navigation/core';
import { Box } from 'native-base';
import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { Layout, PagerViewHeaderList } from '../../components';
import { chatTheme, items, routesPageAdmin, routesPageUser } from '../../constants';
import { Tag, UserRole } from '../../graphql/generated';
import { useAuth, useNavigationPanel } from '../../hooks';
import { BottomSheets } from './bottom-sheets';
import { HeaderTasksTitle } from './header-tasks-title';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export const Tasks = () => {
  const [filterTags, setFilterTags] = React.useState<Tag[] | null>(null);

  const applyFilterTags = (tags: Tag[] | null) => {
    setFilterTags(tags);
  };

  const { ref, ...navigationPanel } = useNavigationPanel(2);

  const { currentUserData } = useAuth();

  const onPressHeaderItem = React.useCallback(
    (index: number) => navigationPanel.setPage(index),
    [navigationPanel],
  );

  return (
    <Layout isKeyboardAvoiding={false}>
      <Box flex={1}>
        <HeaderTasksTitle title='Задачи' filterTags={filterTags} />
        <PagerViewHeaderList
          theme={chatTheme.greenTheme.header}
          data={[
            ...(currentUserData?.role === UserRole.Admin ? items.myTask.headerAdminItems : []),
            ...items.myTask.headerUserItem,
          ]}
          onPressHeaderItem={onPressHeaderItem}
          onPageScrollOffset={navigationPanel.onPageScrollOffset}
          onPageScrollPosition={navigationPanel.onPageScrollPosition}
          activePage={navigationPanel.activePage}
        />
        <AnimatedPagerView
          ref={ref}
          style={styles.PagerView}
          initialPage={0}
          layoutDirection='ltr'
          scrollEnabled={false}
          onPageScroll={navigationPanel.onPageScroll}
          onPageSelected={navigationPanel.onPageSelected}
          pageMargin={10}
          orientation='horizontal'
          transitionStyle='scroll'
          showPageIndicator={navigationPanel.dotsEnabled}
        >
          {(currentUserData?.role === UserRole.Admin ? routesPageAdmin : routesPageUser).map(
            (item, index) => {
              const Provider = item.provider;
              const Components = item.components;

              // eslint-disable-next-line react-hooks/rules-of-hooks
              return React.useMemo(
                () => (
                  <View key={index + 1} style={styles.PagerView} collapsable={false}>
                    <Provider filterTags={filterTags}>
                      <Components />
                    </Provider>
                  </View>
                ),
                [filterTags],
              );
            },
          )}
        </AnimatedPagerView>
        <BottomSheets applyFilterTags={applyFilterTags} filterTags={filterTags} />
      </Box>
    </Layout>
  );
};

const styles = StyleSheet.create({
  PagerView: {
    flex: 1,
  },
});
