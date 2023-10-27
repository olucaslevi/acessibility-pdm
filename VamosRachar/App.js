import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [total, setTotal] = useState('');
  const [pessoas, setPessoas] = useState('');
  const [porPessoa, setPorPessoa] = useState('');

  useEffect(() => {
    if (total && pessoas) {
      const parsedTotal = parseFloat(total);
      const parsedPessoas = parseInt(pessoas);

      if (!isNaN(parsedTotal) && !isNaN(parsedPessoas) && parsedPessoas !== 0) {
        const valorPorPessoa = (parsedTotal / parsedPessoas).toFixed(2);
        setPorPessoa(valorPorPessoa);
      } else {
        Alert.alert("Entrada inválida", "Por favor, insira valores válidos.");
      }
    }
  }, [total, pessoas]);

  useEffect(() => {
    console.log(porPessoa)
    if (porPessoa) {
      speakValue(porPessoa);
    }
  }, [porPessoa]);

  const speakValue = (value) => {
    Speech.speak(`O valor por pessoa é ${value} reais`);
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Total em reais"
        keyboardType="numeric"
        onChangeText={setTotal}
        accessibilityLabel="Digite o total em reais"
      />
      <TextInput 
        style={styles.input}
        placeholder="Número de Pessoas"
        keyboardType="numeric"
        onChangeText={setPessoas}
        accessibilityLabel="Digite o número de pessoas"
      />
      <Text style={styles.text}>Valor por pessoa: R$ {porPessoa}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // fundo ligeiramente mais escuro para maior contraste
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  input: {
    width: '80%',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 18, // tamanho de fonte maior
  },
  text: {
    fontSize: 20, // tamanho de fonte maior
  }
});
