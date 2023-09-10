import React from 'react';
import { Text } from '../../components/Text/Text';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";
import { buttonPresets } from './buttonPresets';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';

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
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled? 'disabled': 'default'];
  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      activeOpacity={.7}
      disabled={disabled || loading}
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
        { loading? (
          <ActivityIndicator color={buttonPreset.content}/>
        ): (
          <Text preset="paragraphMedium" bold color={buttonPreset.content}>{title}</Text>
        )}

    </TouchableOpacityBox>
  )
}
