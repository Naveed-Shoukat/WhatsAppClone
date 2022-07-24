import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import ChatsListItemStyle from './ChatRoomHeaderStyle';

export type ChatRoomHeaderProps = {
  ChatRoomProps: {
    id: string;
    name: string;
    imageUri: string;
  };
};

const ChatRoomHeader = (props: ChatRoomHeaderProps) => {
  const route = useRoute();

  return (
    <View style={ChatsListItemStyle.ChatRoomHeader__container}>
      <View style={ChatsListItemStyle.ChatRoomHeader__avatar}>
        <Image
          source={{ uri: props.ChatRoomProps.imageUri }}
          style={ChatsListItemStyle.ChatRoomHeader__avatarImage}
        />
      </View>

      <View style={ChatsListItemStyle.ChatRoomHeader__title}>
        <Text style={ChatsListItemStyle.ChatRoomHeader__name}>
          {props.ChatRoomProps.name}
        </Text>
        <Text style={ChatsListItemStyle.ChatRoomHeader__lastSeen}>
          Last Seen
        </Text>
      </View>
      <View style={ChatsListItemStyle.ChatRoomHeader__icons}>
        <FontAwesome5 name="video" size={22} color={'white'} />
        <MaterialIcons name="call" size={22} color={'white'} />
        <MaterialCommunityIcons
          name="dots-vertical"
          size={26}
          color={'white'}
        />
      </View>
    </View>
  );
};

export default ChatRoomHeader;
