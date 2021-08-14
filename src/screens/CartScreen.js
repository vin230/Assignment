import React, {useEffect, useState,} from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import CartHeader from '../components/CartHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const DATA = [
  {
    image: require('../assets/Image4.jpg'),
    key: 4
  },

]
const DetailsScreen = (props) => {
  const { navigation } = props;
  const [data, setData]= useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getData();

      return () => null;
    }, [])
  );

async function getData() {
  try {
    const value = await AsyncStorage.getItem('ItemInfo')
    if(value !== null) {
      // value previously stored
       let dat = JSON.parse(value);
       setData(dat.items);
       console.log(dat.items, 'dattttttttttttttttttttttttttt')
    }
  } catch(e) {
    // error reading value
  }
}
console.log(data, 'data from async outside')
  const renderItem = ({ item }) => (
    <View style={{ width: '100%',height:100, backgroundColor: '#F5F5F5', flexDirection: 'row', borderWidth:0.5, }}>
      {/* <View style={{ height: 150, width: 100 }}>
        <Image style={{ height: '85%', width: '100%', margin: 10 }} source={item.image} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ margin: 20, fontSize: 18 }}>Tablet</Text>
        <Text style={{ margin: 20 }}>10000</Text>
      </View> */}
      <Text>{item}</Text>
    </View>
  );

  async function Remove(){
    try {
     const a = await AsyncStorage.removeItem('ItemInfo');
     setData();
     console.log(a);
    } catch(e) {
      // error reading value
      console.log(e);
    }
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'white'
        //alignItems: "center"
      }}>
      <View style={styles.cartContainer}>
        <CartHeader />
      </View>
      <View style={{width:'100%', height:80}}/>
      <FlatList
        data={data}
        renderItem={renderItem}
        // keyExtractor={item => item.key}
        // numColumns={2}
      />
       {/* {
         data.map((val, index)=>{
           return(
             <View style={{width:'100%', height:50, backgroundColor:'pink', margin:5}} key={index}>
               <Text>{val}</Text>
             </View>
           )
         })
       } */}
       
      <TouchableOpacity onPress={Remove} style={{height:50, width:'80%', backgroundColor:'blue', alignItems:'center', justifyContent:'center', alignSelf:'center', margin:20}}>
        <Text style={{color:'white', fontSize:18}}> Pay Now</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cartContainer: {
    position:'absolute',
    top: 0,
    left: 0,
    right: 0,
  }
})

export default DetailsScreen;