import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Importar as telas
import LoginScreen from '../screens/LoginScreen';
import FeedScreen from '../screens/FeedScreen';
import VideoUploadScreen from '../screens/VideoUploadScreen';
import AvaliacoesScreen from '../screens/AvaliacoesScreen';
import CadastroAtletaScreen from '../screens/atleta/CadastroAtletaScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CadastroAtleta">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Feed" component={FeedScreen} options={{ title: 'Feed de Interações' }} />
        <Stack.Screen name="VideoUpload" component={VideoUploadScreen} options={{ title: 'Enviar Vídeo' }} />
        <Stack.Screen name="Avaliacoes" component={AvaliacoesScreen} options={{ title: 'Avaliações' }} />
        <Stack.Screen name="CadastroAtleta" component={CadastroAtletaScreen} options={{ title: 'Cadastro de Atleta' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
