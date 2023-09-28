import React from 'react';

import { Button } from '../../../components/Button/Button';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Screen } from '../../../components/Screen/Screen';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;
export function SignUpScreen({}: ScreenProps) {

  function submitForm() {
    console.log('submit');
  }

  return(
    <Screen canGoBack scrollable>
      <Text preset='headingLarge' marginBottom='s32'>
        Criar uma conta
      </Text>
      <TextInput 
        label='Seu username' 
        placeholder='@'
        boxProps={{ mb: 's20' }}
      />
      <TextInput 
        label='Nome Completo' 
        placeholder='Digite seu nome completo'
        boxProps={{ mb: 's20' }}
      />
      <TextInput 
        label='E-mail' 
        placeholder='Digite seu e-mail'
        boxProps={{ mb: 's20' }}
      />
      <PasswordInput
        label='Senha' 
        placeholder='Digite sua senha'
        boxProps={{ mb: 's48' }}
      />
      <Button title='Entrar' onPress={submitForm}/>
    </Screen>
  )
}