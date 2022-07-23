import { FlatList, StyleSheet } from 'react-native';
import ChatsListItem from '../components/ChatsListItem/ChatsListItem';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatRooms from '../data/ChatRooms';

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        // style={{ width: '100%' }}
        data={ChatRooms}
        renderItem={({ item }) => (
          <ChatsListItem ChatRoom={item} key={item.id} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
