import React, { PropsWithoutRef, PropsWithRef, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert, FlatList } from 'react-native';
import { Photo, photos } from '../data/Trips';
import { Redirect, useLocalSearchParams, useRouter } from 'expo-router';
import { AuthContext, AuthProvider } from '@/components/AuthContext';

export default function Travel() {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  const { tripName, tripId } = useLocalSearchParams<{ tripName: string, tripId: string }>();
    
  const makeItem = (photo: Photo) => {
    return (
      <TouchableOpacity key={photo.id} onPress={() => router.navigate({ pathname: "/detail", params: { title: "Detalhes", photoUri: photo.uri, description: photo.description }})} >
        <Image source={{ uri: photo.uri }} style={styles.image}></Image>
        <Text style={styles.description}>{photo.description}</Text>
      </TouchableOpacity>
    )
  }

  if(! isAuthenticated) return <Redirect href="/login"/>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fotos de {tripName}</Text>
      <FlatList
        data={photos.filter(photo => photo.idtrip === Number.parseFloat(tripId))}
        renderItem={({ item }) => makeItem(item)}
        keyExtractor={item => item.id + ''} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  image: { height: 200, marginVertical: 8 },
  description: { textAlign: 'center', marginBottom: 16 },
});
