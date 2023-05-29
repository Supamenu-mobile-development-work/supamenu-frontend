import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Src/HomePage';
import SignUp from './Src/SignUp';
import Login from './Src/Login';

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 