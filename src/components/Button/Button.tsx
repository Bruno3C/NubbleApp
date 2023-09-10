import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Text } from '../../components/Text/Text';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";
import { buttonPresets } from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
}

export function Button({ 
  title, 
  loading, 
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset];
  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      activeOpacity={.7}
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
        { loading? (
          <ActivityIndicator/>
        ): (
          <Text preset="paragraphMedium" bold color={buttonPreset.content}>{title}</Text>
        )}

    </TouchableOpacityBox>
  )
}
