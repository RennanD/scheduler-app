/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';

import { Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';


import api from '../services/api';

interface SingInCredencials {
  email: string;
  password: string;
}


interface User {
  _id: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface AuthContextData {
  user: User;
  signIn(credencials: SingInCredencials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);


  useEffect(() => {
    async function loadUser(): Promise<void> {
      const token = await AsyncStorage.getItem('@schedules:token');
      const user = await AsyncStorage.getItem('@schedules:user');

      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        setData({ token, user: JSON.parse(user) });
      }
    }

    loadUser();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      const { user, token } = response.data;

      await AsyncStorage.setItem('@schedules:token', token);
      await AsyncStorage.setItem('@schedules:user', JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
    } catch (err) {
      Alert.alert('Erro', 'Dados de usuário inválidos!');
    }
  }, []);

  const signOut = useCallback(async () => {

    await AsyncStorage.removeItem('@schedules:token');
    await AsyncStorage.removeItem('@schedules:user');


    setData({} as AuthState);
  }, [ data]);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
