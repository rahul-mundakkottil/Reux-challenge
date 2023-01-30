import React,{Component,createContext,useContext} from 'react'
import {
     View,
     Text,
     StyleSheet,
     Image,ImageBackground,TouchableOpacity,ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { store2 } from '../Store2/configureStore2';
import { useNavigation } from '@react-navigation/native'
import { one,two,three,four,five,six } from '../actions2/count2';
const book1location='../assets/book1.jpeg'



export default function Cart (){
  const dispatch = useDispatch();
    const Navigation=useNavigation();
   const Data2 = useSelector((store2) => store2.Data1.Data); console.log(Data2)
   const cartlength2 = useSelector((store2) => store2.Data1.cartlength); console.log("cartlength "+cartlength2)
    
  // const Image2 = useSelector((store2) => store2.Data1.Image);//iteam[i].text=Data2[i];iteam[i].img=Image2[i]
 // console.log("Data2 "+Data2 +" length="+Data2.length)
 // var iteam=[{img:"",text:""}]
 // for(var i=0;i<Data2.length;i++){console.log(Data2[i])}
 //console.warn(iteam)
   console.log(require('../../assets/book1.jpeg')) 


  function Product()  {                                                                            //{item}
  return Data2.map((iteam) => {
    return (
        
        <View style={{height:250,width:"100%",backgroundColor:"white",marginLeft:0,
        borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:0,flexDirection:"row"}} >
           
        <Image source={ iteam.image} style={{height:230,width:150,marginTop:0,marginBottom:0,marginLeft:10}}></Image>    
  <View style={{height:230,width:210,backgroundColor:"#002233",marginLeft:10,
  borderRadius:0,borderWidth:0,alignItems:"center",borderColor:"white",marginTop:0}}>
   
  <Text style={{fontSize:24,fontWeight:"300",color:"white",marginLeft:0,marginTop:5}}>{iteam.text}</Text>
  
  <TouchableOpacity  style={{ backgroundColor: 'blue',height:40,width:100,padding: 10, marginTop: 85, borderRadius: 10,marginRight:100}}
                    onPress={()=> { 
                        var ID=iteam.id
                        console.log("ID="+ID)
                        if (ID=='one'){console.log("enter")
                        dispatch(one()) ;} // dispatch(one());
                       else if (ID=='two'){console.log("enter")
                        dispatch(two()) }
                        else if (ID=='three'){console.log("enter")
                        dispatch(three()) }
                        else if (ID=='four'){console.log("enter")
                        dispatch(four()) }
                        else if (ID=='five'){console.log("enter")
                        dispatch(five()) }
                        else if (ID=='six'){console.log("enter")
                        dispatch(six()) }
                       else{null} 
                          
                        
                      
                     
                      Navigation.navigate("Bookspage")
                      Navigation.navigate("Cart") }}>
                   <Text style={{ fontSize: 19,
                                    color:'#fff',}}> Remove </Text>
                   </TouchableOpacity>
</View>

</View>

        


    )
})}  //           <View style={{height:2,width:"100%",backgroundColor:"grey"}}></View

 function Emptytext () {
   console.log("enter in to empty text")
   console.log("enter in to empty text"+cartlength2)
       if(cartlength2==0){
             return(
                <View style={{alignItems:"center",justifyContent:"center"}}>
                   <Text style={{fontSize:25,color:"black",fontWeight:"bold",marginTop:300}}>Your cart is Empty</Text>
               </View>
            )}
        else return null  
          
          }

           


    return(

        < View style={{height:"100%",width:"100%",backgroundColor:"red"}}>
            <ScrollView  style={{height:"100%",width:"100%",backgroundColor:"white"}}>
            < View style={{height:40,width:"100%",backgroundColor:"white",flexDirection:"row"}}>
            <Icon name="chevron-left" size={35} color="black"style={{marginTop:7,marginLeft:19}}  onPress={()=> Navigation.navigate("Bookspage") }/> 
                <Text style={{ color:'black',fontSize:22, fontWeight:"400",marginTop:11,marginLeft:10}}>Cart</Text> 
                
            </View>
            <View style={{height:2,width:"100%",backgroundColor:"grey"}}></View>

           <Product/>
        
           <Emptytext/>
           <View style={{height:100}}></View>
           
            </ScrollView>
        </View> 

    )}
