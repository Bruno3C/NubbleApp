import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';
import { EyeOffIcon } from './src/assets/icons/EyeOffIcon';
import { Icon } from './src/components/Icon/Icon';
import { Text } from './src/components/Text/Text';
import { Box } from './src/components/Box/Box';
import { TextInput } from './src/components/TextInput/TextInput';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme} >
      <SafeAreaView style={{ padding: 10}}>
        <Text preset='headingLarge' marginBottom='s8'>Olá!</Text>
        <Text preset='paragraphLarge' mb='s40'>Digite seu e-mail e senha para entrar</Text>
        <TextInput 
          label='E-mail' 
          placeholder='Digite seu e-mail'
          boxProps={{ mb: 's20' }}
        />
        <TextInput 
          label='Senha' 
          placeholder='Digite sua senha' 
          errorMessage='Digite a senha'
          RightComponent={<Icon name='eyeOn' color='gray2'/>}
          boxProps={{ mb: 's10' }}
        />
        <Text color='primary' preset='paragraphSmall' bold >
          Esqueci minha senha
        </Text>
        <Button mt="s48" title='Entrar'/>
        <Button mt="s12" title='Criar uma conta' preset='outline'/>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
