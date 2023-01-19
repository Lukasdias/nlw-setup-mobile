import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const Loading = () => {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size='large' color='#7C3AED' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
