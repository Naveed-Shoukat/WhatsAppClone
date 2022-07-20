// /**
//  * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
//  * https://reactnavigation.org/docs/bottom-tab-navigator
//  */
//  const BottomTab = createBottomTabNavigator<RootTabParamList>();

//  function BottomTabNavigator() {
//    const colorScheme = useColorScheme();

//    return (
//      <BottomTab.Navigator
//        initialRouteName="TabOne"
//        screenOptions={{
//          tabBarActiveTintColor: Colors[colorScheme].tint,
//        }}
//      >
//        <BottomTab.Screen
//          name="TabOne"
//          component={TabOneScreen}
//          options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
//            title: 'Tab One',
//            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//            headerRight: () => (
//              <Pressable
//                onPress={() => navigation.navigate('Modal')}
//                style={({ pressed }) => ({
//                  opacity: pressed ? 0.5 : 1,
//                })}
//              >
//                <FontAwesome
//                  name="info-circle"
//                  size={25}
//                  color={Colors[colorScheme].text}
//                  style={{ marginRight: 15 }}
//                />
//              </Pressable>
//            ),
//          })}
//        />
//        <BottomTab.Screen
//          name="TabTwo"
//          component={TabTwoScreen}
//          options={{
//            title: 'Tab Two',
//            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//          }}
//        />
//      </BottomTab.Navigator>
//    );
//  }
