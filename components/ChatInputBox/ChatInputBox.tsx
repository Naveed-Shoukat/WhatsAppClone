import { View, TextInput, Pressable, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import ChatInputBoxStyle from './ChatInputBoxStyle';
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

import useMicrophone from '../Microphone/Microphone';

const ChatInputBox = () => {
  const [message, setMessage] = useState('');
  const [showIcons, setShowIcons] = useState(true);
  const [inputPlaceholder, setInputPlaceholder] = useState('Type a message');
  const [startRecording, stopRecording] = useMicrophone();

  //Function to send typed message to Backend
  const handleMessageSent = () => {
    console.log(`Message : ${message}`);
    //send message to Backend before reset. This needs to implement

    setMessage((prevState) => {
      return '';
    });
  };

  const handleOnPress = () => {
    if (Boolean(message)) {
      handleMessageSent();
    }
  };

  const handelCameraIcon = () => {};

  // ============== Code for Microphone looks like blinking ====================
  const [redColor, setRedColor] = useState('red');
  useEffect(() => {
    setInterval(() => {
      setRedColor((value) => {
        if (value === 'red') {
          return 'white';
        } else {
          return 'red';
        }
      });
    }, 5000);
  }, []);
  return (
    <View style={ChatInputBoxStyle.InputBoxContainer}>
      <View style={ChatInputBoxStyle.InputBoxContainerLeft}>
        {showIcons && (
          <FontAwesome
            name="smile-o"
            size={30}
            style={ChatInputBoxStyle.InputBoxIcons}
          />
        )}

        {!showIcons && (
          <MaterialCommunityIcons
            name="microphone"
            size={26}
            color={redColor}
          />
        )}

        <TextInput
          style={ChatInputBoxStyle.InputBoxText}
          placeholder={inputPlaceholder}
          multiline
          onChangeText={setMessage}
          value={message}
        />

        {showIcons && (
          <MaterialCommunityIcons
            name="attachment"
            size={30}
            style={ChatInputBoxStyle.InputBoxIcons}
          />
        )}

        {showIcons && !Boolean(message) && (
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
              onPressOut={() => {
                setShowIcons(true);
                setInputPlaceholder('Type a message');
                stopRecording();
              }}
              onLongPress={() => {
                setShowIcons(false);
                setInputPlaceholder('Recording, Slide Left to cancel');
                startRecording();
              }}
              // accessibilityHint="Tap to send message"
              // accessibilityLabel="Seend Message"
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
