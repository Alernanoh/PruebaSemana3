import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import { style } from '../styles/styles';
import { Buttons } from './Buttons';


const TextInputExample = () => {
const [number1, setNumber1] = useState<number>(0);
const [number2, setNumber2] = useState<number>(0);
const [result, setResult] = useState<string>("");

const handleNumber1Change = (text: string) => {
    setNumber1(parseInt(text));
  };

  const handleNumber2Change = (text: string) => {
    setNumber2(parseInt(text));
  };

  const compareNumbers=()=>{
  let comparisonResult = '';
  if (number1 >= number2) {
    comparisonResult = `${number1} es mayor o igual que ${number2}`;
  } else if (number1 <= number2) {
    comparisonResult = `${number2} es mayor o igual que ${number1}`;
  } else {
    comparisonResult = 'Ambos números son iguales';
  }
  setResult(comparisonResult);
}
  return (
    <SafeAreaView>
      <TextInput
        style={style.input}
        placeholder="Ingrese un número"
        keyboardType='numeric'
        onChangeText={handleNumber1Change}
      />
      <TextInput
        style={style.input}
        placeholder="Ingrese un número"
        keyboardType="numeric"
        onChangeText={handleNumber2Change}
      />
      <Buttons title='>=' onPress={compareNumbers}/>
      <Text style={style.buttonText}>{result}</Text>
    </SafeAreaView>
  );
};


export default TextInputExample;