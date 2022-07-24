import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { ChatRoom } from '../../types';
import ChatsListItemStyle from './ChatsListItemStyle';

export type ChatListItemProps = {
  ChatRoom: ChatRoom;
};

const ChatsListItem = (props: ChatListItemProps) => {
  const { ChatRoom } = props;
  const user = ChatRoom.users[1];
  const lastMessageTime: string = getTimeOfLastMessage(
    ChatRoom.lastMessage.createdAt
  );

  // Logic for calculating time to Display
  function getTimeOfLastMessage(date: string) {
    const currentDate = moment();
    const givenDate = moment(date);
    const diffOfDays = currentDate.diff(givenDate, 'days');

    if (diffOfDays < 1) {
      return givenDate.toNow(true) + ' ago';
    } else if (diffOfDays > 1 && diffOfDays <= 2) {
      return 'Yesterday';
    } else {
      return givenDate.format('DD/MM/YYYY');
    }
  }
  const userImgUri = user.imageUri
    ? user.imageUri
    : 'https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png';
  getTimeOfLastMessage(ChatRoom.lastMessage.createdAt);

  // Root navigation for ChatRoom
  const navigation = useNavigation();
  const onTouchChatListItem = () => {
    navigation.navigate('ChatRoom', {
      id: ChatRoom.id,
      name: user.name,
      imageUri: user.imageUri,
    });
  };
  return (
    <TouchableWithoutFeedback onPress={onTouchChatListItem}>
      <View style={ChatsListItemStyle.ChatRoomContainer}>
        <View style={ChatsListItemStyle.ChatRoomContainer__avatar}>
          <Image
            // source={require('./avatr1.jpg')}
            source={{ uri: userImgUri }}
            style={ChatsListItemStyle.avatar}
          />
        </View>

        <View style={ChatsListItemStyle.ChatRoomContainer__contents}>
          <View style={ChatsListItemStyle.ChatRoomContainer__header}>
            <Text style={ChatsListItemStyle.ChatRoomContainer__title}>
              {user.name}
            </Text>
            <Text style={ChatsListItemStyle.ChatRoomContainer__createdAt}>
              {lastMessageTime}
              {/* {moment(ChatRoom.lastMessage.createdAt).format('DD/MM/YYYY')} */}
            </Text>
          </View>
          <View>
            <Text
              style={ChatsListItemStyle.ChatRoomContainer__lastMessage}
              numberOfLines={1}
            >
              {ChatRoom.lastMessage.content}
              {/* {ChatRoom.lastMessage.content.length > 40
              ? ChatRoom.lastMessage.content.slice(0, 40) + '...'
            : ChatRoom.lastMessage.content} */}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatsListItem;
