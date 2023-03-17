import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './App/Screens/Home';
import Start from './App/Screens/Start';
import {NavigationContainer} from '@react-navigation/native';



export default function App() {
  return (
    <View style={styles.container}>
     
      {/* <Start/> */}
   <Home/>
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
