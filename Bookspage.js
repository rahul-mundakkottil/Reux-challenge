import React,{Component,createContext,useContext} from 'react'
import {
     View,
     Text,
     StyleSheet,
     Image,ImageBackground,TouchableOpacity,ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { book1,book2,book3,book4,book5,book6} from '../actions2/count2'
 
 import { useSelector, useDispatch } from 'react-redux';
 import { useNavigation } from '@react-navigation/native'
 

export default function Bookspage(){
    const dispatch = useDispatch();
    const Navigation=useNavigation();
      
          const handleData1 = () => { console.log("enter into handledata1")
            dispatch(book1());
            };
          const handleData2 = () => { console.log("enter into handledata2")
              dispatch(book2());
                };
          const handleData3 = () => { console.log("enter into handledata3")
               dispatch(book3());
            };
          const handleData4 = () => { console.log("enter into handledata4")
            dispatch(book4());
               };
          const handleData5 = () => { console.log("enter into handledata5")
             dispatch(book5());
                 };
          const handleData6 = () => { console.log("enter into handledata6")
             dispatch(book6());
                    };
                    const cartlength2 = useSelector((store2) => store2.Data1.cartlength); console.log(cartlength2)    
    return(

        < View style={{height:"100%",width:"100%",backgroundColor:"white"}}>
            <ScrollView  style={{height:"100%",width:"100%",backgroundColor:"white"}}>
            < View style={{height:50,width:"100%",backgroundColor:"white",flexDirection:"row"}}>
                <Text style={{ color:'black',fontSize:22, fontWeight:"400",marginTop:11,marginLeft:10}}>Books</Text> 
                <Icon name="cart" size={30} color="black"style={{marginTop:15,marginLeft:270,marginRight:5}}  onPress={()=> {Navigation.navigate("Cart")}}/>
                <View style={{height:30,width:30,backgroundColor:"red",borderRadius:15,marginLeft:320,marginTop:7,position:'absolute'}} >
                   <Text style={{ color:'black',fontSize:18, fontWeight:"400",marginTop:1,marginLeft:11}}  onPress={()=> {Navigation.navigate("Cart")}}>{cartlength2}</Text> 
                </View>
             
            </View>
            <View style={{height:2,width:"100%",backgroundColor:"grey"}}></View>


            <View style={{height:250,width:"100%",backgroundColor:"white",marginLeft:0,
                      borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:2,flexDirection:"row"}} >
                <Image source={ require('../../assets/book5.jpeg')} style={{height:230,width:150,marginTop:0,marginBottom:0,marginLeft:10}}></Image>
                <View style={{height:230,width:210,backgroundColor:"#002233",marginLeft:10,
                borderRadius:0,borderWidth:0,borderColor:"white",marginTop:0}}>
                   
                <Text style={{fontSize:23,fontWeight:"300",color:"white",marginRight:0,marginTop:5}}>The load of the rings by J.R.R Tolkin</Text>
                <TouchableOpacity  style={{ backgroundColor: 'blue',height:40,width:80,padding: 10, marginTop: 125, borderRadius: 10,marginRight:130}}
                    onPress={()=> {//Navigation.navigate("Cart")
                                          handleData1()}}>
                   <Text style={{ fontSize: 19,
                                    color:'#fff',}}> Add + </Text>
                   </TouchableOpacity>
            </View>
           
           </View>
           <View style={{height:2,width:"100%",backgroundColor:"grey"}}></View>


           <View style={{height:250,width:"100%",backgroundColor:"white",marginLeft:0,
                      borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:2,flexDirection:"row"}} >
                <Image source={ require('../../assets/book6.jpeg')} style={{height:230,width:150,marginTop:0,marginBottom:0,marginLeft:10}}></Image>
                <View style={{height:230,width:210,backgroundColor:"#002233",marginLeft:10,
                borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:0}}>
                   
                <Text style={{fontSize:24,fontWeight:"300",color:"white",marginLeft:0,marginTop:5}}>A brief history of time by Stephen Hawking</Text>
                <TouchableOpacity  style={{ backgroundColor: 'blue',height:40,width:80,padding: 10, marginTop: 90, borderRadius: 10,marginRight:130}}
                    onPress={()=> {//Navigation.navigate("Cart")
                                          handleData2()}}>
                   <Text style={{ fontSize: 19,
                                    color:'#fff',}}> Add + </Text>
                   </TouchableOpacity>
            </View>
           
           </View>
           <View style={{height:2,width:"100%",backgroundColor:"grey"}}></View>


           <View style={{height:250,width:"100%",backgroundColor:"white",marginLeft:0,
                      borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:2,flexDirection:"row"}} >
                <Image source={ require('../../assets/book1.jpeg')} style={{height:230,width:150,marginTop:0,marginBottom:0,marginLeft:10}}></Image>
                <View style={{height:230,width:210,backgroundColor:"#002233",marginLeft:10,
                borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:0}}>
                   
                <Text style={{fontSize:24,fontWeight:"300",color:"white",marginLeft:0,marginTop:5}}>The fellowship of the rings by J.R.R Tolkien</Text>
                <TouchableOpacity  style={{ backgroundColor: 'blue',height:40,width:80,padding: 10, marginTop: 90, borderRadius: 10,marginRight:130}}
                    onPress={()=> {//Navigation.navigate("Cart")
                                          handleData3()}}>
                   <Text style={{ fontSize: 19,
                                    color:'#fff',}}> Add + </Text>
                   </TouchableOpacity>
            </View>
           
           </View>
           <View style={{height:2,width:"100%",backgroundColor:"grey"}}></View>


           <View style={{height:250,width:"100%",backgroundColor:"white",marginLeft:0,
                      borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:2,flexDirection:"row"}} >
                <Image source={ require('../../assets/book7.jpeg')} style={{height:230,width:150,marginTop:0,marginBottom:0,marginLeft:10}}></Image>
                <View style={{height:230,width:210,backgroundColor:"#002233",marginLeft:10,
                borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:0}}>
                   
                <Text style={{fontSize:24,fontWeight:"300",color:"white",marginLeft:0,marginTop:5}}> Thing and grow rich by Napoleon Hill</Text>
                <TouchableOpacity  style={{ backgroundColor: 'blue',height:40,width:80,padding: 10, marginTop: 90, borderRadius: 10,marginRight:130}}
                    onPress={()=> {//Navigation.navigate("Cart")
                                          handleData4()}}>
                   <Text style={{ fontSize: 19,
                                    color:'#fff',}}> Add + </Text>
                   </TouchableOpacity>
            </View>
           
           </View>
           <View style={{height:2,width:"100%",backgroundColor:"grey"}}></View>


           <View style={{height:250,width:"100%",backgroundColor:"white",marginLeft:0,
                      borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:2,flexDirection:"row"}} >
                <Image source={ require('../../assets/book8.jpg')} style={{height:230,width:150,marginTop:0,marginBottom:0,marginLeft:10}}></Image>
                <View style={{height:230,width:210,backgroundColor:"#002233",marginLeft:10,
                borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:0}}>
                   
                <Text style={{fontSize:24,fontWeight:"300",color:"white",marginLeft:0,marginTop:5}}>Girl Made Of Gold by Githanjali Kolanad</Text>
                <TouchableOpacity  style={{ backgroundColor: 'blue',height:40,width:80,padding: 10, marginTop: 90, borderRadius: 10,marginRight:130}}
                    onPress={()=> {//Navigation.navigate("Cart")
                                          handleData5()}}>
                   <Text style={{ fontSize: 19,
                                    color:'#fff',}}> Add + </Text>
                   </TouchableOpacity>
            </View>
           
           </View>
           <View style={{height:2,width:"100%",backgroundColor:"grey"}}></View>


           <View style={{height:250,width:"100%",backgroundColor:"white",marginLeft:0,
                      borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:2,flexDirection:"row"}} >
                <Image source={ require('../../assets/book4.jpeg')} style={{height:230,width:150,marginTop:0,marginBottom:0,marginLeft:10}}></Image>
                <View style={{height:230,width:210,backgroundColor:"#002233",marginLeft:10,
                borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:0}}>
                   
                <Text style={{fontSize:24,fontWeight:"300",color:"white",marginLeft:0,marginTop:5}}>Return Of The King by J.R.R Tolkin</Text>
                <TouchableOpacity  style={{ backgroundColor: 'blue',height:40,width:80,padding: 10, marginTop: 90, borderRadius: 10,marginRight:130}}
                    onPress={()=> {//Navigation.navigate("Cart")
                                          handleData6()}}>
                   <Text style={{ fontSize: 19,
                                    color:'#fff',}}> Add + </Text>
                   </TouchableOpacity>
            </View>
           
           </View>
           <View style={{height:2,width:"100%",backgroundColor:"grey"}}></View>
           <View style={{height:100}}></View>
           
            </ScrollView>
        </View> 
 
    )
}