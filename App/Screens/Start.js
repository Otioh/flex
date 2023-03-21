import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity, Animated} from 'react-native';
import Title from '../Components/Title';
import colors from '../utils/colors.js';



export default function Start({navigation}) {
  const network={
    msg:'No Active Connection',
    color:'red',
    status:false
  }
  return (
    <Animated.View style={styles.container}>
 <View style={styles.title}>
<Text style={styles.titleText}>Flex Browser</Text>
<View style={{flex:1}}>
<FontAwesome name='wifi' color={network.color} size={35} />
<Text style={{fontSize:'xx-small', color:network.color}}>{network.msg}</Text>
</View>
 </View>
 <View style={styles.image}> 
<Animated.Image source={require('../../assets/start.png')} style={{height:500, width:360}} />
 </View>
 <View style={styles.btn}>
<TouchableOpacity style={styles.startBtn} onPress={()=>{

  navigation.navigate('Home')

}}>
<Text style={{color:colors.tree[0], fontSize:20,}}>Get In</Text>
</TouchableOpacity>
</View>

      </Animated.View>

  );
}

const styles = StyleSheet.create({
  container: {
flex:1,
    backgroundColor: '#fff',

  },
  title: {
    flex:1,
        backgroundColor: 'white',
    paddingHorizontal:16,
    flexDirection:'row'
      },
        image: {
flex:8,
    backgroundColor: 'white',

  },
  btn: {
    flex:1,
        backgroundColor: '#370617',
    
      },
      titleText:{
        flex:9,
        marginTop:30,
        fontWeight:'bold',

        fontSize:25,
        color:colors.tree[3]
      },
      startBtn:{
flex:1,
alignItems:'center',
justifyContent:'center'
      }

});
