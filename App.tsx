import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppContainer } from './src/components/app-container';
import { Providers } from './src/components/providers';
import { Home } from './src/pages/home';

export default function App() {
  return (
    <Providers>
      <AppContainer>
        <Home />
        <StatusBar style='light' animated translucent />
      </AppContainer>
    </Providers>
  );
}
