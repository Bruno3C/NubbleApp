import React from 'react';

import {
  FormTextInput,
  Button,
  Text, 
  Screen
} from '@components';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useResetNavigationSuccess } from '@hooks';
import { RootStackParamList } from '@routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>;
export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm(values: ForgotPasswordSchema) {
    console.log('values', values);
    reset({
      title: `Enviamos as instruções${'\n'}para seu e-mail`,
      description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary'
      }
    })
  }

  return(
    <Screen canGoBack>
      <Text preset='headingLarge' mb='s16'>
        Esqueci minha senha
      </Text>
      <Text preset='paragraphLarge' mb='s32'>
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label='E-mail' 
        placeholder='Digite seu e-mail'
        boxProps={{ mb: 's40' }}
      />
      <Button 
        disabled={!formState.isValid}
        title='Recuperar senha'
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  )
}