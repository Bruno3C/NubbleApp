import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';
import { EyeOffIcon } from './src/assets/icons/EyeOffIcon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme} >
      <SafeAreaView style={{ padding: 10}}>
        <Button title="Confirmar"/>
        <EyeOffIcon/>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
