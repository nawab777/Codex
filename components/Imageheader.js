import React,{useState} from "react";
import {
    
    ScrollView,
    
    StyleSheet,
    
    Pressable,
    Text,
    TouchableOpacity,
    ImageBackground,
    useColorScheme,
    Image,
    View,
  TextInput  } from 'react-native';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



 const Imageheader=({navigation})=>{

    return(
        
        <View style={styles.firstbox}>
        <View style={{backgroundColor:'white'}}>
 {/* upper box */}
     <View  style={styles.Upperbox}>
 {/* 1 */}
        <TouchableOpacity onPress={()=>{navigation.goBack();}}  style={{justifyContent:'center'}}>     
            <Image source={require('../assets/back.png')}  style={styles.backbutton}/>
        </TouchableOpacity>
 {/* 2 */}
        <Text style={styles.uppertext}>روزگار آسان</Text>
 {/* 3 */}
        <View>
                             {/* no notif icon  yet here  */}
      </View>
      
    </View> 
    <View style={{width:'auto',backgroundColor:'white',justifyContent:'center',}}>     
    <Image source={require('../assets/main1.png')} style={{width:'auto',height:hp(29), resizeMode:'center',backgroundColor:'#51307E',borderBottomRightRadius:55}}    /> 
    </View>
  {/* Front image view ..........................Nawab ...codex*/}
     {/* <View style={styles.frontImageBackbox}>     
    <Image source={require('../assets/main1.png')} style={styles.FrontImage}     />  
    </View>  */}
   </View>
   </View>
    
    
    )


}
const styles=StyleSheet.create({
    firstbox:{
        
        backgroundColor:'#512F7F'
    },
    Upperbox:{

        flexDirection:'row',
        backgroundColor:'#512F7F',
        height:hp(5),
        justifyContent:'space-between'

    },
    uppertext:{
     color:'#FFFFFF',
     fontWeight:'bold',
     fontSize:20,
     alignSelf:'center',
     


    }
    
    ,
    backbutton:{
     width:26,
     height:21,
     alignSelf:'center',
    resizeMode:'contain', 
    marginLeft:5   

    },frontImageBackbox:{
        width:'auto',
        backgroundColor:'#512F7F',
        height:hp('35%'),
        borderBottomRightRadius:65,
        flex:1
        
        
 },FrontImage:{
    resizeMode:'center',
    width:'auto',
    height:hp('35%'),
    
    


 },lowercontentview:{
//   height:hp(100),
  backgroundColor:'#FFFFFF',
  borderTopLeftRadius:65,
  flex:1
    

 }
    
    })


export default Imageheader;