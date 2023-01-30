

//https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/MaterialIcons.json

import React from "react";
import { Text,View,Searchbar} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import  Icon from "react-native-vector-icons/Ionicons";
import { Provider } from 'react-redux';
  
import { store2, } from './Store2/configureStore2';





// stack
import Bookspage from "./Containers/Bookspage"
import Cart from './Containers/Cart'


const Stack =createStackNavigator();
function MyStack() { 
    return(
 
    <Stack.Navigator>
    
   
    <Stack.Screen name="Bookspage" component={Bookspage} options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}} ></Stack.Screen>
    
    </Stack.Navigator>)
}


 
  

export default function App2(){
return(
    
        <NavigationContainer >
          <Provider store={store2}>
               <MyStack/>
               </Provider>
       </NavigationContainer>
    )
}