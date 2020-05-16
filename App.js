import * as React from 'react';
import  MainComponent from './Components/MainComponent';
import { Text, View, StyleSheet } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <MainComponent/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})