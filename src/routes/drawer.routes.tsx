import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons'

//TELAS
import { LoginScreen } from '../telas/login';
import { CadastroScreen } from '../telas/Cadastro';
import { Bestiario } from '../telas/Bestiario';
import { Herois } from '../telas/Herois';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
   return (
      <Drawer.Navigator
         drawerContent={(item) => (
            <View style={styles.container}>
               <View style={{ alignItems: 'center' }}>
                  <Image
                     source={{ uri: 'https://static.thenounproject.com/png/1743563-200.png' }}
                     style={styles.avatar}
                  />
               </View>

               <DrawerItemList {...item} />
            </View>
         )}>

         <Drawer.Screen
            name="Bestiario Skaven"
            component={Bestiario}
            options={{
               drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
               drawerLabel: "Bestiario"
            }}
         />

         <Drawer.Screen
            name="Cadastro"
            component={CadastroScreen}
            options={{
               drawerIcon: ({ color, size }) => <Feather name="film" color={color} size={size} />,
               drawerLabel: "Cadastro"
            }}

         />

         <Drawer.Screen
            name="Herois"
            component={Herois}
            options={{
               drawerIcon: ({ color, size }) => <Feather name="film" color={color} size={size} />,
               drawerLabel: "Herois"
            }}
         />

      </Drawer.Navigator>
   );
}

const styles = StyleSheet.create({
   container: {
      padding: 10,

   },
   avatar: {
      height: 100,
      width: 100,
      borderRadius: 10,
   }
})