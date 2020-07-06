import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #fff;
`;

export const Content = styled.View`
  flex: 2;
  padding: 20px;
  padding-top: ${getStatusBarHeight() + 20}px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #333;
  font-weight: bold;
  width: 300px;
  margin-bottom: 20px;
`;


export const LinkContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const LinkText = styled.Text`
  color: #333;
  font-size: 14px;
`;

export const LinkButton = styled.TouchableOpacity`
  margin: 0 5px;
`;

export const LinkButtonText = styled.Text`
  color: #0076D0;
  font-size: 14px;
`;

export const ImageFooter = styled.Image`
  align-self: center;
  flex: 1;
  width: 80%;
`;