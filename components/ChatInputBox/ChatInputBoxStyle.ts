import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const ChatInputBoxStyle = StyleSheet.create({
  InputBoxContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  InputBoxContainerLeft: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: Colors.light.background,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    padding: 10,
  },
  InputBoxContainerRight: {
    width: 50,
    height: 50,
    backgroundColor: Colors.light.tint,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 50,
    marginLeft: 10,
  },
  InputBoxText: {
    fontSize: 17,
    // fontWeight: 'bold',
    flex: 1,
    marginHorizontal: 10,
  },
  InputBoxIcons: {
    marginHorizontal: 5,
    alignSelf: 'flex-end',
  },
});

export default ChatInputBoxStyle;
