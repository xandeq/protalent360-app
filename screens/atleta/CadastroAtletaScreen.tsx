import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AthleteSchema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  senha: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('Senha é obrigatória'),
  idade: Yup.number().required('Idade é obrigatória'),
  posicao: Yup.string().required('Posição é obrigatória'),
  altura: Yup.number().required('Altura é obrigatória'),
  peso: Yup.number().required('Peso é obrigatório'),
  cidade: Yup.string().required('Cidade é obrigatória'),
  estado: Yup.string().required('Estado é obrigatório'),
  nivel: Yup.string().required('Nível é obrigatório'),
  selo_qualidade: Yup.string().required('Selo de qualidade é obrigatório'),
});

import {StackNavigationProp} from '@react-navigation/stack';
type RootStackParamList = {
  CadastroAtleta: undefined;
  PerfilAtleta: {atletaId: string};
};

type CadastroAtletaScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CadastroAtleta'
>;

interface Props {
  navigation: CadastroAtletaScreenNavigationProp;
}

const CadastroAtletaScreen = ({navigation}: Props) => {
  const handleSignup = async (values: {
    nome: string;
    email: string;
    senha: string;
    idade: number;
    posicao: string;
    altura: number;
    peso: number;
    cidade: string;
    estado: string;
    nivel: string;
    selo_qualidade: string;
  }) => {
    try {
      const response = await axios.post(
        'https://sua-api.herokuapp.com/api/atletas',
        values,
      );
      console.log('Atleta cadastrado com sucesso:', response.data);
      navigation.navigate('PerfilAtleta', {atletaId: response.data.atletaId});
    } catch (error) {
      console.error('Erro ao cadastrar atleta:', error);
    }
  };

  return (
    <Formik
      initialValues={{
        nome: '',
        email: '',
        senha: '',
        idade: 0,
        posicao: '',
        altura: 0,
        peso: 0,
        cidade: '',
        estado: '',
        nivel: '',
        selo_qualidade: '',
      }}
      validationSchema={AthleteSchema}
      onSubmit={handleSignup}>
      {({handleChange, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <Text style={styles.title}>Cadastro de Atleta</Text>

          {/* Campo Nome */}
          <TextInput
            placeholder="Nome"
            onChangeText={handleChange('nome')}
            value={values.nome}
            style={styles.input}
          />
          {touched.nome && errors.nome && (
            <Text style={styles.error}>{errors.nome}</Text>
          )}

          {/* Campo Email */}
          <TextInput
            placeholder="Email"
            onChangeText={handleChange('email')}
            value={values.email}
            style={styles.input}
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          {/* Campo Senha */}
          <TextInput
            placeholder="Senha"
            secureTextEntry
            onChangeText={handleChange('senha')}
            value={values.senha}
            style={styles.input}
          />
          {touched.senha && errors.senha && (
            <Text style={styles.error}>{errors.senha}</Text>
          )}

          {/* Campo Idade */}
          <TextInput
            placeholder="Idade"
            keyboardType="numeric"
            onChangeText={handleChange('idade')}
            value={String(values.idade)}
            style={styles.input}
          />
          {touched.idade && errors.idade && (
            <Text style={styles.error}>{errors.idade}</Text>
          )}

          {/* Campo Posição */}
          <TextInput
            placeholder="Posição"
            onChangeText={handleChange('posicao')}
            value={values.posicao}
            style={styles.input}
          />
          {touched.posicao && errors.posicao && (
            <Text style={styles.error}>{errors.posicao}</Text>
          )}

          {/* Campo Altura */}
          <TextInput
            placeholder="Altura (m)"
            keyboardType="numeric"
            onChangeText={handleChange('altura')}
            value={String(values.altura)}
            style={styles.input}
          />
          {touched.altura && errors.altura && (
            <Text style={styles.error}>{errors.altura}</Text>
          )}

          {/* Campo Peso */}
          <TextInput
            placeholder="Peso (kg)"
            keyboardType="numeric"
            onChangeText={handleChange('peso')}
            value={String(values.peso)}
            style={styles.input}
          />
          {touched.peso && errors.peso && (
            <Text style={styles.error}>{errors.peso}</Text>
          )}

          {/* Campo Cidade */}
          <TextInput
            placeholder="Cidade"
            onChangeText={handleChange('cidade')}
            value={values.cidade}
            style={styles.input}
          />
          {touched.cidade && errors.cidade && (
            <Text style={styles.error}>{errors.cidade}</Text>
          )}

          {/* Campo Estado */}
          <TextInput
            placeholder="Estado"
            onChangeText={handleChange('estado')}
            value={values.estado}
            style={styles.input}
          />
          {touched.estado && errors.estado && (
            <Text style={styles.error}>{errors.estado}</Text>
          )}

          {/* Campo Nível */}
          <TextInput
            placeholder="Nível (Destaque, Intermediário, Iniciante)"
            onChangeText={handleChange('nivel')}
            value={values.nivel}
            style={styles.input}
          />
          {touched.nivel && errors.nivel && (
            <Text style={styles.error}>{errors.nivel}</Text>
          )}

          {/* Campo Selo de Qualidade */}
          <TextInput
            placeholder="Selo de Qualidade"
            onChangeText={handleChange('selo_qualidade')}
            value={values.selo_qualidade}
            style={styles.input}
          />
          {touched.selo_qualidade && errors.selo_qualidade && (
            <Text style={styles.error}>{errors.selo_qualidade}</Text>
          )}

          {/* Botão de Cadastro */}
          <Button title="Cadastrar" onPress={() => handleSubmit()} color="#1e3d59" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
  },
});

export default CadastroAtletaScreen;
