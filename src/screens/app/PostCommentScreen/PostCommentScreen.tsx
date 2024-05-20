import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
  navigation,
}: AppScreenProps<'PostCommentScreen'>) {
  console.log('route.params', route.params.postId);
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
