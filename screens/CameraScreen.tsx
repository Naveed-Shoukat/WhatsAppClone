import { StyleSheet } from 'react-native';
import CameraVision from '../components/CameraVision/CameraVision';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function CameraScreen({
  navigation,
}: RootTabScreenProps<'Camera'>) {
  return (
    <View style={styles.container}>
      <CameraVision />
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
