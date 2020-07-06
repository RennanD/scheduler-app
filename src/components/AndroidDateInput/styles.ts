import styled, { css } from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

interface ContainerProps {
  error: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  height: 50px;
  border-radius: 22px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  align-items: center;
  padding: 0 20px;
  flex-direction: row;

  ${props => props.error && css`
    border-color: #ec3030;
  `}
`;

export const PlaceholderText = styled.Text`
  color: #ddd;
  font-size: 14px;
`;

export const DatePickerText = styled.Text`
  flex: 1;
`;

export const Icon = styled(Feather)`
  margin-right: 10px;
`;

export const ErrorMessage = styled.Text`
  color: #ec3030;
  font-size: 10px;
  margin-bottom: 4px;
  margin-left: 10px;
`;