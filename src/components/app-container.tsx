import { View, StatusBar } from 'react-native';

export const AppContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <View className={'flex flex-1 bg-background px-8 pt-16'}>
      <StatusBar
        barStyle='light-content'
        animated
        translucent
        backgroundColor={'transparent'}
      />
      {children}
    </View>
  );
};
