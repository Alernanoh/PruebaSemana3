import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { style } from '../styles/styles'
import TextInputExample from '../components/TextInputExample'

export const Screen4 = () => {
  return (
    <View>
    <Text style={style.title}>Formulario:</Text>
    <TextInputExample/>
    
        </View>
  )
}
