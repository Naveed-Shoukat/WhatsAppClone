import { StyleSheet } from 'react-native';

const CameraVissionStyle = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '100%',
    minHeight: '100%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnContainer: {
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    // alignContent: 'flex-end',
    // alignItems: 'flex-end',
    // alignSelf: 'flex-end',
  },
  absoluteFill: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  imagePreview: {
    alignSelf: 'stretch',
    flex: 1,
  },
});

export default CameraVissionStyle;
