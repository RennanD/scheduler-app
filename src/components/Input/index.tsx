import React from 'react';

import { TextInputProps } from 'react-native';

import { Feather } from '@expo/vector-icons';


import { Container, TInput } from './styles';

interface InputProps extends TextInputProps{
  icon: string;
}

const Input: React.FC<InputProps> = ({ icon, ...rest }) => {
  return (
    <Container>
      <Feather name={icon} size={24} color="#0076D0" />
      <TInput 
        placeholderTextColor="#ddd"
        {...rest} 
      />
    </Container>
  );
}

export default Input;