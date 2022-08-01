import { Audio } from 'expo-av';
import * as MediaLibrary from 'expo-media-library';
import { shareAsync } from 'expo-sharing';
import React, { useEffect, useState } from 'react';

export default function useMicrophone() {
  const [recording, setRecording] = useState<
    Audio.Recording | undefined | null
  >();
  const [recordings, setRecordings] = useState([]);
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
    // instead of using console.warn try to use some snakes or other component
    // console.warn('Recording Started');
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

    if (hasMediaLibraryPremission) {
      shareAsync(uri).then(() => {
        setRecording(undefined);
      });
    }

    // instead of using console.warn try to use some snakes or other component
    // console.warn('Recording Ended');
  }

  return [startRecording, stopRecording];
}
