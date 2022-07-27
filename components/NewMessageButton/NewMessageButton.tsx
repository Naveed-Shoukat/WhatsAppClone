import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import NewMessageButtonStyle from './NewMessageButtonStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NewMessageButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // console.log('Contacts btn pressed');
    navigation.navigate('Contacts');
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={NewMessageButtonStyle.ButtonContainer}
    >
      <View>
        <MaterialCommunityIcons
          name="message-reply-text"
          size={28}
          color="white"
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewMessageButton;
