import React from 'react';

import {Button, Screen, Text} from '@components';

export function HomeScreen() {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button title="Settings" onPress={() => {}} />
    </Screen>
  );
}
