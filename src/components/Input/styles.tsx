import styled, { css } from 'styled-components/native';

interface ContainerProps {
  error: boolean;
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: 50px;
  border-radius: 22px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  align-items: center;
  padding: 0 20px;
  flex-direction: row;

  ${props => props.isFocused && css`
    border-color: #0076D0;
  `}

  ${props => props.error && css`
    border-color: #ec3030;
  `}

`;


export const TInput = styled.TextInput`
  flex: 1;
  margin: 0 10px;
`;

export const ErrorMessage = styled.Text`
  color: #ec3030;
  font-size: 10px;
  margin-bottom: 4px;
  margin-left: 10px;
`;