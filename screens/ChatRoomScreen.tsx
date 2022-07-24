import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import ChatMessage from '../components/ChatMessage/ChatMessage';
import Chats from '../data/Chats';
// import BG from '../assets/images/ChatRoomBG.jpg';

const ChatRoomScreen = () => {
  const route = useRoute();

  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg',
        }}
        // source={BG}
        resizeMode="cover"
        imageStyle={{ flex: 1, justifyContent: 'center', opacity: 0.3 }}
      >
        <FlatList
          style={{ marginVertical: 10 }}
          inverted
          data={Chats.messages}
          renderItem={({ item }) => (
            <ChatMessage message={item} key={item.id} />
          )}
        />
      </ImageBackground>
    </View>
  );
};

export default ChatRoomScreen;
