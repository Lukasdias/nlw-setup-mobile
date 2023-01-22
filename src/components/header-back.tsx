import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';
import { Pressable } from 'react-native';

export const HeaderBack = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <ArrowLeft weight={'bold'} size={24} color={'#a1a1aa'} />
    </Pressable>
  );
};
