import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function NewPostScreen({
  navigation,
}: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">NewPostScreen</Text>
      <Button
        title="Navegar para settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
