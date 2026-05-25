import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
 
export default function App() {
  const [etanol, setEtanol] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [resultado, setResultado] = useState("");
  const [status, setStatus]= useState("");

 function calcularVantagem() {
    const precoEtanol = parseFloat(etanol);
    const precoGasolina = parseFloat(gasolina);

    const vantagem = precoEtanol / precoGasolina;
    setResultado(vantagem.toFixed(2));

    // Lógica da mensagem direto aqui
    if (vantagem > 0.7) {
      setStatus("GASOLINA");
    } else {
      setStatus("ETANOL");
    }
  }
 
  return (
    <View style={styles.container}>
            <Image
        source={require("./img/ImagemPosto.png")}
        width={50}
      />
      <Text style={styles.texto}>Entrada de dados</Text>
 
      <TextInput
        style={styles.input}
        placeholder='Digite o preço do etanol'
        onChangeText={setEtanol}
        value={etanol}          
      />
      <TextInput
        style={styles.input}
        placeholder='Digite o preço da gasolina'
        onChangeText={setGasolina}
        value={gasolina}      
      />
      <Button
        title = 'Calcular Média'
        onPress={calcularVantagem}
      />
  <Text style={styles.texto}>{resultado}</Text>
      <Text>Abasteça com: {status}</Text>

      
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
  texto: {
    fontSize: 24
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    height: 30,
    margin: 10,
    padding: 5,
    borderRadius: 5
  },
  inputMultiLine: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    height: 90,
    margin: 10,
    padding: 5
 
  }
});