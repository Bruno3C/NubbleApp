import React from 'react';

import { Button } from '../../../components/Button/Button';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Screen } from '../../../components/Screen/Screen';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;
export function LoginScreen({ navigation }: ScreenProps) {

  function navigateToSignUpScreen() {
    navigation.navigate('SuccessScreen', { icon: 'BellOn', title: 'Teste', description: 'Teste'});
  }

  return(
    <Screen scrollable>
      <Text preset='headingLarge' marginBottom='s8'>Olá!</Text>
      <Text preset='paragraphLarge' mb='s40'>Digite seu e-mail e senha para entrar</Text>
      <TextInput 
        label='E-mail' 
        placeholder='Digite seu e-mail'
        boxProps={{ mb: 's20' }}
      />
      <PasswordInput 
        label='Senha' 
        placeholder='Digite sua senha' 
        boxProps={{ mb: 's10' }}
      />
      <Text color='primary' preset='paragraphSmall' bold >
        Esqueci minha senha
      </Text>
      <Button mt="s48" title='Entrar'/>
      <Button 
        mt="s12" 
        preset='outline' 
        title='Criar uma conta' 
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  )
}