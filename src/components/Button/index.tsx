import React from 'react';

import { Container,TextButton } from './styles';

interface ButtonProps {
  onPress(): void;
}

const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
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
      <TextButton>{children}</TextButton>
    </Container>
  )
}

export default Button;