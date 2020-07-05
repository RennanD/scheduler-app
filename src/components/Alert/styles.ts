import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const MessageContainer = styled.View`
  height: 170px;
  width: 250px;
  background: #fff;
  text-align: center;
  border-radius: 8px;
  align-items: center;
  justify-content:center;
  padding: 15px;
`

export const MessageContent = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #333;
  font-weight: bold;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 8px;
  background: #2193f6;
  margin-top: 10px;
`;

export const CloseButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
