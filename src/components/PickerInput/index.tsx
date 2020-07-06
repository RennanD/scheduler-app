import React, { useState, useRef, useEffect } from 'react';

import RNPickerSelect from 'react-native-picker-select';

import { Feather } from '@expo/vector-icons';

import { useField } from '@unform/core';

import { Container, ErrorMessage } from './styles';
import { View } from 'react-native';

interface PickerProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

const PickerInput: React.FC<PickerProps> = ({ name }) => {
  const { fieldName, registerField, defaultValue = '', error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [selected, setSelected] = useState<React.ReactText>('');

  const inputElementRef = useRef<any>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  });

  return (
    <>
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
      <Container error={!!error}>
        <Feather name="clock" size={24} color="#0076D0" />

        <View style={{flex: 1}}>
          <RNPickerSelect
            ref={inputElementRef}
            placeholder={{label: "Selecione um horário"}}
            onValueChange={itemValue => {
              inputValueRef.current.value = String(itemValue);
              setSelected(itemValue);
            }}
            items={[
                { label: '08 Horas', value: '08:00:00' },
                { label: '09 Horas', value: '09:00:00' },
                { label: '10 Horas', value: '10:00:00' },
                { label: '11 Horas', value: '11:00:00' },
                { label: '14 Horas', value: '14:00:00' },
                { label: '15 Horas', value: '15:00:00' },
                { label: '16 Horas', value: '16:00:00' },
                { label: '17 Horas', value: '17:00:00' },
            ]}
          />
        </View>
      </Container>
    </>
  );
};

export default PickerInput;