import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@react-native-material/core";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home"
import Profile from "./Profile";

const Tab = createBottomTabNavigator;

function Internal({ navigation }) {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                    let icon = '';
                    switch(route.name){
                        case 'Home':
                        icon = "home";
                        break;
        
                        case 'Profile':
                        icon = "person";
                        break;
                    }
        
                    return <Ionicons name={icon} size={size} color={color} />
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'blue',
                })}
                initialRouteName="Home">
                
                <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    title: "Home",
                }}
                />
                <Tab.Screen 
                name="Profile"
                component={Profile}
                options={{
                    title: "Perfil",
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Internal;