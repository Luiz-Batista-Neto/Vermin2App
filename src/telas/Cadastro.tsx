import React from 'react';
import * as Yup from 'yup';

import { Formik, FormikHelpers, FormikValues } from 'formik';
import { useNavigation } from '@react-navigation/native';

import {
  Alert,
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

// Imagens
import bg from '../assets/imagens/outros/login-e-cadastro/bgCadastro.png'

// Firebase Auth
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';

export function CadastroScreen() {

  const auth = getAuth();
  const navigation = useNavigation<any>();

  const handleCadastro = async ({ email, senha, nome, url }: any) => {
	console.log(email, senha)
    await createUserWithEmailAndPassword(auth, email, senha)
      .then(() => navigation.goBack())
      .catch(erro => Alert.alert('Erro', 'Não foi possivel criar o usuário'))
  }

  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.container}>

        <Formik initialValues={{ nome: '', email: '', senha: '', url: '' }}
          validationSchema={Yup.object().shape({
            nome: Yup.string().required('Informe seu nome').min(3, 'Nome não válido'),
            email: Yup.string().required('Informe seu email').email('Nome não válido'),
            senha: Yup.string().required('Informe sua senha').min(3, 'No minimo 3 carateres'),
            url: Yup.string().required('Informe sua URL'),
          })}
          onSubmit={handleCadastro}>
          {({ errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
            <>
              <Text style={{ color: 'gold', fontSize: 75, paddingBottom: 100, fontStyle: 'italic' }}>Cadastro</Text>

              {/* NOME */}
              <Text style={{ color: 'gold', fontSize: 30, }}>Nome completo</Text>
              <TextInput
                placeholder='No minimo 3 caracteres'
                onBlur={handleBlur('nome')}
                style={styles.textInput}
                onChangeText={handleChange('nome')} />
              {errors.nome && touched.nome && <Text style={styles.fail}>{"" + errors.nome}</Text>}

              {/* EMAIL */}
              <Text style={{ color: 'gold', fontSize: 30, }}>Email</Text>
              <TextInput
                placeholder='precisa ter um @ e um dominio'
                onBlur={handleBlur('email')}
                style={styles.textInput}
                onChangeText={handleChange('email')} />
              {errors.email && touched.email && <Text style={styles.fail}>{"" + errors.email}</Text>}

              {/* SENHA */}
              <Text style={{ color: 'gold', fontSize: 30, }}>Senha</Text>
              <TextInput
                placeholder='No minimo 3 caracteres'
                onBlur={handleBlur('senha')}
                style={styles.textInput}
                onChangeText={handleChange('senha')} secureTextEntry />
              {errors.senha && touched.senha && <Text style={styles.fail}>{"" + errors.senha}</Text>}

              {/* URL DA STEAM */}
              <Text style={{ color: 'gold', fontSize: 30, }}>Url da steam</Text>
              <TextInput
                placeholder='Digite sua URL'
                onBlur={handleBlur('url')}
                style={styles.textInput}
                onChangeText={handleChange('url')} />
              {errors.url && touched.url && <Text style={styles.fail}>{"" + errors.url}</Text>}

              <Button title="Cadastrar" onPress={() => handleSubmit()} disabled={isSubmitting} />

            </>
          )}
        </Formik>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { width: '100%', height: '100%' },

  container: {
    backgroundColor: 'rgba(0,0, 0, 0.50)',
    padding: 20,
    flex: 1,
    justifyContent: 'center'
  },
  textInput: {
    fontSize: 20,
    backgroundColor: 'lightgray',
    borderBottomRightRadius: 40,
    borderStyle: 'solid',
    borderColor: 'gold',
    marginVertical: 8
  },
  fail: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red'
  },
  success: {
    textAlign: 'center',
    color: 'green'
  }
});