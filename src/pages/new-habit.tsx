import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, FlatList, ScrollView } from 'react-native';
import { Modalize, ModalizeProps, useModalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { AppContainer } from '../components/app-container';
import { HeaderBack } from '../components/header-back';
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

export const NewHabit = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);

  return (
    <AppContainer>
      <ScrollView className={'w-full  bg-background'}>
        <HeaderBack />
        <Text className={'text-2xl font-bold text-white mb-6 mt-4'}>
          Criar Hábito
        </Text>
        <Text className={'text-white font-semibold mb-3'}>
          Qual seu comprometimento?
        </Text>
        <TextInput
          className={'bg-zinc-800 rounded-lg p-3 mb-4 text-white'}
          placeholder={'Exercícios, dormir bem, etc...'}
          placeholderTextColor={'#a1a1aa'}
        />
        <Text className={'text-white font-semibold mb-1'}>
          Qual a recorrência?
        </Text>
        <Text className={'text-zinc-600 mb-3 text-xs'}>
          {selectedDays.length === 0
            ? 'Nenhum dia selecionado'
            : `${selectedDays.length} dia(s) selecionado(s)`}
        </Text>
        <FlatList
          data={weekDays}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <View className={'flex-row items-center mb-2'}>
              <Checkbox
                checked={selectedDays.includes(index)}
                onChange={() => {
                  const newSelectedDays = [...selectedDays];
                  if (!selectedDays.includes(index)) {
                    newSelectedDays.push(index);
                  } else {
                    newSelectedDays.splice(newSelectedDays.indexOf(index), 1);
                  }
                  setSelectedDays(newSelectedDays);
                }}
              />
              <Text className={'text-white font-semibold mx-2'}>{item}</Text>
            </View>
          )}
        />
        <View className={'h-4'} />
        <Button variant={'green'} icon={'check'} text={'Confirmar'} />
      </ScrollView>
    </AppContainer>
  );
};
