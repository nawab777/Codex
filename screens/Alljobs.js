import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Alljobs=({navigation})=>{
  return(
      <View style={{flex:1,backgroundColor:'white'}}>
    
      <View style={{flex:0.27,marginVertical:13,backgroundColor:'white',padding:10,elevation:5,borderColor:'#ECECEC',borderWidth:1}}>
       <Pressable onPress={()=>navigation.navigate('Jobdetails')}>
       <View style={{flexDirection:'row',width:wp(88),justifyContent:'space-between',alignSelf:'flex-end',marginVertical:13}}>
        <View style={{alignSelf:'flex-start'}}>
        <Image source={require('../assets/driver.png')} style={{width:40,height:40,resizeMode:'contain',borderRadius:20}} />
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F2E8FF',padding:7}}>
        <Image source={require('../assets/type.png')}
                style={{width: 17, height: 17, marginHorizontal: 3}}
          />
         <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
                  Full-Time
                </Text>
        </View>
        <View style={{}}>
         <Text style={{fontSize:24,fontWeight:'bold',color:'#51307E'}}>
         ڈرائیور چاہیے
         </Text>
        </View>

       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',backgroundColor:'#F2E8FF',padding:5,borderTopRightRadius:17,borderBottomRightRadius:17}}>
            <View style={{backgroundColor:'#51307E',justifyContent:'center',borderRadius:20,marginVertical:1}}>       
            <Image source={require('../assets/Tick.png')}
                   style={{width: 15, height: 15,resizeMode:'center',marginHorizontal:3,backgroundColor:'#51307E',alignSelf:'center',borderRadius:10}}
             />
             </View>
         <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold',marginHorizontal:8}}>
                  Applied
         </Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
       <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold',marginRight:35}}>آئیڈیل ہوم شالیمار باغ لاہور</Text>
       <Image source={require('../assets/location.png')}
                   style={{width: 20, height: 29,resizeMode:'center',alignSelf:'center'}}
             />

      </View>
    </View>
    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'flex-end'}}>
       <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold',marginRight:10}}>آئیڈیل ہوم شالیمار باغ لاہور</Text>
       <Image source={require('../assets/pay.png')}
                   style={{width: 20, height: 29,resizeMode:'center',alignSelf:'center'}}
             />

      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'flex-end'}}>
       <Text style={{fontSize: 16, color: '#A3A3A3',marginRight:10,width:190}}>لوریم اِپسم پرنٹنگ اور ٹائپسیٹنگ انڈسٹری
کا صرف ڈمی متن ہے۔</Text>
       <Image source={require('../assets/pay.png')}
                   style={{width: 20, height: 29,resizeMode:'center',alignSelf:'center'}}
             />

      </View>

      </Pressable>
      </View>
     

      </View>
    
  )


}
const styles=StyleSheet.create({






})

export default Alljobs;