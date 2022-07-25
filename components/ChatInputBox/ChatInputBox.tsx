import { View, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import ChatInputBoxStyle from './ChatInputBoxStyle';
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

const ChatInputBox = () => {
  const [message, onChangeMessage] = React.useState('');

  const handleMessageSent = () => {
    console.log(`Message : ${message}`);
    //send message to Backend before reset. This needs to implement
    onChangeMessage((prevState) => {
      return '';
    });
  };

  const handleMicrophonePress = () => {
    console.log('microphone');
  };

  const handleOnPress = () => {
    if (Boolean(message)) {
      handleMessageSent();
    } else {
      handleMicrophonePress();
    }
  };

  return (
    <View style={ChatInputBoxStyle.InputBoxContainer}>
      <View style={ChatInputBoxStyle.InputBoxContainerLeft}>
        <FontAwesome
          name="smile-o"
          size={30}
          style={ChatInputBoxStyle.InputBoxIcons}
        />
        <TextInput
          style={ChatInputBoxStyle.InputBoxText}
          placeholder="Type a message"
          multiline
          onChangeText={onChangeMessage}
          value={message}
        />
        <MaterialCommunityIcons
          name="attachment"
          size={30}
          style={ChatInputBoxStyle.InputBoxIcons}
        />
        {!Boolean(message) && (
          <MaterialCommunityIcons
            name="camera"
            size={30}
            color="grey"
            style={ChatInputBoxStyle.InputBoxIcons}
          />
        )}
      </View>

      <Pressable onPress={handleOnPress}>
        <View style={ChatInputBoxStyle.InputBoxContainerRight}>
          {Boolean(message) ? (
            <MaterialIcons name="send" size={28} color="white" />
          ) : (
            <MaterialCommunityIcons name="microphone" size={30} color="white" />
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default ChatInputBox;
