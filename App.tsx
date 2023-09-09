import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { TouchableOpacityBox } from './src/components/Box/Box';
import { Button } from './src/components/Button/Button';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme} >
      <SafeAreaView style={{ padding: 10}}>
        <Button title="Confirmar"/>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
