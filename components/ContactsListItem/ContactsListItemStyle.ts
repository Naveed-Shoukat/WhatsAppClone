import { StyleSheet } from 'react-native';

const ContactsListItemStyle = StyleSheet.create({
  ContactsRoomContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    height: 70,
    padding: 10,
  },
  ContactsRoomContainer__avatar: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    width: '15%',
  },
  avatar: {
    width: 50,
    height: 50,
    margin: 5,
    marginTop: 10,
    borderRadius: 25,
  },
  ContactsRoomContainer__contents: {
    width: '85%',
    height: 60,
    padding: 5,
  },
  ContactsRoomContainer__title: {
    fontSize: 18,
    fontWeight: 'bold',
    // color: Colors.light.tint,
  },
});

export default ContactsListItemStyle;
