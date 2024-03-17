import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React, { useState } from 'react';

export default function TextInputComponent() {
  const [chatInput, setChatInput] = useState('');
  return (
    <View style={styles.searchSection}>
      <TextInput
        style={styles.input}
        placeholder="Nhắn tin"
        onChangeText={(input) => {
          setChatInput({ input });
        }}
        underlineColorAndroid="transparent"
      />
      <Image style={styles.icon} source={require('../../assets/send.png')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 5,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 4,

    // backgroundColor: '#fff',
    color: '#424242',
  },
  icon: {
    width: 25,
    height: 25,
    padding: 5,
    margin: 5,
    marginRight: 10,
  },
});
