import React from 'react';
import { View } from 'react-native';

import Modal from 'react-native-modal';

import { 
  Container,
  MessageContent, 
  MessageContainer, 
  CloseButton, 
  CloseButtonText 
} from './styles';

interface AlertProps {
  isVisible: boolean
  message: string;
  onClose(): void; 
}

const Alert: React.FC<AlertProps> = ({ isVisible, message, onClose }) => {
  return (
    <Modal  
      backdropOpacity={0.30}
      isVisible={isVisible}
    >
      <Container>
        <MessageContainer>
          <MessageContent>{message}</MessageContent>

          <CloseButton onPress={onClose}>
            <CloseButtonText>Ok</CloseButtonText>
          </CloseButton>
        </MessageContainer>
      </Container>
    </Modal>
  );
}

export default Alert;