import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';
import { EyeOffIcon } from './src/assets/icons/EyeOffIcon';
import { Icon } from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme} >
      <SafeAreaView style={{ padding: 10}}>
        <Button title="Confirmar"/>
        <Icon name='eyeOn' />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
