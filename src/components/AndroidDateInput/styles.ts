import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  height: 50px;
  border-radius: 22px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  align-items: center;
  padding: 0 20px;
  flex-direction: row;
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
