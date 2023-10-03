import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema } from './loginSchema';
import { useForm } from 'react-hook-form';

import {
  FormPasswordInput,
  FormTextInput, 
  Button,
  Screen,
  Text,
} from '@components';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({ navigation }: ScreenProps) {

  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm(values: LoginSchema) {
    console.log('values', values);
  }

  return(
    <Screen scrollable>
      <Text preset='headingLarge' marginBottom='s8'>Olá!</Text>
      <Text preset='paragraphLarge' mb='s40'>Digite seu e-mail e senha para entrar</Text>
      <FormTextInput
        control={control}
        name="email"
        label='E-mail' 
        placeholder='Digite seu e-mail'
        boxProps={{ mb: 's20' }}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label='Senha' 
        placeholder='Digite sua senha' 
        boxProps={{ mb: 's10' }}
      />
      <Text 
        color='primary' 
        preset='paragraphSmall' 
        bold 
        onPress={navigateToForgotPasswordScreen}
      >
        Esqueci minha senha
      </Text>
      <Button 
        mt="s48"
        disabled={!formState.isValid}
        title='Entrar'
        onPress={handleSubmit(submitForm)}
      />
      <Button 
        mt="s12" 
        preset='outline' 
        title='Criar uma conta' 
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  )
}