import React from 'react';
import * as Yup from 'yup';

import { Input } from "@rneui/themed";
import { Button } from '@rneui/base';
import { useState } from 'react';
import { Formik} from 'formik';

// React Native
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
} from 'react-native';

// Imagens
import bg from './assets/imagens/outros/bg.png'
import logo from './assets/imagens/outros/logo.png'

export interface LoginScreenProps {
}

export function LoginScreen(props: LoginScreenProps) {

  const [ result, setResult ] = useState<null|'success login'|'failed login'>(null);

  const handleLogin = async ({email,senha}: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (email.trim() == 'teste@teste.com' && senha.trim() == '12345')
      setResult('success login')
    else
      setResult('failed login')
  }

  return (
    <ImageBackground source={bg} style={styles.background}>
    <View style={styles.container}>
        <Formik 
            initialValues={{email: '', senha: ''}}
            validationSchema={Yup.object().shape({
            email: Yup.string().required('Informe o email').email('E-mail não válido'),
            senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa ter 6 caracteres')
            })}
            onSubmit={handleLogin}>
            {({errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
                <>
                    <Text>Login</Text>
                    <TextInput  placeholder='Digite seu email' onBlur={handleBlur('email')} style={styles.inputContainer} onChangeText={handleChange('email')}/>
                    { errors.email && touched.email && <Text style={styles.fail}></Text>}
                    <TextInput  placeholder='Digite sua senha' onBlur={handleBlur('email')} style={styles.inputContainer} onChangeText={handleChange('senha')} secureTextEntry/>
                    { errors.senha && touched.senha && <Text style={styles.fail}></Text>}
                    <Button title="Logar" onPress={() => handleSubmit()} disabled={isSubmitting} />
        
                    { result == 'success login' && <Text style={styles.success}>Logado com sucesso</Text>}
                    { result == 'failed login' && <Text style={styles.fail}>Email ou senha incorreto</Text>}
                </>
            )}
        </Formik>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    cadastrar: {
      fontSize: 25,
      backgroundColor: 'rgba(0,0,0, 0.50)',
      borderRadius: 20,
      color: 'gold',
      fontStyle: 'italic',
      margin: 30,
      textAlign: 'center',
      textDecorationLine: 'underline'
    },
    background: { width: '100%', height: '100%' },
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 10,
      alignItems: 'stretch'
    },
    inputContainer: {
      backgroundColor: 'rgba(0,0, 0, 0.50)',
      borderBottomRightRadius: 40,
      borderStyle: 'dotted',
      borderColor: 'gold',
      color: 'gold',
      paddingLeft: 10,
      marginBottom: -15
    },
    btn: {
      borderRadius: 0,
      marginTop: 10,
      marginHorizontal: 10
    },
    logo: {
      // backgroundColor:'rgba(0,0, 0, 0.50)',
      width: '100%',
      height: '50%',
      marginLeft: 4
    },
    fail: {
      textAlign:'center',
      color: 'red'
    },
    success: {
      textAlign:'center',
      color: 'green'
    }
})