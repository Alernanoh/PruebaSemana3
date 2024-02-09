import React from 'react'
import { View, Text } from 'react-native'
import TextInputExample from '../components/TextInputExample'
import { style } from '../styles/styles'

export const Screen5 = () => {
  return (
    <View>
        <Text style={style.title}>Formulario</Text>
        <TextInputExample/>
    </View>
  )
}
