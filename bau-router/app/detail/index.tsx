import { AuthContext, AuthProvider } from '@/components/AuthContext';
import { useLocalSearchParams } from 'expo-router';
import { useRouter, useSearchParams } from 'expo-router/build/hooks';
import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Detail() {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) router.navigate({ pathname: "/login" });


  const { photoUri, description } = useLocalSearchParams<{ photoUri: string, description: string }>();

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