import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { trips } from '../data/Trips';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {trips.map((trip) => (
        <TouchableOpacity
          key={trip.id}
          style={styles.card}
          onPress={() => navigation.navigate('Travel', { tripId: trip.id, tripName: trip.name })}
        > 
          <Text style={styles.title}>{trip.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { backgroundColor: '#e0e0e0', padding: 16, marginVertical: 8, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold' },
});

export default HomeScreen;
