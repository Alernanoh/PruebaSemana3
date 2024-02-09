import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import { Screen3 } from '../screens/Screen3';
import { Screen4 } from '../screens/Screen4';
import { Screen5 } from '../screens/Screen5';

const Stack = createStackNavigator();

export const StackNavigation=()=> {
  return (
    <Stack.Navigator screenOptions={{cardStyle:{backgroundColor:'#EFF396'}}
      }>
      <Stack.Screen name="Screen1"  options={{title:'Home'}} component={Screen1} />
      <Stack.Screen name="Screen2" options={{title: 'Imagen 1'}} component={Screen2} />
      <Stack.Screen name="Screen3" options={{title: 'Imagen 2'}} component={Screen3} />
      <Stack.Screen name="Screen4" options={{title: 'Mayor que'}} component={Screen4} />
      <Stack.Screen name="Screen5" options={{title: 'Menor que'}} component={Screen5} />
    </Stack.Navigator>
  );
}