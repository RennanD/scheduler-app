import React, { useCallback, useState, useRef, useEffect } from 'react';

import { Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

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
import Alert from '../../components/Alert'

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import loginImage from '../../assets/login-app.png'

interface RegisterCredencials {
  email: string;
  password: string;
}

const Register: React.FC = () => {

  const { navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null)

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState(''); 
  const [showKeyboard, setShowKeyboard] = useState(false)

  const handleSubmit = useCallback(async (data: RegisterCredencials) => {

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

      await api.post('/users', {
        email,
        password
      });      

      setMessage('Usuário cadastrado com sucesso, faça seu login.')
      setShowModal(true)

      formRef.current?.reset()

    } catch (err) {

      if(err instanceof Yup.ValidationError){        

        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)

        return;
      }
      

      const { response } = err;

      setMessage(response.data.error)
      setShowModal(true)
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
        <SubTitle>
          Crie sua conta e aproveite todos os nossos serviços.
        </SubTitle>

        <Form ref={formRef} onSubmit={handleSubmit}>
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
            placeholder="Senha"
          />

          <Button
            onPress={() => formRef.current?.submitForm()}
          >
            Cadastrar
          </Button>
        </Form>

        <LinkContainer>
          <LinkText>Já possui uma conta?</LinkText>
          <LinkButton onPress={() => navigate('Login')}>
            <LinkButtonText>Faça login.</LinkButtonText>
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

export default Register;