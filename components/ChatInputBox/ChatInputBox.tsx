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

const ChatInputBox = () => {
  const [message, onChangeMessage] = React.useState('');

  //================= Microphone handling code ================================
  // State and related variables for teh use of Microphone using expo audio-av lib
  const [recording, setRecording] = React.useState<
    Audio.Recording | undefined | null
  >();
  const [recordings, setRecordings] = React.useState([]);
  const [hasAudioPremission, setHasAudioPremission] = useState<Boolean | null>(
    null
  );
  const [hasMediaLibraryPremission, setHasMediaLibraryPremission] =
    useState<Boolean | null>(null);

  useEffect(() => {
    (async () => {
      const audioPermission = await Audio.requestPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasAudioPremission(audioPermission.status === 'granted');
      setHasMediaLibraryPremission(mediaLibraryPermission.status === 'granted');
    })();
  }, []);

  const startRecording = async () => {
    if (hasAudioPremission === null) {
      console.warn('Unable to detect Microphone on your device');
    }
    if (!hasAudioPremission) {
      console.warn(
        'Premission denied to access Device Microphone. Please go to your device setting and allow Permission to use Microphone'
      );
    }

    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  async function stopRecording() {
    // setRecording(undefined);
    await recording?.stopAndUnloadAsync();
    const uri = recording!.getURI();
    // console.log('Recording stopped and stored at', uri);

    if (hasMediaLibraryPremission) {
      shareAsync(uri).then(() => {
        setRecording(undefined);
      });
    }
  }
  //================= End of Microphone handling code =============================

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
    } else {
      // Microphone();
      // handleMicrophonePress();
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
