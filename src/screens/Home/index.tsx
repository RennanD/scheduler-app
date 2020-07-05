import React from 'react';

import { Feather } from '@expo/vector-icons';

import { 
  Container, 
  Header,
  TitlePage, 
  TitleDate, 
  AppointmentsList, 
  Appointment, 
  AppointmentBody,
  AppointmentTitle,
  AppointmentDescription,
  AppointmentDateContainer,
  AppointmentDate,
  AppointmentHour, 
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <TitlePage>Meus agendamentos.</TitlePage>
        <TitleDate>Domingo, 06 de Jul.</TitleDate>
      </Header>

      <AppointmentsList>

        <Appointment
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,

            elevation: 2,
          }}
        >
          <Feather name="calendar" size={30} color="#2193f6" />

          <AppointmentBody>
            <AppointmentTitle>
              Entrega de APP
            </AppointmentTitle>
            <AppointmentDescription>
              Entregar aplicativo/desafio do Obetivo
            </AppointmentDescription>
          </AppointmentBody>

          <AppointmentDateContainer>
            <AppointmentDate>07 de Jul</AppointmentDate>
            <AppointmentHour>12:00h</AppointmentHour>
          </AppointmentDateContainer>
        </Appointment>

        <Appointment
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,

            elevation: 2,
          }}
        >
          <Feather name="calendar" size={30} color="#2193f6" />

          <AppointmentBody>
            <AppointmentTitle>
              Ortopodista
            </AppointmentTitle>
            <AppointmentDescription>
              Consulta com na clinica São Lucas
            </AppointmentDescription>
          </AppointmentBody>

          <AppointmentDateContainer>
            <AppointmentDate>16 de Jul</AppointmentDate>
            <AppointmentHour>10:30h</AppointmentHour>
          </AppointmentDateContainer>
        </Appointment>

      </AppointmentsList>
    </Container>
  );
}

export default Home;