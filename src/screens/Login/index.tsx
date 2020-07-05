import React, { useState, useEffect } from 'react';

import { Keyboard } from 'react-native'

import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile'

import { 
  Container, 
  Title, 
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

  const [showKeyboard, setShowKeyboard] = useState(false)

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => setShowKeyboard(true))
    Keyboard.addListener("keyboardDidHide", () => setShowKeyboard(false))

    return () => {
      Keyboard.removeListener("keyboardDidShow", () => setShowKeyboard(true))
      Keyboard.removeListener("keyboardDidHide", () => setShowKeyboard(false))
    }
  },[])

  return (
    <Container>
      <Content>
        <Title>Bem vindo ao Scheduler</Title>

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

      {!showKeyboard && <ImageFooter source={loginImage} />}
    </Container>
  )
}

export default Login;