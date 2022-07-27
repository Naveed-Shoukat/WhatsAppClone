import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

//@ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';

import Amplify from 'aws-amplify';
import { API, Auth, graphqlOperation, input } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { useEffect } from 'react';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';
Amplify.configure(awsconfig);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    const fetchUser = async () => {
      // First Get authenticated user from Auth
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      // console.log(userInfo);

      if (userInfo.attributes.sub) {
        //getUset issue need to be resolved
        // Second Get the use from Backend with the user ID with SUB from Auth
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );

        // console.log('userData: ', userData);

        // Error in getting data using getUsers from API.graphql query using. Some authentication error will look into this in future
        // if (userData.data.getUser) {
        //   console.log('User already registered in Database ');
        //   return;
        // }

        const newUser = {
          // id: userInfo.attributes.sub,
          // name: userInfo.username,
          id: 'e82d2412-2874-44ce-8c54-192e06b58009',
          name: 'naveedshoukat',
          imageUri: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
          status: 'Hi I am using FXWhatsApp',
        };

        await API.graphql(graphqlOperation(createUser, { input: newUser }));
        // If no such user in DB then create it
      }
    };

    fetchUser();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App);
