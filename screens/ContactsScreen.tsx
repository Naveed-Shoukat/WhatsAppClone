import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import Users from '../data/Users';
import ContactssListItem from '../components/ContactsListItem/ContactsListItem';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const ContactsScreen = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          marginHorizontal: 15,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.light.tint,
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MaterialIcons name="group" size={28} color="white" />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginLeft: 10,
          }}
        >
          New Group
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          marginHorizontal: 15,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.light.tint,
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesome name="user-plus" size={28} color="white" />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginLeft: 10,
          }}
        >
          Add New Contact
        </Text>
      </View>
      <Text style={{ marginHorizontal: 20 }}>Contacts avaliable on Phone</Text>
      <FlatList
        data={Users}
        renderItem={({ item }) => (
          <ContactssListItem user={item} key={item.id} />
        )}
      />
    </View>
  );
};

export default ContactsScreen;
