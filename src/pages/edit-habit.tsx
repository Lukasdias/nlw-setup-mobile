import dayjs from 'dayjs';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, TextInput, FlatList, ScrollView } from 'react-native';
import { Modalize, ModalizeProps, useModalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { AppContainer } from '../components/app-container';
import { HeaderBack } from '../components/header-back';
import { ProgressBar } from '../components/progress-bar';
import { useStore } from '../store/useStore';
import { Button } from './../components/button';
import { Checkbox } from './../components/checkbox';

interface NewHabitProps extends ModalizeProps {
  visible: boolean;
}

const weekDays = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];

export const EditHabit = () => {
  const selectedDate = useStore(useCallback((state) => state.selectedDate, []));
  const setSelectedDate = useStore(
    useCallback((state) => state.setSelectedDate, [])
  );

  useEffect(() => {
    return () => setSelectedDate(null);
  }, []);

  return (
    <AppContainer>
      <ScrollView className={'w-full  bg-background'}>
        <HeaderBack />
        <Text className={'text-zinc-400 font-semibold mb-3 mt-4'}>
          {dayjs(selectedDate).locale('pt-br').format('dddd')}
        </Text>
        <Text className={'text-white font-semibold mb-3 text-3xl'}>
          {dayjs(selectedDate).format('DD/MM')}
        </Text>
        <ProgressBar value={50} />
      </ScrollView>
    </AppContainer>
  );
};
