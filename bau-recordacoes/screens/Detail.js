import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailScreen ({ route }) {
  const { photoUri, description } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: photoUri }} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  image: { width: '100%', height: 300, marginBottom: 16 },
  description: { fontSize: 16, textAlign: 'center' },
});