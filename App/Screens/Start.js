import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../Components/Title'

const Start = () => {
  return (
    <View>
        <Title/>
 <Image source={''} />
<Text>Safe Browsing</Text>
<Text>&</Text>
<Text>Safe Stay on the Internet</Text>
 <TouchableOpacity onPress={()=>{

 }}>Get In</TouchableOpacity>
    </View>
  )
}

export default Start