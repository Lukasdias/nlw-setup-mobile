import { memo, useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  withDelay,
  useAnimatedStyle,
  interpolateColor,
  withTiming,
} from 'react-native-reanimated';

type ProgressBarProps = {
  value: number;
};

export const ProgressBar: React.FC<ProgressBarProps> = memo(({ value }) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(value, {
      duration: 300,
    });
  }, [value]);

  const animatedStyle = useAnimatedStyle(() => {
    const v = progress.value > 100 ? 100 : progress.value;
    return {
      width: `${v}%`,
    };
  });

  return (
    <View className={'h-3 w-full rounded-lg bg-zinc-700 flex'}>
      <Animated.View
        className={'h-full rounded-lg flex bg-violet-600'}
        style={animatedStyle}
      />
    </View>
  );
});
