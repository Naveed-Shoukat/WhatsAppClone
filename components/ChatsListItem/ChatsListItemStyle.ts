import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const ChatsListItemStyle = StyleSheet.create({
  ChatRoomContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    height: 50,
    padding: 10,
  },
  ChatRoomContainer__avatar: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    width: '15%',
  },
  avatar: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 25,
  },
  ChatRoomContainer__contents: {
    width: '85%',
    height: 60,
    padding: 5,
  },
  ChatRoomContainer__header: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ChatRoomContainer__title: {
    fontSize: 18,
    fontWeight: 'bold',
    // color: Colors.light.tint,
  },
  ChatRoomContainer__createdAt: {
    color: 'grey',
  },
  ChatRoomContainer__lastMessage: {
    color: 'grey',
  },
});

export default ChatsListItemStyle;
