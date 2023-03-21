import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, ActivityIndicator } from 'react-native';
import React, { useState,  useRef } from 'react';
import {WebView} from 'react-native-webview';
import colors from '../utils/colors.js'
import  FontAwesome  from '@expo/vector-icons/FontAwesome';

const Home = () => {
const[isModal, setIsModal]=  useState(false)
const [canGoBack, setcanGoBack] = useState(false);
const [canGoForward, setcanGoForward] = useState(false);

const handleBackPress=()=>{
webViewRef.current.goBack()
setIsModal(false)
}
const handleForwardPress=()=>{
  
  webViewRef.current.goForward()
}

const webViewRef=useRef()
const [url, seturl] = useState('https://google.com');
const [newUrl, setNewUrl]=useState(url)
  return (
    <View style={styles.container}>
      <View style={{position:'absolute', bottom:0,     alignItems:'center',
      justifyContent:'center' }}>
      <ActivityIndicator
      size='large' color={'red'}
      />
      </View>
  <View style={{flex:15,width:360, marginTop:20}}>
      <WebView 
      javaScriptEnabled={true}
      ref={webViewRef}
      source={{uri:url}} onNavigationStateChange={(state)=>{
        const back=state.canGoBack;
        const forward=state.canGoForward;
seturl(state.url)
        setcanGoBack(back);
        setcanGoForward(forward);
        
      }} />
      </View>
      <TouchableOpacity style={styles.ctaBtn} onPress={()=>{
setIsModal(true)
      }}>

<FontAwesome name='bars' color={colors.tree[0]} size={25} />
      </TouchableOpacity>


      <Modal
      visible={isModal}
      transparent={true}
      animationType='fade'
   onRequestClose={()=>{
    setIsModal(false)
   }}
      >


<View style={{flex:1 , backgroundColor:'rgba(0,0,0,0.4)'}}>
  <View style={{height:100, backgroundColor:colors.tree[0], marginTop:0 }}>
<View  style={{flex:1, flexDirection:'row'}}>
    <TextInput
    placeholder='URL (Web Address)'
        onChangeText={newText => setNewUrl(newText)}
        style={{flex:10, borderColor:'lightgray',  borderRadius:15, borderWidth:2, margin:2, padding:10}}
        defaultValue={url}
      />
<TouchableOpacity style={{flex:1, marginTop:15}} onPress={()=>{
seturl(newUrl)
setIsModal(false)
}}>
<FontAwesome name='arrow-right' color={colors.tree[colors.tree.length-3]} size={25} />
</TouchableOpacity>
</View>
<View  style={{flex:1,flexDirection:'row', justifyContent:'space-around' }}>
<TouchableOpacity onPress={handleBackPress}>
<FontAwesome name='arrow-left' color={colors.tree[colors.tree.length-3]} size={25} />
</TouchableOpacity>

<TouchableOpacity>
<FontAwesome name='refresh' color={colors.tree[colors.tree.length-3]} size={25} />
</TouchableOpacity>
<TouchableOpacity onPress={()=>{
seturl('https://google.com')
setIsModal(false)
      }}>
<FontAwesome name='search' color={colors.tree[colors.tree.length-3]} size={25} />
</TouchableOpacity>

<TouchableOpacity onPress={()=>{
    navigation.navigate('Start')
}}>
<FontAwesome name='home' color={colors.tree[colors.tree.length-3]} size={25} />
</TouchableOpacity>

<TouchableOpacity>
<FontAwesome name='gear' color={colors.tree[colors.tree.length-3]} size={25} />
</TouchableOpacity>
<TouchableOpacity onPress={()=>{
setIsModal(false)
      }}>
<FontAwesome name='times' color={colors.tree[colors.tree.length-3]} size={25} />
</TouchableOpacity>
</View>
</View>
<TouchableOpacity style={styles.ctaBtn} onPress={()=>{
setIsModal(false)
      }}>

<FontAwesome name='times' color={colors.tree[0]} size={25} />
      </TouchableOpacity>
</View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    ctaBtn:{

      position:'absolute',
      bottom:0,
backgroundColor:colors.tree[colors.tree.length-3],
      width:40,
      height:40,
      alignSelf:'center',
      borderRadius:50,
      color:'white',
      alignItems:'center',
      justifyContent:'center'
    }
  });



export default Home