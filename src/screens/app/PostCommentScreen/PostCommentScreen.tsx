import React from 'react';

import {usePostCommentList} from '@domain';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
  navigation,
}: AppScreenProps<'PostCommentScreen'>) {
  console.log('route.params', route.params.postId);
  const {postId} = route.params;
  const {list} = usePostCommentList(postId);
  console.log('lista de comentários', list);
  return (
    <Screen title="Comentários" canGoBack>
      <Text preset="headingLarge">Post Comment Screen</Text>
      <Button
        title="New Post"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen',
          })
        }
      />
    </Screen>
  );
}
