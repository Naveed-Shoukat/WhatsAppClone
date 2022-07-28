import {
  View,
  TextInput,
  Pressable,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import ChatInputBoxStyle from './ChatInputBoxStyle';
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

import { Audio } from 'expo-av';
import * as MediaLibrary from 'expo-media-library';
import { shareAsync } from 'expo-sharing';
import useMicrophone from '../Microphone/Microphone';

const ChatInputBox = () => {
  const [message, onChangeMessage] = React.useState('');
  const [startRecording, stopRecording] = useMicrophone();

  //Function to send typed message to Backend
  const handleMessageSent = () => {
    console.log(`Message : ${message}`);
    //send message to Backend before reset. This needs to implement
    onChangeMessage((prevState) => {
      return '';
    });
  };

  const handleOnPress = () => {
    if (Boolean(message)) {
      handleMessageSent();
    }
  };

  const handelCameraIcon = () => {};
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
            onPress={handelCameraIcon}
          />
        )}
      </View>

      <Pressable onPress={handleOnPress}>
        <View style={ChatInputBoxStyle.InputBoxContainerRight}>
          {Boolean(message) ? (
            <MaterialIcons name="send" size={28} color="white" />
          ) : (
            <TouchableOpacity
              onPressOut={stopRecording}
              onLongPress={startRecording}
            >
              <MaterialCommunityIcons
                name="microphone"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default ChatInputBox;
