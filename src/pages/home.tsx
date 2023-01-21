import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/header';

export const Home = () => {
  // const habitsQuery = useQuery('getHabits', getHabits)

  // const { setHabits, habits, setIsError, setIsLoading } = useStore((state) => ({
  //   habits: state.habits,
  //   setHabits: state.setHabits,
  //   setIsLoading: state.setLoadingHabits,
  //   setIsError: state.setErrorHabits,
  // }));

  return (
    <View className={'flex-1 w-full h-full'}>
      <Header />
    </View>
  );
};
