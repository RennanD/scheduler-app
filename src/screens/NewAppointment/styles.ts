import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.KeyboardAvoidingView`
  flex:1;
  background: #fff;
`;

export const Header = styled.View`
  padding: 20px;
  padding-top: ${getStatusBarHeight() + 20}px;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #333;
  font-weight: bold;
  width: 300px;
`;

export const FormContainer = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
`;