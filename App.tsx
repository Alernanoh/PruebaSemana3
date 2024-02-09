import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigation } from './src/navigations/Stacknavigator'
import { Screen2 } from './src/screens/Screen2'

 const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
      {/* <Screen2/> */}
    </NavigationContainer>
    
  )
}

  export default App;