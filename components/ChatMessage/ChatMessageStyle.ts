import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const ChatMessageStyle = StyleSheet.create({
  messageBox: {
    flex: 1,
    width: '87%',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
  messageBoxLeft: {
    marginLeft: 10,
    marginRight: '10%',
    backgroundColor: 'white',
  },
  messageBoxRight: {
    marginLeft: '10%',
    marginRight: 5,
    backgroundColor: '#DCF8C5',
  },
  messageTime: {
    alignSelf: 'flex-end',
    color: 'grey',
  },
});

export default ChatMessageStyle;
