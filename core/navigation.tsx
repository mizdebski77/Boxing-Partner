import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { WelcomePage } from '../features/WelcomePage/welcomePage';


const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={WelcomePage} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;