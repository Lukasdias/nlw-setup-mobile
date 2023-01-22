import { memo } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';
import { Check, Plus } from 'phosphor-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated';

interface ButtonProps extends PressableProps {
  variant?: 'violet' | 'green';
  icon: 'plus' | 'check';
  text: string;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Button: React.FC<ButtonProps> = memo(({ ...props }) => {
  const { variant, icon } = props;
  const violetC = 'bg-transparent text-white border-violet-500 border-2';
  const greenC = 'bg-green-500 text-white border-green-500 border-2';

  const classVariant = variant === 'violet' ? violetC : greenC;

  const Icon = icon === 'plus' ? Plus : Check;

  const progress = useSharedValue(1);

  const styles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: progress.value }],
      opacity: progress.value,
    };
  });

  const onPressIn = () => {
    progress.value = withTiming(0.9, { duration: 100 });
  };

  const onPressOut = () => {
    progress.value = withTiming(1, { duration: 100 });
  };

  return (
    <AnimatedPressable
      {...props}
      className={`
    ${classVariant} py-2 px-3 rounded-lg
  `}
      style={styles}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <View className={'flex flex-row gap-3 items-center justify-center'}>
        <Icon size={24} color={variant === 'violet' ? '#8b5cf6' : '#fff'} />
        <Text className={'text-sm font-bold text-white'}>{props.text}</Text>
      </View>
    </AnimatedPressable>
  );
});
