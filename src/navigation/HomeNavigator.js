import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { Home } from '@/screens';
import Chat from '@/screens/Chat/Chat';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.home} component={Home} />
      <Stack.Screen name={NAVIGATION.chat} component={Chat} />
    </Stack.Navigator>
  );
}
