import { View, Platform, Text } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';



export default function MainController() {
    if (Platform.OS === 'web') {
        return (
            <View>
                <Text>Web Platform</Text>
            </View>
        );
    } else {
        useStripe();

        return (
            <View>
                <Text>ios/android Platform</Text>
            </View>
        );
    }
}
