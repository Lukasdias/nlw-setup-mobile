import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Pressable, View, Text } from 'react-native';
import { Logo } from './../components/logo';
import { Button } from './button';

export const Header = memo(() => {
  const navigate = useNavigation();
  return (
    <View className={'w-full flex flex-row justify-between items-center'}>
      <Logo />
      <Button
        icon={'plus'}
        variant={'violet'}
        text={'Novo'}
        onPress={() => navigate.navigate('NewHabit')}
      />
    </View>
  );
});
