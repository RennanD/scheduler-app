import React, { useState, useEffect, useRef, useCallback } from 'react';

import { Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

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
import Alert from '../../components/Alert';

import loginImage from '../../assets/login-app.png';

import { useAuth } from '../../hooks/authHook';

import getValidationErrors from '../../utils/getValidationErrors';

interface AuthCredencials {
  email: string;
  password: string;
}

const Login: React.FC = () => {

  const { navigate } = useNavigation();
  const { signIn } = useAuth();

  const [showKeyboard, setShowKeyboard] = useState(false)

  const formRef = useRef<FormHandles>(null)

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); 

  const handleSubmit = useCallback(async (data: AuthCredencials) => {

    setLoading(true)
    const { email, password } = data

    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('Senha obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      await signIn({
        email,
        password
      })     

      formRef.current?.reset()

      setLoading(false)

    } catch (err) {

      if(err instanceof Yup.ValidationError){        

        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)

        return;
      }

      setMessage(err.message)
      setShowModal(true)

      setLoading(false)
      
    }
  },[showModal])


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

        <Form 
          ref={formRef}
          onSubmit={handleSubmit}
        >
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

          <Button 
            onPress={() => formRef.current?.submitForm()}
            loading={loading}
          >
            Login
          </Button>
        </Form>

        <LinkContainer>
          <LinkText>Ainda não tem conta?</LinkText>
          <LinkButton onPress={() => navigate('Register')}>
            <LinkButtonText>Cadastre-se.</LinkButtonText>
          </LinkButton>
        </LinkContainer>
      </Content>

      {!showKeyboard && <ImageFooter source={loginImage} />}

      <Alert 
        isVisible={showModal}
        message={message}
        onClose={() => setShowModal(false)}
      />
    </Container>
  )
}

export default Login;