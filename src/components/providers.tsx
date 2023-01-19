import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Loading } from './loading';
import { AppContainer } from './app-container';

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const fontsLoaded = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppContainer>{children}</AppContainer>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};
