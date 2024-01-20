import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Register from "./Screens/Register";
import Login from './Screens/Login'
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
     
       <NavigationContainer >
      <Stack.Navigator initialRouteName='Register'>

       <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown:false}}
       />

        <Stack.Screen  
        name="Register" 
        component={Register} 
        options={{headerShown:false}}
        />

      <Stack.Screen  
        name="Home" 
        component={Home} 
        options={{headerTitle:'Home'}}
        />
        <Stack.Screen 
        name="About" 
        component={About}
        options={{headerTitle:'About'}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
