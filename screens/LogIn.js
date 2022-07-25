import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    useColorScheme,
    Image,
    View,
    TextInput,
  } from 'react-native';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



  export default function LogIn({navigation}){
  const goback=()=>{

   navigation.goBack();

  }
   return(
    <ScrollView style={{flex:1,backgroundColor:'white'}}>
    <View style={{flex:1,backgroundColor:'#512F7F'}}>
        <View style={{backgroundColor:'white'}}>
     <View  style={{flex:1,flexDirection:'row',backgroundColor:'#512F7F',paddingTop:10}}>
     <View style={{width:wp(10),alignSelf:'center'}}>
     <TouchableOpacity onPress={()=>{goback();}}><Image source={require('../assets/back.png')} style={{resizeMode:'contain',width:26,height:20}} /></TouchableOpacity>
     </View>
     <View style={{flex:1}}>
     <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center',color:'#FFFFFF'}}>روزگار آسان </Text> 
     </View>
    </View>
    <View style={{width:'auto',backgroundColor:'#512F7F',borderBottomRightRadius:55}}>     
    <Image source={require('../assets/main1.png')} style={{resizeMode:'contain',width:'auto',height:hp(35)}}    /> 
    </View>
   </View>
    <View style={{flex:1,backgroundColor:'#FFFFFF',borderTopLeftRadius:65}}>
        {/* heading log in */}
    <View>
    <Text style={{color:'#51307E',fontSize:32,fontWeight:'bold',alignSelf:'center',marginTop:15}}>لاگ ان کریں</Text>
    </View>
    {/* login credentials */}
    <View style={{marginRight:10,flex:1,backgroundColor:'#FFFFFF'}}>
     <Text style={[styles.Tcolor,{marginVertical:7}]}>موبائل نمبر</Text>
     <TextInput style={{backgroundColor:'#F7F8FC',textAlign:'right',width:wp(90),alignSelf:'center',borderRadius:25}} placeholder='03xx-xxxxxxx'  />
      <Text style={[styles.Tcolor,{marginVertical:7}]}>پاس ورڈ </Text>
      <TextInput style={{backgroundColor:'#F7F8FC',width:wp(90),alignSelf:'center',borderRadius:25}} placeholder='اپنا پاس ورڈ درج کریں'  />
      <TouchableOpacity>
      <Text style={[styles.Tcolor,{marginVertical:7}]}>پاسورڈ بھول گئے؟</Text>
      </TouchableOpacity>
      <View style={styles.startbtn}>
         <TouchableOpacity><Text style={{alignSelf:"center",fontSize:27,color:'#FFFFFF',fontWeight:'bold'}}>لاگ ان</Text></TouchableOpacity>
    </View>
<TouchableOpacity  onPress={()=>{navigation.navigate('SignUp');}}>
    <Text style={[{marginVertical:20,color:'#51307E',fontSize:22,fontWeight:'bold',alignSelf:'center',textDecorationLine:'underline'}]}>نیا اکاؤنٹ بنائیں</Text>
    </TouchableOpacity>

      
    </View>
     

      

    </View>

    </View>
  
    </ScrollView>

  
   )

  }
  const styles=StyleSheet.create({

Tcolor:{
    color:'#51307E',fontSize:14
}
,
startbtn:{
    alignSelf:'center',
    width:wp(90),
    marginTop:hp(1),
    backgroundColor:'#51307E',
    height:hp(7),
    justifyContent:'center',
    borderRadius:21
    
    
    }


  })