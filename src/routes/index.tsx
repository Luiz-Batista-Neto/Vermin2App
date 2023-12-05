import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrawerRoutes from './drawer.routes'
import { LoginScreen } from '../telas/login';

const Stack = createNativeStackNavigator();

const MainNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="app" component={DrawerRoutes} />
    </Stack.Navigator>
)


export default function Routes(){
    return(
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
}