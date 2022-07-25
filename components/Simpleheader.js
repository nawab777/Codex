import { useNavigation } from "@react-navigation/native";
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


const Simpleheader=(props)=>{
   
const [shownotifi,setshownotifi]=useState(true);
const navigation=useNavigation();

     const goback=()=>{
    
     navigation.navigate(props.backScreen);
         
     
       }

    
return(
    
<View style={styles.firstbox}>

<View  style={styles.Upperbox}>
 {/* 1 */}
        <TouchableOpacity onPress={goback}  style={{justifyContent:'flex-start'}}>     
            <Image source={require('../assets/back.png')}  style={styles.backbutton}/>
        </TouchableOpacity>
 {/* 2 */}
        <Text style={styles.uppertext}>روزگار آسان </Text>
 {/* 3 */}
    <View>
   {shownotifi=== props.show && (

             <TouchableOpacity style={{justifyContent:'flex-start'}}>
                     <Image    source={require('../assets/alert.png')}  style={styles.notifybutton}/>
             </TouchableOpacity>

   )}
   </View>

       
    
        
      
     
      

    </View> 




</View>







)


}

const styles=StyleSheet.create({


    firstbox:{
        // flex:0.5,
        backgroundColor:'white'
        ,height:hp(10)
    
    },
    Upperbox:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#512F7F',
        justifyContent:'space-between',
        paddingTop:10,
        borderBottomRightRadius:50
        
        
    },
    uppertext:{
     color:'#FFFFFF',
     fontWeight:'bold',
     fontSize:20,
     alignSelf:'flex-start',
     


    }
    
    ,
    backbutton:{
     width:26,
     height:21,
     alignSelf:'center',
    resizeMode:'contain', 
    marginLeft:5   

    },notifybutton:{
        width:26,
        height:21,
        alignSelf:'center',
       resizeMode:'contain', 
       marginRight:5 

    }
    



})
export default Simpleheader;