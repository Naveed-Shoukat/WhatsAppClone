import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

const ChatRoomScreen = () => {
  const route = useRoute();

  return (
    <View>
      <Text>{'Chat Room Screen'}</Text>
      <Text>Chat Room Screen</Text>
    </View>
  );
};

export default ChatRoomScreen;
