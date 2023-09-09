import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider, useTheme } from '@shopify/restyle';
import { Theme } from './src/theme/theme';

function App(): JSX.Element {
  const theme = useTheme<Theme>();
  return (
    <ThemeProvider theme={theme} >
      <SafeAreaView>
      <Text>Nubble App</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
