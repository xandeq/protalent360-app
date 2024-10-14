import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const AvaliacoesScreen: React.FC = () => {
  const [atletaId, setAtletaId] = useState('');
  const [nota, setNota] = useState('');
  const [comentario, setComentario] = useState('');

  const submitAvaliacao = async () => {
    try {
      await axios.post('https://protalent360-api-9496699e039f.herokuapp.com/api/avaliacoes/create', {
        atleta_id: atletaId,
        nota: parseFloat(nota),
        comentario,
      });
      console.log('Avaliação enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar avaliação:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="ID do Atleta"
        value={atletaId}
        onChangeText={setAtletaId}
        style={styles.input}
      />
      <TextInput
        placeholder="Nota (0.00 - 10.00)"
        keyboardType="numeric"
        value={nota}
        onChangeText={setNota}
        style={styles.input}
      />
      <TextInput
        placeholder="Comentário"
        value={comentario}
        onChangeText={setComentario}
        style={styles.input}
      />
      <Button title="Enviar Avaliação" onPress={submitAvaliacao} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AvaliacoesScreen;
