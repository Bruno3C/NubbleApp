import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Text } from '../../components/Text/Text';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      activeOpacity={.7}
      borderRadius="s16">
        { loading? (
          <ActivityIndicator/>
        ): (
          <Text preset="paragraphMedium" bold style={{ color: 'white'}}>{title}</Text>
        )}

    </TouchableOpacityBox>
  )
}
