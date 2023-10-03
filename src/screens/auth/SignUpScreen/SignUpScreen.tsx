import React from 'react';

import { Button } from '../../../components/Button/Button';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Screen } from '../../../components/Screen/Screen';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput';

type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
}

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange'
  })

  function submitForm(form: SignUpFormType) {
    console.log('submitForm', form.email);
    /*reset({ 
      icon: { name: "checkRound", color: "success" }, 
      title: 'Sua conta foi criada com sucesso!', 
      description: 'Agora é só fazer login na nossa plataforma'
    });*/
  }

  return(
    <Screen canGoBack scrollable>
      <Text preset='headingLarge' marginBottom='s32'>
        Criar uma conta
      </Text>
      <FormTextInput
        control={control}
        name="username"
        rules={{required: 'Username é obrigatório', minLength: 3}}
        label='Seu username'
        placeholder='@'
        boxProps={{mb:'s20'}}
      />
      <FormTextInput
        control={control}
        name="fullName"
        label='Nome Completo' 
        placeholder='Digite seu nome completo'
        rules={{required: 'Nome completo é obrigatório', minLength: 3}}
        boxProps={{mb:'s20'}}
      />
      <FormTextInput
        control={control}
        name="email"
        label='E-mail' 
        placeholder='Digite seu e-mail'
        rules={{required: 'E-mail é obrigatório'}}
        boxProps={{mb:'s20'}}
      />
      <FormPasswordInput
        control={control}
        name='password'
        label='Senha'
        rules={{
          required: 'Senha é obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres'
          }
        }}
        placeholder='Digite sua senha'
        boxProps={{ mb: 's48' }}
      />
      <Button 
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title='Criar uma conta' 
      />
    </Screen>
  )
}