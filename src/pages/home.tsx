import { Box, Center, VStack, Text } from 'native-base';
import { useEffect } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { useStore } from '../store/useStore';

export const Home = () => {
  const progress = useSharedValue(0);

  const { fetchHabits, habits } = useStore((state) => ({
    habits: state.habits,
    fetchHabits: state.fetchHabits,
  }));

  useEffect(() => {
    fetchHabits();
  }, []);

  console.log(habits);

  if (habits.isLoading) {
    return (
      <VStack flex={1} justifyContent='center' alignItems={'center'}>
        <Text color={'violet.700'}>Loading...</Text>
      </VStack>
    );
  }

  if (habits.isError) {
    return (
      <VStack flex={1} justifyContent='center' alignItems={'center'}>
        <Text color={'violet.700'}>Error</Text>
      </VStack>
    );
  }

  return (
    <VStack
      flex={1}
      justifyContent='center'
      alignItems={'center'}
      bg={'dark.800'}
    >
      {habits.data.map((habit) => (
        <Box
          key={habit.id}
          bg={'violet.800'}
          rounded='md'
          width={24}
          height={24}
          display='flex'
        />
      ))}
    </VStack>
  );
};
