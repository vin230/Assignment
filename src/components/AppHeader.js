import React from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity, Image } from 'react-native';

const HelloWorldApp = (props) => {
  return (
    <View
      style={styles.conatainer}>
      <TouchableOpacity onPress={props.onPress} style={{position:'absolute', left:10, top:10}}>
          <Image style={{height:30, width:30}} source={require('../assets/drawer.png')}/>
          </TouchableOpacity>
      <Text style={{fontSize:20, fontWeight:'bold'}}>OpenCart Android App</Text>
      <TouchableOpacity style={{position:'absolute', right:10, top:10}}>
          <Image style={{height:30, width:30}} source={require('../assets/search.png')}/>
          </TouchableOpacity>
    </View>
  )
}
export default HelloWorldApp;

const styles=StyleSheet.create({
    conatainer:{
        height:50,
        width:'100%',
        backgroundColor:"white",
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row'
    }
})