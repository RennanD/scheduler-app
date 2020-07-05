import React from 'react';
import { View } from 'react-native';

import { 
  Container, 
  Title, 
  SubTitle, 
  Content,
  LinkContainer,
  LinkText,
  LinkButton,
  LinkButtonText, 
  ImageFooter 
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import loginImage from '../../assets/login-app.png'

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Bem vindo ao Scheduler</Title>
        <SubTitle>
          Faça seu login para acessar a aplicação. 
          Marque um horário para seus atendimentos
        </SubTitle>

        <Input 
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          icon="mail"
          placeholder="E-mail"
        />

        <Input 
          icon="lock"
          secureTextEntry
          placeholder="E-mail"
        />

        <Button>Login</Button>

        <LinkContainer>
          <LinkText>Ainda não tem conta?</LinkText>
          <LinkButton>
            <LinkButtonText>Cadastre-se.</LinkButtonText>
          </LinkButton>
        </LinkContainer>
      </Content>

      <ImageFooter source={loginImage} />
    </Container>
  )
}

export default Login;