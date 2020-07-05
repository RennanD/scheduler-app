 import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Feather } from '@expo/vector-icons';

import { Container, TInput,ErrorMessage } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {

  const inputElementRef = useRef<any>(null);

  const { fieldName, registerField, defaultValue = '', error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, [setIsFilled, setIsFocused, inputValueRef]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(reference: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
      <Container isFocused={isFocused} error={!!error}>
        <Feather 
          name={icon} 
          size={24} 
          color={isFocused || isFilled ? '#0076D0' : '#ddd'}   
        />
        <TInput 
          ref={inputElementRef}
          placeholderTextColor="#ddd"
          defaultValue={defaultValue}
          onChangeText={value => {
            inputValueRef.current.value = value;
          }}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest} 
        />
      </Container>
      
    </>
  );
}

export default Input;