import { Box } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Note, UserRole } from '../../../graphql/generated';
import { useAuth, useNotes } from '../../../hooks';
import { notesThemeType } from '../../../types/chat';
import { pageEmpty } from '../../../types/pager-view';
import { getPath } from '../../../utils';
import { EmptyListComponent } from '../../empty-list-component/empty-list-component';
import { RenderItem } from '../rendet-item/rendet-item';

type Props = {
  EmptypageData: pageEmpty;
  theme: notesThemeType;
  flatlistRef: React.MutableRefObject<FlatList | null>;
};

export const NotesList = React.memo(({ EmptypageData, theme, flatlistRef }: Props) => {
  const { currentUserData } = useAuth();

  const { notes, deleteNote, refreshing, handleOnRefetch } = useNotes();

  const renderItem = React.useCallback(
    ({ item }: { item: Note }) => (
      <RenderItem
        text={item.content}
        date={item.createdAt}
        theme={theme.notesMessage}
        id={item.id}
        isMyNote={currentUserData?.id === item.owner?.id}
        isAdmin={currentUserData?.role === UserRole.Admin}
        deleteNote={deleteNote}
        image={getPath(item.owner?.image) || null}
        login={item.owner?.login || ''}
        isOnline={item.owner?.onlineStatus || false}
      />
    ),
    [currentUserData?.id, currentUserData?.role],
  );

  const keyExtractor = (item: Note, index: number) => (item.id || index).toString();

  return (
    <Box flex={1}>
      <FlatList
        ref={flatlistRef}
        contentContainerStyle={styles.contentContainerStyle}
        data={notes}
        refreshing={refreshing}
        onRefresh={handleOnRefetch}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          <EmptyListComponent
            IconComponent={EmptypageData.IconComponent}
            iconSize={EmptypageData.iconSize}
            title={EmptypageData.title}
            subTitle={EmptypageData.subTitle}
          />
        }
      />
    </Box>
  );
});

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
