import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { AppContainer } from '../components/app-container';
import { Header } from '../components/header';
import { SummaryTable } from '../components/summary-table';
import { useStore } from '../store/useStore';

export const Home = () => {
  const { setHabits, habits, setIsError, setIsLoading } = useStore((state) => ({
    habits: state.habits,
    setHabits: state.setHabits,
    setIsLoading: state.setLoadingHabits,
    setIsError: state.setErrorHabits,
  }));

  return (
    <AppContainer>
      <View className={'flex-1 w-full h-full'}>
        <Header />
        <SummaryTable />
      </View>
    </AppContainer>
  );
};
