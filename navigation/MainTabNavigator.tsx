/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootTabParamList, RootTabScreenProps } from '../types';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import CameraScreen from '../screens/CameraScreen';
import ChatsScreen from '../screens/ChatsScreen';
import StatusScreen from '../screens/StatusScreen';
import CallsScreen from '../screens/CallsScreen';
import { Fontisto } from '@expo/vector-icons';

const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4,
          borderRadius: 2,
        },
        tabBarLabelStyle: {
          fontWeight: '900',
          fontSize: 13,
        },
        tabBarShowIcon: true,
      }}
    >
      <MainTab.Screen
        name="Camera"
        component={CameraScreen}
        options={({ navigation }: RootTabScreenProps<'Camera'>) => ({
          // title: 'Camera',

          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" color={color} size={18} />
          ),
          tabBarLabel: () => null,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />

      <MainTab.Screen name="Chats" component={ChatsScreen} />

      <MainTab.Screen name="Status" component={StatusScreen} />

      <MainTab.Screen name="Calls" component={CallsScreen} />
    </MainTab.Navigator>
  );
}

// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }
