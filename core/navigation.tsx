import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { WelcomePage } from '../features/WelcomePage/welcomePage';
import { Home } from '../features/Home/home';
import { ClassicCountDown } from '../features/Home/ClassicCountDown/classicCountDown';


const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={WelcomePage} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Classic" component={ClassicCountDown} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;