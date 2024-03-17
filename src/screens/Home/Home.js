import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Config } from 'react-native-config';
import { useSelector } from 'react-redux';
import { strings } from '@/localization';
import { getUser } from '@/selectors/UserSelectors';
import { styles } from '@/screens/Home/Home.styles';
import { typography } from '@/theme';
import { TextField } from '@/components';
import UserV from '@/components/UserV/UserV';
import usersData from '@/mocks/usersData';
import UserChat from '@/components/UserChat/UserChat';

export function Home() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const user = useSelector(getUser);
  const [search, setSearch] = useState('');
  const [users, setUsername] = useState(usersData);

  return (
    <View style={styles.leftContainer}>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[typography.text, { color: colors.text }]}>{user?.username}</Text>
          <Text style={[typography.title, { color: colors.text }]}> Chats</Text>
        </View>

        <TextField
          style={styles.textField}
          autoCapitalize="none"
          accessibilityHint={strings.chat.search}
          accessibilityLabel={strings.chat.search}
          onChangeText={setSearch}
          placeholder={strings.chat.search}
          value={search}
        />
        <ScrollView style={[styles.leftHorizontal, { height: 100 }]} horizontal>
          {users.map((user) => (
            <UserV key={user.id} name={user.name} srcAvatar={user.avatar} />
          ))}
        </ScrollView>
        {users.map((user) => (
          <UserChat
            key={user.id}
            name={user.name}
            srcAvatar={user.avatar}
            chatContent={user.chatContent}
          />
        ))}
      </ScrollView>
    </View>
  );
}
