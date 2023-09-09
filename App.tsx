import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { TouchableOpacityBox } from './src/components/Box/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme} >
      <SafeAreaView style={{ padding: 10}}>
      <TouchableOpacityBox
        backgroundColor='buttonPrimary'
        borderRadius='s16'
        justifyContent='center'
        alignItems='center'
        activeOpacity={.7}
        p='s20'
      >
        <Text preset='headingSmall' style={{ color: 'white'}} >Button</Text>
      </TouchableOpacityBox>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
