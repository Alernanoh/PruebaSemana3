import React from 'react'
import { StyleSheet, TouchableOpacity} from 'react-native'
import { View, Text } from 'react-native'
import {style} from '../styles/styles'

interface ButtonProps{
    title: string;
    onPress: ()=>void,
}

export const Buttons = ({title, onPress}:ButtonProps) => {
  return (
    <View>
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Text style={style.buttonText}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

