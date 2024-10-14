import { AppRegistry } from 'react-native';
import App from './App'; // Certifique-se de que o caminho para o App esteja correto
import { name as appName } from './app.json'; // Certifique-se de que o nome do app esteja correto

AppRegistry.registerComponent(appName, () => App);
