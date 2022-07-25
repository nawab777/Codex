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
import Imageheader from '../components/Imageheader'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  const Completeprofile=({navigation})=>{
    return(
        
     <View style={styles.mainbody}>
    <Imageheader navigation={navigation}  />
       <View style={{backgroundColor:'#FFFFFF',borderTopLeftRadius:55,flex:1}}> 
       <View  style={{justifyContent:'center',alignContent:'center',alignItems:'center',marginVertical:90}}>
       <Text style={[styles.textstyle, {marginVertical: 1}]}>آپ اپنی ویڈیو پروفا ئل کامیابی </Text>  
       <Text style={[styles.textstyle, {marginVertical: 1}]}>سے داخل کر چکے ہیں۔</Text>
       <Text style={[styles.textstyle, {marginVertical: 1}]}>آسان روزگار کا حصہ بننے</Text>
      <Text style={[styles.textstyle, {marginVertical: 1}]} > کا شکریہ</Text>

    
      </View>
      <TouchableOpacity  style={styles.startbtn} onPress={()=>navigation.navigate('Timeline')}>
                                      <Text style={{alignSelf:"center",fontSize:27,color:'#FFFFFF',fontWeight:'bold'}}>آگے </Text>
                            </TouchableOpacity>
      
      </View>   
    </View>


    )


}
  const styles=StyleSheet.create({

mainbody:{

    flex:1,
    backgroundColor: '#512F7F',
},startbtn:{
    alignSelf:'center',
    width:wp(90),
    marginVertical:20,
    backgroundColor:'#51307E',
    height:hp(7),
    justifyContent:'center',
    borderRadius:21
    
    
    },
textstyle: {
    color: '#512F7F',
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  })


  export default Completeprofile;