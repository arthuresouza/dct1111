import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image} from 'react-native';

const CaixaRegistradora = () => {

  const [valor, setValor] = useState("0");
  const [lista, setLista] = useState("");
  const [total, setTotal] = useState("0");

  function addValor() {
    setLista(lista + "\n+ " + valor);
    let valorItem = Number.parseFloat(valor);
    let totalLista = Number.parseFloat(total) + valorItem;
    setTotal(String(totalLista));
  }

  return (
    <View style={styles.caixaHeader}>
      <Text></Text>
      <TextInput style={styles.input} placeholder='Informe o valor' inputMode='numeric' onChangeText={setValor}></TextInput>
      <View onTouchEnd={addValor}>
        <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.freepik.com/256/14090/14090273.png?semt=ais_hybrid' }} />
      </View>
      <View style={styles.caixaLista}>
        <Text>Lista de Valores</Text>
        <ScrollView>
          <Text style={styles.lista} >{lista}</Text>
        </ScrollView>
        <Text>Total:{' ' + total}</Text>
      </View>
    </View>
  );
}


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CaixaRegistradora />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixaHeader: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  caixaLista: {
    flex: 1,
    backgroundColor: 'light-gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  lista: {
    width: 250,
    height: 350,
    margin: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
  },
  image: {
    width: 66,
    height: 58,
  },
});