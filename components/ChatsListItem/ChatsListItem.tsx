import React from 'react';
import { Image, Text, View } from 'react-native';
import { ChatRoom } from '../../types';
import ChatsListItemStyle from './ChatsListItemStyle';

export type ChatListItemProps = {
  ChatRoom: ChatRoom;
};

const ChatsListItem = (props: ChatListItemProps) => {
  const { ChatRoom } = props;
  const user = ChatRoom.users[0];

  return (
    <View style={ChatsListItemStyle.ChatRoomContainer}>
      <View style={ChatsListItemStyle.ChatRoomContainer__avatar}>
        <Image
          source={require('./avatr1.jpg')}
          style={ChatsListItemStyle.avatar}
        />
      </View>

      <View style={ChatsListItemStyle.ChatRoomContainer__contents}>
        <View style={ChatsListItemStyle.ChatRoomContainer__header}>
          <Text style={ChatsListItemStyle.ChatRoomContainer__title}>
            {'Naveed Shoukat Ali'}
          </Text>
          <Text style={ChatsListItemStyle.ChatRoomContainer__createdAt}>
            {'Yesterday'}
          </Text>
        </View>
        <View>
          <Text style={ChatsListItemStyle.ChatRoomContainer__lastMessage}>
            {'The last message content will show here'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatsListItem;
