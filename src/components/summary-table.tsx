import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import React, { memo, useCallback, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, Dimensions } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useStore } from '../store/useStore';
import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-days';

const { width, height } = Dimensions.get('window');

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const availableDays = generateRangeDatesFromYearStart();
const fakeDays = 18 * 7;
const mustBeFilled = fakeDays - availableDays.length;
const data = [...availableDays, ...Array(mustBeFilled).fill(null)];

const Node: React.FC<{
  day: Date | null;
}> = memo(({ day }) => {
  const navigate = useNavigation();
  const progress = useSharedValue(0);
  const opacity = useSharedValue(1);

  const setSelectedDate = useStore(
    useCallback((state) => state.setSelectedDate, [])
  );

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }],
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    progress.value = withDelay(300, withTiming(1, { duration: 300 }));
  }, []);

  const onPressIn = () => {
    if (!day) return;
    progress.value = withSpring(0.8);
    opacity.value = withTiming(0.5);
  };

  const onPressOut = () => {
    if (!day) return;
    progress.value = withSpring(1);
    opacity.value = withTiming(1);
  };

  return (
    <Pressable
      className={`w-10 h-10 flex justify-center items-center`}
      onPress={() => {
        if (!day) return;
        setSelectedDate(day);
        navigate.navigate('EditHabit');
      }}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        className={`w-8 h-8 rounded-lg  ${
          day ? 'bg-violet-700' : 'bg-transparent border-zinc-700 border-2'
        }`}
        style={animatedStyle}
      />
    </Pressable>
  );
});

const SummaryNodes = memo(() => {
  return (
    <View
      className={'flex flex-row flex-wrap mt-2 justify-between items-center'}
    >
      {data.map((day) => (
        <Node day={day} />
      ))}
    </View>
  );
});

export const SummaryTable = memo(() => {
  return (
    <ScrollView
      className={'w-full flex mt-6'}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    >
      <View className={'flex flex-row justify-around'}>
        {weekDays.map((day, idx) => (
          <View
            key={`${day}-${idx}`}
            className={'h-10 w-10 flex justify-center items-center'}
          >
            <Text className={'text-xl font-bold text-zinc-400'}>{day}</Text>
          </View>
        ))}
      </View>
      <SummaryNodes />
    </ScrollView>
  );
});
