import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemInfo from '../storage/ItemInfo';
const DATA=[
  {
    image:require('../assets/Image1.jpg'),
    name:'mobile1',
    key:1
  },
  {
    image:require('../assets/Image2.jpg'),
    name:'mobile2',
    key:2
  },
  {
    image:require('../assets/Image3.jpg'),
    name:'mobile3',
    key:3
  },
  {
    image:require('../assets/Image4.jpg'),
    name:'mobile4',
    key:4
  },

]

const HelloWorldApp = () => {

  const storeData = async (value) => {
    let itemInfo = new ItemInfo();
    const val = await AsyncStorage.getItem('ItemInfo')
    if(val) {
      // value previously stored
      itemInfo = JSON.parse(val);
      // console.log(dat, 'data from async')
    }
    // else{
    //   itemInfo = [];
    // }
    itemInfo.items.push(value);
    try {
      await AsyncStorage.setItem('ItemInfo', JSON.stringify(itemInfo))
    } catch (e) {
      // saving error
    }
    alert('Item Added to Cart')
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{margin:5}} onPress={()=>storeData(item.name)}>
    <Image style={{height:300, width:180}} source={item.image}/>
    </TouchableOpacity>
  );
  return (
    <View
      style={{
        flex: 1,
        //justifyContent: "center",
        alignItems: "center"
      }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numColumns={2}
      />
    </View>
  )
}
export default HelloWorldApp;