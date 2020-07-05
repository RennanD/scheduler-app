import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1px;
  background: #fff;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #333;
  font-weight: bold;
  width: 300px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #666;
  width: 250px;
  margin: 20px 0 50px;
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
`;