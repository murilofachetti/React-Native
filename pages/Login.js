import { Text, View } from 'react-native';
import { Button } from "@react-native-material/core";

function Login({ navigation }) {
    return (
        <View>
            <Text>
                Login
            </Text>
            <Button
                title="Login"
                onPress={ () => navigation.navigate('Internal') }
            />
        </View>
    );
}

export default Login;