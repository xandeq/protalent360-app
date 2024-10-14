import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {Formik} from 'formik';
import axios from 'axios';

// Interface para o formulário de login
interface LoginFormValues {
  email: string;
  senha: string;
}

import {NavigationProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const handleLogin = async (values: LoginFormValues) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/login',
        values,
      );
      console.log('Usuário logado:', response.data);
      navigation.navigate('Home'); // Redireciona para a tela principal após login
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };
  const {width, height} = Dimensions.get('window');
  return (
    <Formik initialValues={{email: '', senha: ''}} onSubmit={handleLogin}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <Image
            source={require('../assets/logo.png')} // Caminho para a imagem da logo
            style={[styles.logo, {width: width * 0.6, height: height * 0.3}]} // Define a largura como 60% da tela e a altura como 30%
            resizeMode="contain" // Mantém a proporção da logo
          />
          <Text>Login</Text>
          <TextInput
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.input}
          />

          <TextInput
            placeholder="Senha"
            secureTextEntry
            onChangeText={handleChange('senha')}
            onBlur={handleBlur('senha')}
            value={values.senha}
            style={styles.input}
          />

          <Button title="Entrar" onPress={handleSubmit as any} />
          <Button
            title="Cadastre-se"
            onPress={() => navigation.navigate('CadastroAtleta')} // Redireciona para a página de cadastro
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    marginBottom: 20, // Adiciona espaço entre a logo e o formulário
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
});

export default LoginScreen;
