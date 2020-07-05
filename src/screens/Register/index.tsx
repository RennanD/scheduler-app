import React from 'react';

import { useNavigation } from '@react-navigation/native';

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

const Register: React.FC = () => {

  const { navigate } = useNavigation();

  return (
    <Container>
      <Content>
        <Title>Bem vindo ao Scheduler</Title>
        <SubTitle>
          Crie sua conta e aproveite todos os nossos serviços.
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
          placeholder="Senha"
        />

        <Input 
          icon="lock"
          secureTextEntry
          placeholder="Repetir senha"
        />

        <Button>Cadastrar</Button>

        <LinkContainer>
          <LinkText>Já possui uma conta?</LinkText>
          <LinkButton onPress={() => navigate('Login')}>
            <LinkButtonText>Faça login.</LinkButtonText>
          </LinkButton>
        </LinkContainer>
      </Content>

      <ImageFooter source={loginImage} />
    </Container>
  )
}

export default Register;