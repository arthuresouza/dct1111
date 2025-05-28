import { AuthContext, AuthProvider } from '@/components/AuthContext';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { useRouter, useSearchParams } from 'expo-router/build/hooks';
import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Detail() {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  const { photoUri, description } = useLocalSearchParams<{ photoUri: string, description: string }>();

  if(! isAuthenticated) return <Redirect href="/login"/>;

  return (
    <AuthProvider>
      <View style={styles.container}>
        <Image source={{ uri: photoUri }} style={styles.image} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  image: { width: '100%', height: 300, marginBottom: 16 },
  description: { fontSize: 16, textAlign: 'center' },
});