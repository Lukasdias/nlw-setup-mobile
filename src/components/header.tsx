import { memo } from 'react';
import { Pressable, View, Text } from 'react-native';
import Logo from './../assets/logo.svg';

export const Header = memo(() => {
  return (
    <View
      className={
        'w-full flex flex-row justify-between items-center bg-violet-400'
      }
    >
      <Logo className={'w-[116px]'} />
    </View>
  );
});
