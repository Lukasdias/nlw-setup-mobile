import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { useQuery } from 'react-query';
import { Loading } from '../components/loading';
import { getHabits } from '../services/api';
import { useStore } from '../store/useStore';

export const Home = () => {
  // const habitsQuery = useQuery('getHabits', getHabits)

  const { setHabits, habits, setIsError, setIsLoading } = useStore((state) => ({
    habits: state.habits,
    setHabits: state.setHabits,
    setIsLoading: state.setLoadingHabits,
    setIsError: state.setErrorHabits,
  }));

  return (
    <Text
      style={{
        color: 'white',
      }}
    >
      Hello
    </Text>
  );
};
