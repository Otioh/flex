import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <WebView source={{uri:''}} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });



export default Home