import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { Platform } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { format } from 'date-fns';

import { useField } from '@unform/core';

import { Container, DatePickerText, Icon, PlaceholderText } from './styles';

interface PickerProps {
  name: string;
}

interface InputValueReference {
  value: Date;
}

const DatePickerInput: React.FC<PickerProps> = ({ name }) => {
  const { fieldName, registerField, defaultValue } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [date, setDate] = useState<Date>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  const formattedDate = useMemo(() => {
    const dateFormatted = format(date, "dd'/'MM'/'yyyy");

    return dateFormatted;
  }, [date]);

  const datepickerRef = useRef<any>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  });

  const handleToggleDatePicker = useCallback(() => {
    setShowCalendar(state => !state);
  }, []);

  const handleDateChange = useCallback((e: any, value: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowCalendar(false);
    }

    if (value) {
      inputValueRef.current.value = value;
      setHasChanged(true);
      setDate(value);
    }
  }, []);

  return (
    <>
      <Container ref={datepickerRef} onPress={handleToggleDatePicker}>
        <Icon name="calendar" size={24} color="#0076D0" />
        <DatePickerText>
          {hasChanged ? (
            formattedDate
          ) : (
            <PlaceholderText>Data de aniversário</PlaceholderText>
          )}
        </DatePickerText>
      </Container>
      {showCalendar && (
        <DateTimePicker
          value={date}
          display="calendar"
          textColor="#333"
          mode="date"
          onChange={handleDateChange}
        />
      )}
    </>
  );
};

export default DatePickerInput;