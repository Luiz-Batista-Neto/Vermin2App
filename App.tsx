import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Telas
import { LoginScreen } from './src/telas/login';
import { CadastroScreen } from './src/telas/Cadastro';
import { Bestiario } from './src/telas/Bestiario';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      {/* <LoginScreen/> */}
      {/* <CadastroScreen/> */}
      <Bestiario/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
