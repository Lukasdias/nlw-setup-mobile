import { StatusBar } from 'expo-status-bar';
import 'dayjs/locale/pt-br';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppContainer } from './src/components/app-container';
import { Providers } from './src/components/providers';
import { Home } from './src/pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewHabit } from './src/pages/new-habit';
import { EditHabit } from './src/pages/edit-habit';

type RootStackParamList = {
  Home: undefined;
  NewHabit: undefined;
  EditHabit: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Providers>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
          contentStyle: {
            flex: 1,
          },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='NewHabit' component={NewHabit} />
        <Stack.Screen name='EditHabit' component={EditHabit} />
      </Stack.Navigator>
      <StatusBar style='light' animated translucent />
    </Providers>
  );
}
