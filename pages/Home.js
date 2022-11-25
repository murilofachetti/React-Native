import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@react-native-material/core";


function Home({ navigation }) {
    return (
        <View>
            <Text>Home</Text>
            <StatusBar style="auto" />
        </View>
    );
}

export default Home;