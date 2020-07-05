import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  padding: 20px;
  padding-top: ${getStatusBarHeight() + 20}px;
`;

export const TitlePage = styled.Text`
  font-size: 32px;
  color: #333;
  font-weight: bold;
  width: 300px;
`

export const TitleDate = styled.Text`
  font-size: 20px;
  color: #2193f6;
  font-weight: bold;
  width: 300px;
  margin: 10px 0 20px;
`

export const AppointmentsList = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 15
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`

export const Appointment = styled.View`
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  height: 100px;
  margin-bottom: 15px;
`

export const AppointmentBody = styled.View`
  margin: 0 5px 0 10px;
  flex: 1;
`

export const AppointmentTitle = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
`

export const AppointmentDescription = styled.Text`
  color: #666;
  font-size: 12px;
`

export const AppointmentDateContainer = styled.View`
  align-items: flex-end;
`

export const AppointmentDate = styled.Text`
  color: #999;
  font-size: 16px;
`

export const AppointmentHour = styled.Text`
  color: #999;
  font-size: 14px;
`
