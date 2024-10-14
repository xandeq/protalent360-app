import React, { useState } from 'react';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const VideoUploadScreen: React.FC = () => {
  const [videoUri, setVideoUri] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });

    if (!result.cancelled) {
      setVideoUri(result.uri);
    }
  };

  const uploadVideo = async () => {
    if (!videoUri) return;

    const formData = new FormData();
    formData.append('video', {
      uri: videoUri,
      name: 'video.mp4',
      type: 'video/mp4',
    });
    formData.append('titulo', titulo);
    formData.append('descricao', descricao);

    try {
      const response = await axios.post(
        'https://protalent360-api-9496699e039f.herokuapp.com/api/videos/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Vídeo enviado:', response.data);
    } catch (error) {
      console.error('Erro ao enviar vídeo:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
      />
      <Button title="Escolher vídeo" onPress={pickVideo} />
      {videoUri ? <Text>Vídeo selecionado: {videoUri}</Text> : null}
      <Button title="Enviar vídeo" onPress={uploadVideo} />
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

export default VideoUploadScreen;
