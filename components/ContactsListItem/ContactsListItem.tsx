import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import ContactssListItemStyle from './ContactsListItemStyle';

export type ContactsListItemProps = {
  user: {
    id: String;
    name: String;
    imageUri: String;
    // status: String | undefined;
  };
};

const ContactssListItem = (props: ContactsListItemProps) => {
  const { user } = props;

  const userImgUri = user.imageUri
    ? user.imageUri
    : 'https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png';

  // Root navigation for ChatRoom
  const navigation = useNavigation();

  const onTouchContactsListItem = () => {
    // navigation.navigate('Contacts')
  };
  return (
    <TouchableWithoutFeedback onPress={onTouchContactsListItem}>
      <View style={ContactssListItemStyle.ContactsRoomContainer}>
        <View style={ContactssListItemStyle.ContactsRoomContainer__avatar}>
          <Image
            source={{
              uri: userImgUri,
            }}
            style={ContactssListItemStyle.avatar}
          />
        </View>

        <View style={ContactssListItemStyle.ContactsRoomContainer__contents}>
          <Text style={ContactssListItemStyle.ContactsRoomContainer__title}>
            {user.name}
          </Text>
          <Text>Hello their, I am using FXWhatsApp</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactssListItem;
