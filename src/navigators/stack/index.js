import * as React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import SignUp from '../../containers/screens/SignUp/index'
import LoginScreen from '../../containers/screens/LoginScreen/index'

const Stack = createNativeStackNavigator();


function stacks() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
    headerShown: false }}>

        <Stack.Screen name="Login" component={LoginScreen}  />
      

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default stacks;