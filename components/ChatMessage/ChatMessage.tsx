import { View, Text } from 'react-native';
import React from 'react';
import moment from 'moment';
import ChatMessageStyle from './ChatMessageStyle';

export type ChatMessageProps = {
  message: {
    id: string;
    content: string;
    createdAt: string;
    user: {
      id: string;
      name: string;
    };
  };
};

const ChatMessage = (props: ChatMessageProps) => {
  const isGroup = true;
  const { message } = props;
  const isMyMessage = () => {
    return message.user.id === 'u1';
  };

  const MessageBoxPosition = isMyMessage()
    ? ChatMessageStyle.messageBoxRight
    : ChatMessageStyle.messageBoxLeft;
  return (
    <View style={[ChatMessageStyle.messageBox, MessageBoxPosition]}>
      {isGroup && !isMyMessage() && (
        <Text style={ChatMessageStyle.userName}>{message.user.name}</Text>
      )}
      <Text>{message.content}</Text>
      <Text style={ChatMessageStyle.messageTime}>
        {moment(message.createdAt).format('HH:MM')}
      </Text>
    </View>
  );
};

export default ChatMessage;
