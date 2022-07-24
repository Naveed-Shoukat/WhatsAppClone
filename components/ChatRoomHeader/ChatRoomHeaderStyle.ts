import { StyleSheet } from 'react-native';

const ChatsListItemStyle = StyleSheet.create({
  ChatRoomHeader__container: {
    flex: 3,
    flexDirection: 'row',
    width: '85%',
    height: 50,
    marginLeft: '15%',
    marginRight: 10,
    justifyContent: 'flex-end',
  },
  ChatRoomHeader__avatar: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    marginRight: 10,
  },
  ChatRoomHeader__avatarImage: {
    width: 35,
    height: 35,
    borderRadius: 25,
    marginTop: 2,
  },
  ChatRoomHeader__title: {
    width: '50%',
    alignSelf: 'center',
  },
  ChatRoomHeader__name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  ChatRoomHeader__lastSeen: {
    fontSize: 10,
    color: 'white',
  },
  ChatRoomHeader__icons: {
    width: '20%',
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});

export default ChatsListItemStyle;
