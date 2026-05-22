import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
 
export default function App() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [resultado, setResultado] = useState(0);
 
  function calcularMedia() {
    const media = (Number(nota1) + Number(nota2)) / 2;
    setResultado(media);
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Entrada de dados</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        placeholderTextColor='#ccc'
        onChangeText={setNome}
        value={nome}
        keyboardType='default'
       />
      <TextInput
        style={styles.input}
        placeholder='Digite a senha'
        onChangeText={setSenha}
        value={senha}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.inputMultiLine}
        placeholder='Digite qualquer coisa'
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder='Digite a nota 1'
        onChangeText={setNota1}
        value={nota1}          
      />
      <TextInput
        style={styles.input}
        placeholder='Digite a nota 2'
        onChangeText={setNota2}
        value={nota2}      
      />
      <Text style={styles.texto}>{resultado}</Text>
      <Button
        title = 'Calcular Média'
        onPress={calcularMedia}
      />
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