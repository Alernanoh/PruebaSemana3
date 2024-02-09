import React from 'react'
import { Text, View } from 'react-native'
import { Buttons } from '../components/Buttons'
import { StackScreenProps } from '@react-navigation/stack'
import { style } from '../styles/styles'

interface Props extends StackScreenProps<any,any>{}
export const Screen1 = ({navigation}:Props) => {
  return (
    <View>
        <Text style={style.title}>Bienvenido</Text>
        <Buttons title='Imagen 1' onPress={()=>navigation.navigate('Screen2')}/>
        <Buttons title='Imagen 2' onPress={()=>navigation.navigate('Screen3')}/>
        <Buttons title='>=' onPress={()=>navigation.navigate('Screen4')}/>
        <Buttons title='<=' onPress={()=>navigation.navigate('Screen5')}/>
    </View>
  )
}
