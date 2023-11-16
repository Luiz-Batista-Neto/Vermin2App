import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons'

//TELAS
import { LoginScreen } from '../telas/login';
import { CadastroScreen } from '../telas/Cadastro';
import { Bestiario } from '../telas/Bestiario';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName='Inicio'>

      <Drawer.Screen 
      name="loginScreen" 
      component={LoginScreen} 
      options={{
        drawerIcon: ({ color, size}) => <Feather name="home" color={color} size={size}/>,
        drawerLabel: "Inicio"}}
      />

      <Drawer.Screen 
      name="cadastroScreen" 
      component={CadastroScreen} 
      options={{
        drawerIcon: ({ color, size}) => <Feather name="film" color={color} size={size}/>,
        drawerLabel: "Cadastro"}}
      />

      <Drawer.Screen 
      name="bestiarioScreen" 
      component={Bestiario} 
      options={{
        drawerIcon: ({ color, size}) => <Feather name="home" color={color} size={size}/>,
        drawerLabel: "Bestiario"}}
      />

      {/* <Drawer.Screen 
      name="cadastroScreen" 
      component={CadastroScreen} 
      options={{
        drawerIcon: ({ color, size}) => <Feather name="home" color={color} size={size}/>,
        drawerLabel: "Cadastro"}}
      /> */}

    </Drawer.Navigator>
  );
}