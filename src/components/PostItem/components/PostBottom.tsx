import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

type Props = Pick<Post, 'id' | 'author' | 'text' | 'commentCount'>;

export function PostBottom({id, author, text, commentCount}: Props) {
  const navigation = useNavigation();
  const commentText = getCommentText(commentCount);

  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentScreen', {postId: id});
  }

  return (
    <Box mt="s16" paddingHorizontal="s20">
      <Text preset="paragraphMedium" bold>
        {author.name}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text
          mt="s8"
          preset="paragraphSmall"
          color="primary"
          bold
          onPress={navigateToPostCommentScreen}>
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return '';
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
