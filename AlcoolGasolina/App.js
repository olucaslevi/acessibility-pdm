import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [precoAlcool, setPrecoAlcool] = useState('');

  const calcular = () => {
    const gasolina = parseFloat(precoGasolina);
    const alcool = parseFloat(precoAlcool);

    if (isNaN(gasolina) || isNaN(alcool)) {
      Alert.alert("Entrada inválida", "Por favor, insira valores válidos.");
      return;
    }

    if (alcool / gasolina < 0.7) {
      Alert.alert("Conclusão", "O álcool é mais econômico.");
    } else {
      Alert.alert("Conclusão", "A gasolina é mais econômico.");
    }
  };

  return (
    <View style={styles.container} accessible={true} accessibilityLabel="Aplicativo para calcular se é mais econômico usar álcool ou gasolina.">
      <Text accessibilityRole="header">Gasolina ou Álcool?</Text>

      <TextInput 
        style={styles.input}
        placeholder="Preço da gasolina"
        keyboardType="numeric"
        onChangeText={setPrecoGasolina}
        accessibilityLabel="Digite o preço da gasolina"
      />
      
      <TextInput 
        style={styles.input}
        placeholder="Preço do álcool"
        keyboardType="numeric"
        onChangeText={setPrecoAlcool}
        accessibilityLabel="Digite o preço do álcool"
      />

      <Button title="CALCULAR" onPress={calcular} accessibilityLabel="Botão para calcular qual combustível é mais econômico." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  input: {
    width: '90%',
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    fontSize: 18,
  },
});
