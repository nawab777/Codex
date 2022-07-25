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
    View,
  } from 'react-native';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LogIn from './LogIn';

 export default function Welcome( {navigation} ){

    const gologin=()=>{
        navigation.navigate('LogIn')
    }
    
    return(
      
    <View style={{flex:1,backgroundColor:'#51307E'}}>
      <ScrollView style={{flex:1}}>
        <ImageBackground source={require('../assets/Group.png')} style={{flex:1}} >
        <View style={style.Textbox}>
        <Text style={[style.Textstyle,{fontSize:46,alignSelf:'center',fontWeight:'bold'}]}> روزگار آسان </Text>
        <Text style={[style.Textstyle,{fontSize:24,alignSelf:'center',fontWeight:'bold'}]}>  میں خوش آمدید  </Text>
        </View>
        <View style={style.startbtn}>
         <TouchableOpacity  onPress={()=>{gologin();}}><Text style={{alignSelf:"center",fontSize:27,color:'#51307E',fontWeight:'bold'}}>شروع کریں</Text></TouchableOpacity>

        </View>
        </ImageBackground>
        </ScrollView>
    </View>


)

}
const style=StyleSheet.create({

Textstyle:{
  color:'#FFFFFF',



},
Textbox:{
   marginTop:hp(12)

},
startbtn:{
alignSelf:'center',
width:wp(90),
marginTop:hp(55),
backgroundColor:'#FFFFFF',
height:hp(7),
justifyContent:'center',
borderRadius:21,
marginBottom: 50,


}

})
