import React from 'react';

import { SafeAreaView } from 'react-native';
import { Button } from '../../../components/Button/Button';
import { EyeOffIcon } from '../../../assets/icons/EyeOffIcon';
import { Icon } from '../../../components/Icon/Icon';
import { Text } from '../../../components/Text/Text';
import { Box } from '../../../components/Box/Box';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Screen } from '../../../components/Screen/Screen';

export function LoginScreen() {
  return(
    <Screen>
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
        RightComponent={<Icon name='eyeOn' color='gray2'/>}
        boxProps={{ mb: 's10' }}
      />
      <Text color='primary' preset='paragraphSmall' bold >
        Esqueci minha senha
      </Text>
      <Button mt="s48" title='Entrar'/>
      <Button mt="s12" title='Criar uma conta' preset='outline'/>
    </Screen>
  )
}