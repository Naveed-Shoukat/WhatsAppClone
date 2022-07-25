import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const NewMessageButtonStyle = StyleSheet.create({
  ButtonContainer: {
    backgroundColor: Colors.light.tint,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default NewMessageButtonStyle;
