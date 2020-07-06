import styled from 'styled-components/native';

interface ContainerProps {
  error: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: 50px;
  border-radius: 22px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  align-items: center;
  padding: 0 20px;
  flex-direction: row;
`;

export const ErrorMessage = styled.Text`
  color: #ec3030;
  font-size: 10px;
  margin-bottom: 4px;
  margin-left: 10px;
`;