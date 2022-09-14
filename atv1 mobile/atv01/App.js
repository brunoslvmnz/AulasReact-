import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native'; 
import Header from './elements/Header';
import Imagens from './elements/Imagens';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Header/>
      <Imagens />
    </View>
  );
}
