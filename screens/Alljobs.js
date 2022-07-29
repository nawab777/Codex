import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TextInput,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useRoute } from '@react-navigation/native';

const Alljobs=({navigation})=>{
const route=useRoute();
 const itomid=route.params;
 const [id,setid]=useState(null);
  const data=[
    {key:0,jobtype:"Full-Time",jobtitle:"ڈرائیور",address:"آئیڈیل ہوم شالیمار باغ لاہور",salary:"14,000",description:"لوریم اِپسم پرنٹنگ اور ٹائپسیٹنگ انڈسٹری",location:"lahore",applied:false},
    {key:1,jobtype:"Part-Time",jobtitle:"بڑھئی",address:"آئیڈیل ہوم شالیمار باغ لاہور",salary:"24,000",description:"لوریم اِپسم پرنٹنگ اور ٹائپسیٹنگ انڈسٹری",location:"lahore",applied:false},
    {key:2,jobtype:"Full-Time",jobtitle:"مکینک",address:"آئیڈیل ہوم شالیمار باغ لاہور",salary:"42,000",description:"لوریم اِپسم پرنٹنگ اور ٹائپسیٹنگ انڈسٹری",location:"lahore",applied:false},
    {key:3,jobtype:"Part-Time",jobtitle:"باورچی",address:"آئیڈیل ہوم شالیمار باغ لاہور",salary:"74,000",description:"لوریم اِپسم پرنٹنگ اور ٹائپسیٹنگ انڈسٹری",location:"lahore",applied:false},
    {key:4,jobtype:"Full-Time",jobtitle:"پلمبر",address:"آئیڈیل ہوم شالیمار باغ لاہور",salary:"34,000",description:"لوریم اِپسم پرنٹنگ اور ٹائپسیٹنگ انڈسٹری",location:"lahore",applied:false},
    {key:5,jobtype:"Part-Time",jobtitle:"چوکیدار",address:"آئیڈیل ہوم شالیمار باغ لاہور",salary:"20,000",description:"لوریم اِپسم پرنٹنگ اور ٹائپسیٹنگ انڈسٹری",location:"lahore",applied:false},
    {key:6,jobtype:"Part-Time",jobtitle:"الیکٹریشن",address:"آئیڈیل ہوم شالیمار باغ لاہور",salary:"14,000",description:"لوریم اِپسم پرنٹنگ اور ٹائپسیٹنگ انڈسٹری",location:"lahore",applied:false},
  ]

 const [Isapplied,setisapplied]=useState(data);
 
      
  
    const showdetails=(item,index)=>{
    
    
      navigation.navigate('Jobdetails',{
        itom:item,
        itomid:index,

      });
  
      
  
    }
   const upadatedata=()=>{
    setid(itomid);
    
    const data2=Isapplied.map((obj,index)=>{
          if(index===id){
            return  {...obj, applied:true} 
          } 
          return obj;
 
    });

    setisapplied(data2);

    console.log('index is :',id);
    console.log('new data is :',Isapplied);
   

    



   }
  useEffect(()=>{
   upadatedata();
     
     },[]);
  
  
    return(
      <View style={{flex:1,backgroundColor:'white'}}>
          <FlatList data={Isapplied}  numColumns={1} renderItem={({item,index} )=>(
            <View style={{flex:0.27,marginVertical:13,backgroundColor:'white',padding:10,elevation:5,borderColor:'#ECECEC',borderWidth:1}}>
            <Pressable onPress={()=>showdetails(item,index)}>
            <View style={{flexDirection:'row',width:wp(88),justifyContent:'space-between',alignSelf:'flex-end',marginVertical:13}}>
             <View style={{alignSelf:'flex-start'}}>
             <Image source={require('../assets/driver.png')} style={{width:40,height:40,resizeMode:'contain',borderRadius:20}} />
             </View>
             <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F2E8FF',padding:7}}>
             <Image source={require('../assets/type.png')}
                     style={{width: 17, height: 17, marginHorizontal: 3}}
               />
              <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
                       {item.jobtype} 
                     </Text>
             </View>
             <View style={{}}>
              <Text style={{fontSize:24,fontWeight:'bold',color:'#51307E'}}>
              {item.jobtitle}  چاہیے
              </Text>
             </View>
     
            </View>
            <View style={{flexDirection:'row'}}>
            { item.applied  && (
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
           )}
           <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',flex:1}}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold',marginRight:34}}>{item.address}</Text>
            <Image source={require('../assets/location.png')}
                        style={{width: 20, height: 29,resizeMode:'center',alignSelf:'center'}}
                  />
     
           </View>
         </View>
         <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'flex-end'}}>
         <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold',marginRight:1,}}>{item.salary}</Text>
            <Text style={{fontSize: 16, color: '#A3A3A3', fontWeight: 'bold',marginRight:10,}}>تنخواہ:  </Text>
            <Image source={require('../assets/pay.png')}
                        style={{width: 20, height: 29,resizeMode:'center',alignSelf:'center'}}
                  />
     
           </View>
           <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'flex-end'}}>
            <Text style={{fontSize: 16, color: '#A3A3A3',marginRight:10,width:190}}>{item.description}</Text>
            <Image source={require('../assets/pay.png')}
                        style={{width: 20, height: 29,resizeMode:'center',alignSelf:'center'}}
                  />
     
           </View>
     
           </Pressable>
           </View>






          )} />
      
     

      </View>
    
  )


}
const styles=StyleSheet.create({






})

export default Alljobs;