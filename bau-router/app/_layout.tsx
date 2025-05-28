import { Stack } from "expo-router";
import { AuthProvider } from "@/components/AuthContext"

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="travel" options={{ title: "Viagens" }}></Stack.Screen>
        <Stack.Screen name="home" options={{ title: "Catálogo de Viagens"}}></Stack.Screen>
        <Stack.Screen name="login" options={{ headerShown: false}}></Stack.Screen>        
      </Stack>      
    </AuthProvider>
  )
}
