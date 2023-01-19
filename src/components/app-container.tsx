import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native';

export const AppContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
