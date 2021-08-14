import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={styles.conatainer}>
      <Text style={{position:'absolute', left:10}}>Items(1)</Text>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Cart</Text>
      <Text style={{position:'absolute', right:10}}>Total$ 10000</Text>
    </View>
  )
}
export default HelloWorldApp;

const styles=StyleSheet.create({
    conatainer:{
        height:60,
        width:'100%',
        backgroundColor:"white",
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    }
})