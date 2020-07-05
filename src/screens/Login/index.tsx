import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile'

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

  const { navigate } = useNavigation();

  return (
    <Container>
      <Content>
        <Title>Bem vindo ao Scheduler</Title>
        <SubTitle>
          Marque um horário para seus atendimentos.
          Faça seu login para acessar a aplicação. 
          
        </SubTitle>

        <Form onSubmit={() => {}}>
          <Input 
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            icon="mail"
            placeholder="E-mail"
          />

          <Input
            name="password" 
            icon="lock"
            secureTextEntry
            placeholder="E-mail"
          />

          <Button onPress={() => {}}>Login</Button>
        </Form>

        <LinkContainer>
          <LinkText>Ainda não tem conta?</LinkText>
          <LinkButton onPress={() => navigate('Register')}>
            <LinkButtonText>Cadastre-se.</LinkButtonText>
          </LinkButton>
        </LinkContainer>
      </Content>

      <ImageFooter source={loginImage} />
    </Container>
  )
}

export default Login;