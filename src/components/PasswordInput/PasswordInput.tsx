import React, { useState } from 'react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import { Icon } from '../Icon/Icon';

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