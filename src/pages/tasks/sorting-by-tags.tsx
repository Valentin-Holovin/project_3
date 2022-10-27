import { Box, Button, Center, Flex, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { AddTagsIcon, RemoveTagIcon } from '../../components/icons';
import { RequestHandler } from '../../components/request-handler/request-handler';
import { Tag } from '../../graphql/generated/index';
import { useGetTagsQuery } from '../../hooks';
import { colors } from '../../theme';

type Props = {
  applyFilterTags: (tags: number[] | null) => void;
  handleClose: () => void;
  filterTags: number[] | null;
};

export const SortingByTags = ({ applyFilterTags, handleClose, filterTags }: Props) => {
  const { data, loading } = useGetTagsQuery({});

  const [selectedTags, setSelectedTags] = React.useState<number[]>(filterTags || []);

  React.useEffect(() => {
    if (filterTags) {
      setSelectedTags(filterTags);
    }
  }, [filterTags]);

  const addTag = (tag: number) => {
    setSelectedTags((prevState) => [...prevState, tag]);
  };

  const removeTag = (tag: number) => {
    setSelectedTags((prevState) => prevState.filter((item) => item !== tag));
  };

  const handlePress = () => {
    applyFilterTags(selectedTags);
    handleClose();
  };

  return (
    <Box w={'100%'}>
      <RequestHandler loading={loading}>
        <Box ml={'30px'} mr={'30px'}>
          {data?.getTags.rows.map((item: Tag) => {
            const isSelected = selectedTags?.some((tag) => tag === item.id);
            return (
              <Flex style={styles.tagContainer} key={item.id}>
                <Box style={styles.tagWrapper} bg={item.color}>
                  <Box style={styles.tagIcon} />
                  <Text style={styles.tagText}>{item.name}</Text>
                </Box>
                <TouchableOpacity
                  onPress={() => {
                    if (isSelected) {
                      removeTag(item.id);
                    } else {
                      addTag(item.id);
                    }
                  }}
                >
                  {isSelected ? <RemoveTagIcon size={3.5} /> : <AddTagsIcon size={3.5} />}
                </TouchableOpacity>
              </Flex>
            );
          })}
          <Center>
            <Button style={styles.mainButtonContainer} variant={'black'} onPress={handlePress}>
              Применить
            </Button>
          </Center>
        </Box>
      </RequestHandler>
    </Box>
  );
};

const styles = StyleSheet.create({
  mainButtonContainer: {
    marginVertical: 10,
  },
  mainButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  mainText: {
    fontSize: 20,
    marginBottom: 6,
  },
  tagButton: {
    height: 16,
    width: 16,
  },
  tagContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tagIcon: {
    backgroundColor: colors.primary['100'],
    borderRadius: 50,
    height: 6,
    marginLeft: 3,
    marginRight: 4,
    width: 6,
  },
  tagText: {
    color: colors.primary['100'],
    fontSize: 13,
    marginRight: 4,
  },
  tagWrapper: {
    alignItems: 'center',
    borderRadius: 2,
    flexDirection: 'row',
    marginTop: 13,
  },
});
