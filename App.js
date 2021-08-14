import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import AllItemsScreen from './src/screens/AllItemsScreen';
import LaptopScreen from './src/screens/LaptopScreen';
import MobileScreen from './src/screens/MobileScreen';
import TabletScreen from './src/screens/TabletScreen';
import AppHeader from './src/components/AppHeader';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Tab2 = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();


function HomeScreen(props) {
  return (
    <View style={{flex:1}}>
      <View style={styles.headerCont}>
      <AppHeader onPress={()=>props.navigation.openDrawer()}/>
      </View>
    <Tab2.Navigator initialRouteName={'AllItems'}>
      <Tab2.Screen name="AllItems" component={AllItemsScreen} />
      <Tab2.Screen name="Laptop" component={LaptopScreen} />
      <Tab2.Screen name="Mobile" component={MobileScreen} />
      <Tab2.Screen name="Tablet" component={TabletScreen} />
    </Tab2.Navigator>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
       name="Home" 
       component={HomeScreen}
       options={{
        tabBarIcon:({ focused }) => (
          <View>
            <Image source={require('./src/assets/home.jpg')}
              style={{ height:30, width:50}}
            />
          </View>
        ),
      }}
       />
      <Tab.Screen name="Cart"
       component={CartScreen}
       options={{
        tabBarIcon:({ focused }) => (
          <View>
            <Image source={require('./src/assets/cart.jpg')}
              style={{ height:40, width:40}}
            />
          </View>
        ),
      }}
      />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <NavigationContainer>
         <Drawer.Navigator initialRouteName="Home">
         <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <MyDrawer/>
      <MyTabs /> */}
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MyTabs} />
        <Drawer.Screen name="All Categories" component={MyTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles=StyleSheet.create({
  headerCont:{
    //position:'absolute',
     top:0,
     left:0,
     right:0,
  }
})