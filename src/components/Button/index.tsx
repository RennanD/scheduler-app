import React from 'react';

import { ActivityIndicator } from 'react-native';

import { Container,TextButton } from './styles';

interface ButtonProps {
  onPress(): void;
  loading: boolean
}

const Button: React.FC<ButtonProps> = ({ onPress, loading, children }) => {
  return (
    <Container 
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}

      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size={24} color="#fff" />
      ) : (
        <TextButton>{children}</TextButton>
      )}
    </Container>
  )
}

export default Button;