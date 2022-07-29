import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Simpleheader from '../components/Simpleheader';
import { useRoute } from '@react-navigation/native';

const Jobdetails=({navigation})=>{
  const route=useRoute();
  const {itom,itomid}=route.params;
   
   
    const [modalvisible,setmodalvisible]=useState(false);
    
  
   return(
    <View style={{flex:1}}>

       <ScrollView style={{backgroundColor:'#512F7F'}}>
      <Simpleheader   navigation={navigation}  show={true} backScreen="Timeline" />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalvisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   setmodalvisible(!modalvisible);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* modal content                                   ....nawab codex */}
            
            <View style={{justifyContent:'center',alignSelf:'flex-end',width:wp(10)}}>
              <TouchableOpacity onPress={()=>{setmodalvisible(!modalvisible);}}>
            <Image  source={require('../assets/Combined.png')} style={styles.closeicon}/>
            </TouchableOpacity>
            </View>
            <View style={{alignItems:'center',width:hp(20),height:hp(15),alignSelf:'center'}}>
             <Image source={require('../assets/correct.png')} style={{resizeMode:'center',flex:1,width:wp(30),height:hp(5)}}  /> 
             </View>

             <View>
               <Text style={[styles.Textstyle,{alignSelf:'center'}]}>اس کام کے لیے درخواست</Text>
               <Text style={[styles.Textstyle,{alignSelf:'center'}]}>دینے کا شکریہ</Text>
               <Text style={styles.Textstyle2}>ہم آپ کو اگلی معلومات</Text>
               <Text style={styles.Textstyle2}> سے آگاہ کریں گے۔</Text>
               <TouchableOpacity  style={[styles.startbtn,{width:wp(80),marginVertical:8}]} onPress={()=>{setmodalvisible(!modalvisible);navigation.navigate('Alljobs',itomid)}}>
                 <Text style={styles.button1}>تمام ملازمتیں دیکھیں</Text>
         </TouchableOpacity>
             </View>
             
            </View>

        </View>
        </Modal>
      <View style={{height:hp(95),borderTopLeftRadius:65,backgroundColor:'white'}}>
      <Text style={styles.jobtitle}>{itom.jobtitle} چاہیے</Text>
      <View style={styles.jobinfo}>
      <View style={styles.jobinfocontent}>
        <Image source={require('../assets/type.png')}
                style={{width: 17, height: 17, marginHorizontal: 3}}
          />
         <Text style={styles.contenttext}>
                  {itom.jobtype} 
                </Text>
        </View>
        <View style={styles.jobinfocontent}>
         <Text style={[styles.contenttext,{marginHorizontal:6}]}>
                  Rs.{itom.salary} 
                </Text>
        </View>
        <View style={styles.jobinfocontent}>
             <Text style={[styles.contenttext,{marginHorizontal:12}]}>
                  {itom.location}
                </Text>
        </View>
    </View>
    <View style={{flex:1}}>
    {/* TAFZILLAT */}
      <View  style={{flex:0.37,backgroundColor:'white',marginHorizontal:24,elevation:2,marginVertical:10}}>
        <Text style={[styles.contenttext,{color:'#51307E',fontSize:18,marginVertical:10,marginHorizontal:25}]}>ملازمت کی تفصیلات</Text>

      </View >
      {/* ZARORIYAT */}
      <View style={{flex:0.25,backgroundColor:'white',elevation:2,marginHorizontal:24}}>
      <Text style={[styles.contenttext,{color:'#51307E',fontSize:18,marginVertical:10,marginHorizontal:25}]}>ملازمت کی ضروریات</Text>

      </View>
      {/* FAWAIAD */}
      <View style={{flex:0.24,backgroundColor:'white',elevation:2,marginHorizontal:24,marginVertical:10}}>
      <Text style={[styles.contenttext,{color:'#51307E',fontSize:18,marginVertical:10,marginHorizontal:25}]}>ملازمت کے فوائد</Text>

      </View>
      <TouchableOpacity  style={styles.startbtn} onPress={()=>setmodalvisible(!modalvisible)}>
                 <Text style={{alignSelf:"center",fontSize:27,color:'#FFFFFF',fontWeight:'bold'}}>اپلائ کریں</Text>
         </TouchableOpacity>

      </View>



      </View>
      </ScrollView>
      </View>



   )



}

const styles=StyleSheet.create({
 jobtitle:{
    fontSize:25,fontWeight:'bold',color:'#51307E',alignSelf:'center',marginVertical:15

 },
 jobinfo:{
    flexDirection:'row' ,justifyContent:'space-evenly',marginHorizontal:30

 },Textstyle2:{
    alignSelf:'center',
    color:'#8B94A9',
    fontSize:22


 },button1:{
    alignSelf:"center",
    fontSize:23,color:'#FFFFFF',
    fontWeight:'bold'
 },
 centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor:'gray',
    opacity:0.9
  
  },closeicon:{
    resizeMode:'contain',
    width:22,
    height:13,
    alignSelf:'center'
    
  
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    
     padding:15,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },  shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8
    ,width:wp(90),
    height:"auto",
  
   
  
  },
jobinfocontent:{

    flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F2E8FF',padding:7
},
contenttext:{
    fontSize: 16, color: 'black', fontWeight: 'bold'

},
startbtn:{
    alignSelf:'center',
    width:wp(90),
    backgroundColor:'#51307E',
    height:hp(7),
    justifyContent:'center',
    borderRadius:21
    
    
    },
    Textstyle:{
      color:'#51307E',
      fontSize:26,
      fontWeight:'bold',
      marginVertical:2



    }



})
export default Jobdetails;