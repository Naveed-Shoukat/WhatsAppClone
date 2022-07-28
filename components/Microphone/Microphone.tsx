import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Audio, AVPlaybackStatus } from 'expo-av';
import * as MediaLibrary from 'expo-media-library';
import { shareAsync } from 'expo-sharing';

export default function Microphone() {
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

  if (hasAudioPremission === null) {
    return (
      <View>
        <Text>Camera not avaliable</Text>
      </View>
    );
  }
  if (!hasAudioPremission) {
    return (
      <View>
        <Text>
          Premission denied to access Device Microphone. Please go to your
          device setting and allow Permission to use Microphone
        </Text>
      </View>
    );
  }

  const startRecording = async () => {
    try {
      console.log('Requesting permissions..');
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  async function stopRecording() {
    console.log('Stopping recording..');
    // setRecording(undefined);
    await recording?.stopAndUnloadAsync();
    const uri = recording!.getURI();
    console.log('Recording stopped and stored at', uri);

    shareAsync(uri).then(() => {
      setRecording(undefined);
    });
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    flex: 1,
    margin: 16,
  },
  button: {
    margin: 16,
  },
});
