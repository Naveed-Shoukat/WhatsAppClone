import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Microphone from '../components/Microphone/Microphone';
import { Text, View } from '../components/Themed';

export default function CallsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calls</Text>
      <Microphone />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
