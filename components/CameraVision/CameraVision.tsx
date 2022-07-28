import {
  View,
  Text,
  ActivityIndicator,
  Button,
  SafeAreaView,
  Image,
} from 'react-native';
import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import CameraVissionStyle from './CameraVisionStyle';

import { Camera, CameraCapturedPicture } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import CameraScreen from '../../screens/CameraScreen';

export type PhotoOptions = {
  quality: number;
  base64: boolean;
  exit: boolean;
};

const CameraVision = () => {
  const cameraRef = React.useRef() as React.MutableRefObject<Camera>;
  const [hasCameraPremission, setHasCameraPremission] =
    useState<Boolean | null>(null);
  const [hasMediaLibraryPremission, setHasMediaLibraryPremission] =
    useState<Boolean | null>(null);
  const [photo, setPhoto] = useState<CameraCapturedPicture | undefined>(
    undefined
  );

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPremission(cameraPermission.status === 'granted');
      setHasMediaLibraryPremission(mediaLibraryPermission.status === 'granted');
    })();
  }, [CameraScreen]);

  if (hasCameraPremission === null) {
    return (
      <View>
        <Text>Camera not avaliable</Text>
      </View>
    );
  }
  if (!hasCameraPremission) {
    return (
      <View>
        <Text>
          Premission denied to access Device Camera. Please go to your device
          setting and allow Permission to use camera
        </Text>
      </View>
    );
  }

  const takePic = async () => {
    const options: PhotoOptions = {
      quality: 1,
      base64: true,
      exit: false,
    };
    const newPhoto = await cameraRef.current?.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    const sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    const savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    const discardPic = () => {
      setPhoto(undefined);
    };
    return (
      <SafeAreaView style={CameraVissionStyle.container}>
        <Image
          style={CameraVissionStyle.imagePreview}
          source={{ uri: 'data:image/jpg;base64' + photo.base64 }}
        />
        <Button title="Share" onPress={sharePic} />
        {hasMediaLibraryPremission && (
          <Button title="Save" onPress={sharePic} />
        )}
        <Button title="Discard" onPress={discardPic} />
      </SafeAreaView>
    );
  }

  return (
    <View style={CameraVissionStyle.container}>
      <Camera style={CameraVissionStyle.absoluteFill} ref={cameraRef}></Camera>
      <View style={CameraVissionStyle.btnContainer}>
        <Button title="Take Photo" onPress={takePic}></Button>
      </View>
    </View>
  );
};

export default CameraVision;
