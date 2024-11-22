import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import TravelScreen from './Travel';
import DetailScreen from './Detail';

const Stack = createNativeStackNavigator();

export default function MainNav () {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Catálogo de Viagens' }} />
      <Stack.Screen name="Travel" component={TravelScreen} options={{ title: 'Fotos da Viagem' }} />
      <Stack.Screen name="PhotoDetail" component={DetailScreen} options={{ title: 'Detalhes da Foto' }} />
    </Stack.Navigator>
  );
};