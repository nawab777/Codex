import React,{useState,useRef} from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    InteractionManager,
    Modal,
    Pressable,
    Text,
    TouchableOpacity,
    ImageBackground,
    useColorScheme,
    Image,
    View,
  TextInput,  
  Keyboard} from 'react-native';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import OTPTextView from 'react-native-otp-textinput';
import JobSelection from "./SelectCatogery";


  export default function SignUp({navigation}){
    const [modalvisible,setmodalvisible]=useState(false);
    const [checkotp,setcheckotp]=useState('');
    const [color,setcolor]=useState(false);
    
  const goback=()=>{

   navigation.goBack();

  }
  
 const Verifycredentials=()=>{
    setmodalvisible(!modalvisible);

 }
 const verifyOTP=()=>{
    
       
      if(checkotp.length===4){
              if(setcolor=== true){

                         setcolor(false);
                  }
                   setcheckotp('');
                   setmodalvisible(!modalvisible);
                   setTimeout(() => {
                    navigation.navigate('SelectCatogery');
                   }, 2000);
         
              
      }else 
        if(checkotp.length < 4 || checkotp===0){
          
                setcolor(true);
              
      }


 }
 
   return(
    <ScrollView style={{flex:1}}>
    <View style={{flex:1,backgroundColor:'#512F7F'}}>
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
            <View style={{width:wp(90),flexDirection:'row',alignSelf:'center'}}>
            <View style={{flex:1}}>
            <Text style={{color:'#51307E',fontSize:26,fontWeight:'bold',textAlign:'center',alignSelf:'center',marginRight:-20}}>کوڈ کی تصدیق</Text>
            </View>
            <View style={{justifyContent:'center',marginRight:6}}>
              <TouchableOpacity onPress={()=>{setmodalvisible(!modalvisible);setcolor(false)}}>
            <Image  source={require('../assets/Combined.png')} style={styles.closeicon}/>
            </TouchableOpacity>
            </View>

            </View>
            <Text style={{color:'#51307E',fontSize:20,textAlign:'center',marginVertical:15}}>آپکو میسج کے ذریئے کوڈ بھیج دیا 
گیا ہےـ اپنا فون چیک کر لیں </Text>
            <Text style={{color:'#8B94A9',fontSize:20,textAlign:'center',marginVertical:4}}>یہاں کوڈ درج کریں</Text>
                       
            <OTPTextView inputCount={4}   autoFocus={true} tintColor={color === true ? 'red' : '#51307E'} textInputStyle={styles.otpinput}   offTintColor={color === true ? 'red' : '#51307E'}  keyboardType="numeric" handleTextChange={(text)=>{setcheckotp(text);setcolor(false);}} />
            
             <Text style={{color:'#8B94A9',fontSize:16,textAlign:'center',marginTop:3}}>اگر 60 سیکنڈ میں میسج موصول نہ  ہو تو میسج دوبارہ بیجھیےـ</Text>
             <View style={[styles.startbtn,{width:wp(80),height:hp(8)}]}>
         <TouchableOpacity  onPress={()=>{navigation.navigate('SelectCatogery');setmodalvisible(!modalvisible);}}  >
            <Text style={{alignSelf:"center",fontSize:27,color:'#FFFFFF',fontWeight:'bold'}}>تصدیق کریں</Text>
        </TouchableOpacity>
       
    </View>
    
            
          </View>
        </View>
      </Modal>
        <View style={{backgroundColor:'white'}}>
     <View  style={{flex:1,flexDirection:'row',backgroundColor:'#512F7F',paddingTop:10}}>
     <View style={{width:wp(10),alignSelf:'center'}}>
     <TouchableOpacity onPress={()=>{goback();}}><Image source={require('../assets/back.png')} style={{resizeMode:'contain',width:26,height:20}} /></TouchableOpacity>
     </View>
     <View style={{flex:1}}>
     <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center',color:'#FFFFFF'}}>روزگار آسان </Text> 
     </View>
    </View>
    <View style={{width:'auto',backgroundColor:'#512F7F',borderBottomRightRadius:55,}}>     
    <Image source={require('../assets/main1.png')} style={{width:'auto',height:hp(40),resizeMode:'center'}}    /> 
    </View>
   </View>
    <View style={{flex:1,backgroundColor:'#FFFFFF',borderTopLeftRadius:65}}>
        {/* heading log in */}
       
    <View>
    <Text style={{color:'#51307E',fontSize:32,fontWeight:'bold',alignSelf:'center',marginTop:15}}>نیا اکاؤنٹ بنائیں</Text>
    </View>
    {/* login credentials */}
    <View style={{marginRight:10,flex:1,backgroundColor:'#FFFFFF'}}>
     <Text style={[styles.Tcolor,{marginVertical:7}]}>اپنا نام درج کریں</Text>
     <TextInput style={{backgroundColor:'#F7F8FC',textAlign:'right',width:wp(90),alignSelf:'center',borderRadius:25}} placeholder=' یہاں اپنا نام درج کریں'  />
      <Text style={[styles.Tcolor,{marginVertical:7}]}>موبائل نمبر </Text>
      <TextInput style={{backgroundColor:'#F7F8FC',width:wp(90),alignSelf:'center',borderRadius:25}} placeholder=' یہاں اپنا موبائل نمبر درج کریں'  keyboardType="numeric" context />
      <Text style={[styles.Tcolor,{marginVertical:7}]}>پاس ورڈ </Text>
      <TextInput style={{backgroundColor:'#F7F8FC',width:wp(90),alignSelf:'center',borderRadius:25}} placeholder=' یہاں اپنا پاس ورڈ درج کریں'  />
      
      <View style={styles.startbtn}>
         <TouchableOpacity  onPress={()=>Verifycredentials()}>
            <Text style={{alignSelf:"center",fontSize:27,color:'#FFFFFF',fontWeight:'bold'}}>نیا اکاؤنٹ بنائیں</Text>
        </TouchableOpacity>
    </View>
      
<TouchableOpacity onPress={()=>{navigation.goBack();}}>
    <Text style={[{marginVertical:20,color:'#51307E',fontSize:22,fontWeight:'bold',alignSelf:'center',textDecorationLine:'underline'}]}> اکاؤنٹ پہلے سے ہے </Text>
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
,closeicon:{
  resizeMode:'contain',
  width:22,
  height:13,
  alignSelf:'center'
  

},otpinput:{
  borderWidth: 1,
  borderRadius:5,
  marginVertical:5,
  borderBottomWidth: 1,
  color:'#51307E',
  fontSize:30,
  fontWeight:'bold',
  padding:2

}
,
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor:'gray',
  opacity:0.9

},
modalView: {
  margin: 20,
  backgroundColor: "white",
  
   padding:15,
  alignItems: "center",
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