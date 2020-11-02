import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { Picker } from '@react-native-picker/picker'

export default function App() {
  const [moedaA, setMoedaA] = useState('');
  const [input,setInput] = useState('');
  const [valorInput,setValorInput] = useState('');

  function converter(){
    setValorInput(input);

    Keyboard.dismiss();

  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Conversor!</Text>
      </View>
      <View style={styles.rec}>

        <View style={styles.lineCurrency}>
          <View style={styles.picker}>
            <Picker selectedValue={moedaA}
              onValueChange={(itemValue, itemIndex) => setMoedaA(itemValue)}
            >
              <Picker.item label="USD" value="USD" />
              <Picker.item label="BRL" value="BRL" />
            </Picker>
          </View>

          <View style={styles.picker}>
            <Picker selectedValue={moedaA}
              onValueChange={(itemValue, itemIndex) => setMoedaA(itemValue)}
            >
              <Picker.item label="USD" value="USD" />
              <Picker.item label="BRL" value="BRL" />
            </Picker>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput
            placeholder="Digite o valor"
            style={styles.input}
            onChangeText={(text)=> setInput(text)}
            value={input}
            keyboardType='numeric'
          />
          <View style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <TouchableOpacity style={styles.btn} onPress={converter}>
              <Text style={styles.btnText}>Converter</Text>
            </TouchableOpacity>
            <Text>{valorInput}</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4630EB'
  },
  title: {
    fontSize: 20,
    color: '#FFFF'
  },
  rec: {
    width: '90%',
    height: '60%',
    backgroundColor: '#FFF'
  },
  picker: {
    borderColor: '#000',
    borderWidth: 1,
    width: '30%'
  },
  lineCurrency: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  input: {
    fontSize: 15,
    borderColor: '#222',
    borderWidth: 1,
    backgroundColor: '#FFF',
    padding: 10,
    margin: 10
  },
  btn: {
    backgroundColor: '#4630EB',
    width: 230,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'

  },
  btnText: {
    fontSize: 18,
    color: '#FFF'
  }
})