import { Check, IconProps } from 'phosphor-react-native';
import { memo } from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  withDelay,
  useAnimatedStyle,
  interpolateColor,
  withTiming,
  useDerivedValue,
  useAnimatedProps,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Checkbox: React.FC<CheckboxProps> = memo(
  ({ checked, onChange }) => {
    const on = useDerivedValue(() =>
      checked
        ? withSpring(1, {
            damping: 20,
            stiffness: 200,
          })
        : withSpring(0, {
            damping: 20,
            stiffness: 200,
          })
    );

    const props = useAnimatedStyle(() => {
      const bg = interpolateColor(on.value, [0, 1], ['#18181b', '#22c55e']);
      return {
        backgroundColor: bg,
      };
    });

    const checkStyle = useAnimatedStyle(() => {
      const scale = interpolate(on.value, [0, 1], [0, 1], Extrapolate.CLAMP);
      return {
        transform: [{ scale }],
      };
    });

    return (
      <AnimatedPressable
        className={`w-8 h-8 rounded-lg flex justify-center items-center`}
        style={[props]}
        onPress={onChange}
      >
        {checked && (
          <Animated.View style={checkStyle}>
            <Check weight={'bold'} color={'#fff'} size={20} />
          </Animated.View>
        )}
      </AnimatedPressable>
    );
  }
);
