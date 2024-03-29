import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./pages/Login";
import Internal from "./pages/Internal";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
      >
      <Stack.Screen 
        name="Login"
        component={Login}
      />
      <Stack.Screen 
        name="Internal"
        component={Internal}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}