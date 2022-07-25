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

const Aboutjobs=({navigation})=>{
return(
<View style={{flex:1,backgroundColor:'white'}}>
    <View style={styles.contentbox}>
        <View style={{flexDirection:'row',marginTop:4,backgroundColor:'red',flex:1,width:wp(27),backgroundColor:'green',borderTopRightRadius:15,borderBottomRightRadius:15}}>
            <Image   />
            <Text style={{color:'white',fontSize:12,fontWeight:'bold',alignSelf:'center',marginHorizontal:5}}>Short Listed</Text>
        </View>

        {/* date,title,img */}
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <View style={{flex:0.5,justifyContent:'center',marginHorizontal:10}}>
<Text>date</Text>

    </View>
    <View style={{flex:1,justifyContent:'center',marginHorizontal:5}}>

    <Text style={styles.text}>ڈرائیور چاہیے</Text>

    </View>
    <View style={{justifyContent:'center',marginHorizontal:13}}>

    <Image source={require('../assets/jobicon.png') }  style={{width:30,height:30,resizeMode:'center'}}/>
    
    </View>

    </View>
    {/* job info */}
    <View style={{flexDirection:'row',justifyContent:'flex-end',marginHorizontal:50,marginBottom:10,marginVertical:3}}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../assets/type.png')}
                  style={{width: 17, height: 17, marginHorizontal: 3}}
                />
                <Text
                  style={{fontSize: 16, color: 'black',fontWeight:'500'}}>
                  Full-Time |
                </Text>
              </View>

        <Text style={{fontSize:16,color:'black',fontWeight:'500'}}> Rs.24,000</Text>

    </View>
    

    </View>




</View>



)




}
const styles=StyleSheet.create({
contentbox:{
  marginHorizontal:15,
  marginVertical:6,
  flex:0.14,
  elevation:2,
  backgroundColor:'white',
  

},
text:{

    color:'#51307E',
    fontWeight:'bold',
    fontSize:24
}




})


export default Aboutjobs;