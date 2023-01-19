import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Providers } from './src/components/providers';
import { Home } from './src/pages/home';

export default function App() {
  return (
    <Providers>
      <Home />
      <StatusBar style="auto" />
    </Providers>
    
  );
}
