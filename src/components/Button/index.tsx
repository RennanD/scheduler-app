import React from 'react';

import { Container,TextButton } from './styles';

const Button: React.FC = ({ children }) => {
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
    >
      <TextButton>{children}</TextButton>
    </Container>
  )
}

export default Button;