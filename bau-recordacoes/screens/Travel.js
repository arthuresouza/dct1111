import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { photos } from '../data/Trips';

export default function TravelScreen({ route, navigation }) {
  const { tripId, tripName } = route.params;

  const makeItem = (photo) => {
    return (
      <TouchableOpacity
        key={photo.id}
        onPress={() => navigation.navigate('PhotoDetail', { photoId: photo.id, photoUri: photo.uri, description: photo.description })}>
        <Image source={{ uri: photo.uri }} style={styles.image} />
        <Text style={styles.description}>{photo.description}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fotos de {tripName}</Text>
      {photos.filter(photo => photo.idtrip === tripId).map((photo) => (makeItem(photo)))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  image: { height: 200, marginVertical: 8 },
  description: { textAlign: 'center', marginBottom: 16 },
});
