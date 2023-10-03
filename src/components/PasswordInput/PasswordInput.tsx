import React, { useState } from 'react';
import { Icon, TextInput, TextInputProps } from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>
export function PasswordInput({...passwordInputProps}: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }

  return(
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...passwordInputProps}
      RightComponent={
        <Icon
          name={isSecureTextEntry? 'eyeOn': 'eyeOff'}
          onPress={toggleSecureTextEntry}
          color="gray2"
        />
      }
    />
  )
}