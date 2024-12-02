import { AuthContext, AuthProvider } from "@/components/AuthContext";
import { trips } from "@/data/Trips";
import { Link, useRouter } from "expo-router";
import { useContext } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
    const router = useRouter();
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <ScrollView style={styles.container}>
            {trips.map((trip) => (
                <TouchableOpacity key={trip.id} style={styles.card}>
                    <Link href={{ pathname: "/travel", params: { tripId: trip.id, tripName: trip.name } }}>
                        <Text style={styles.title}>{trip.name}</Text>
                    </Link>
                </TouchableOpacity>
            ))}
        </ScrollView>);

}

const styles = StyleSheet.create({
    container: { padding: 16 },
    card: { backgroundColor: '#e0e0e0', padding: 16, marginVertical: 8, borderRadius: 8 },
    title: { fontSize: 18, fontWeight: 'bold' },
});