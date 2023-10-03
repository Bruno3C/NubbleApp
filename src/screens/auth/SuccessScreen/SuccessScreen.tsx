import React from 'react';
import {
  Button,
  Screen,
  Text,
  Icon,
} from '@components';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@routes';


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;
export function SuccessScreen({ navigation, route }: ScreenProps) {

  function goBackToBegin() {
    // TODO: navegar para tela de login
    navigation.goBack();
  }

  return(
    <Screen>
      <Icon {...route.params.icon} /> 
      <Text preset='headingLarge' mt="s24">{route.params?.title}</Text>
      <Text preset='paragraphLarge' mt="s16">{route.params?.description}</Text>
      <Button 
        mt="s40" 
        title='Voltar ao início'
        onPress={goBackToBegin} 
      />
    </Screen>
  )
}