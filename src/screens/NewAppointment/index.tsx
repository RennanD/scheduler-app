import React, { useRef, useCallback, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { parseISO } from 'date-fns';

import { Container, Header, Title, FormContainer } from './styles';

import Input from '../../components/Input';
import PickerInput from '../../components/PickerInput';
import AndroidDateInput from '../../components/AndroidDateInput';
import Button from '../../components/Button';

import Alert from '../../components/Alert';


import api from '../../services/api';

interface RequestAppointment {
  title: string;
  description: string;
  date: Date;
  hour: string;
}

function getMonthDate(month: string): string {

  if(month.length < 2) {
    return `0${month}`
  }

  return month
}

function getDayDate(day: string): string {

  if(day.length < 2) {
    return `0${day}`
  }

  return day
}

const NewAppointment: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState(''); 

  const handleSubmit = useCallback(async (data: RequestAppointment) => {
    setLoading(true)
    
    const year = String(data.date.getFullYear())
    const month = String(data.date.getMonth() + 1)
    const day = String(data.date.getDate())

    const formattedMonth = getMonthDate(month)
    const formattedDay = getDayDate(day)

    const stringDate = `${year}-${formattedMonth}-${formattedDay}T${data.hour}-03:00`

    const newDate = parseISO(stringDate)

    try {
      await api.post('/appointments', {
        title: data.title,
        description: data.description,
        date: newDate
      })

      setMessage('Agendamento cadastrado.');
      setShowModal(true);

      formRef.current?.reset();

      setLoading(false)

    } catch ({ response }) {

      setMessage(response.data.error);
      setShowModal(true);
      setLoading(false)

    }

  },[])

  return (
    <Container>
      <Header>
        <Title>CADASTRAR NOVO AGENDAMENTO</Title>
      </Header>

      <FormContainer>
      <Form 
        ref={formRef}
        onSubmit={handleSubmit}
      >

        <Input
          name="title"
          icon="edit"
        />

        <Input
          name="description"
          icon="file-text"
        />

        <AndroidDateInput
          name="date"
        />

        <PickerInput
          name="hour"
        />

        <Button 
          loading={loading}
          onPress={() => formRef.current?.submitForm()}
        >
            Adicionar
        </Button>
      </Form>
      </FormContainer>

      <Alert
        isVisible={showModal}
        message={message}
        onClose={() => setShowModal(false)}
      />

    </Container>
  );
}

export default NewAppointment;