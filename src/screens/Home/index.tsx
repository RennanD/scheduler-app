import React, {useState, useEffect} from 'react';

import { Feather } from '@expo/vector-icons';

import { format, parseISO } from 'date-fns';

import { useAuth } from '../../hooks/authHook';

import { 
  Container, 
  Header,
  TitleContainer,
  SignOutButton,
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

import api from '../../services/api';

interface Appointments {
  title: string;
  description: string;
  date: string;
  formattedDate: string;
  formattedHour: string;
}

const Home: React.FC = () => {

  const { signOut } = useAuth();

  const [appointments, setAppointments] = useState<Appointments[]>([] as Appointments[]) 

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('/appointments');

      const data = response.data.map((appointment: Appointments) => ({
        ...appointment,
        formattedDate: format(parseISO(appointment.date), "dd 'de' MMM'.'"),
        formattedHour: format(parseISO(appointment.date), "HH':'mm'h'")
      }))

      setAppointments(data)
    }

    loadAppointments()
  },[])

  return (
    <Container>
      <Header>
        <TitleContainer>
          <TitlePage>Meus agendamentos</TitlePage>
        </TitleContainer>

        <SignOutButton onPress={signOut} >
          <Feather name="log-out" color="#ec3030" size={30} />
        </SignOutButton>
      </Header>

      <AppointmentsList>

        {appointments.map(appointment => (
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
                {appointment.title}
              </AppointmentTitle>
              <AppointmentDescription>
                {appointment.description}
              </AppointmentDescription>
            </AppointmentBody>

            <AppointmentDateContainer>
            <AppointmentDate>{appointment.formattedDate}</AppointmentDate>
              <AppointmentHour>{appointment.formattedHour}</AppointmentHour>
            </AppointmentDateContainer>
          </Appointment>
        ))}

      </AppointmentsList>
    </Container>
  );
}

export default Home;