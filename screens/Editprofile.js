import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Modal,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Simpleheader from '../components/Simpleheader';
import {RadioButton} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

const Editprofile=({navigation})=>{
   
    const [checked,setchecked]=useState('Male');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('Driver');
    const [items, setItems] = useState([
      {label: 'ڈرائیور', value: 'Driver'},
      {label: 'کھانا پکانا', value: 'Cooking'},
      {label:'مکینک',value:'Mechanic'},
      {label:'پلمبر',value:'Plumber'},
      {label:'الیکٹریشن',value:'Electrician'},
    ]);
    
   
    const handleopen=()=>{
          setOpen(true);
    }
    // const handleitem=(item)=>{
    // setValue(item.value);
    //  console.log('item is :',value);


    // }
    const handlevalue=(item)=>{
     setValue(item);
    setOpen(!open);
    }
    
  return(
    <ScrollView style={{flex:1,backgroundColor:'#51307E'}}>
      <Simpleheader navigation={navigation} show={true} backScreen="Timeline" />
      <View style={styles.mainbox}>
    <Text style={styles.heading}>پروفائل میں ترمیم کریں</Text>
    <Pressable>    
    <View  style={styles.changeimage}>
     <Image  source={require('../assets/dp.png')} style={styles.dpimage}/>
     
    </View>
    <View style={{width:wp(30),height:hp(18),position:'absolute',justifyContent:'flex-end',alignSelf:'center'}}>
    <Image   source={require('../assets/cam.png')} style={{width:wp(10),height:hp(10),resizeMode:'contain',alignSelf:'flex-end'}} />

    </View>
    </Pressable>
    <View style={{flex:1,margin:10}}>
      <Text style={styles.inputheading}>اپنا نام درج کریں</Text>
      <TextInput  placeholder='رضا علی' placeholderTextColor='#51307E' style={styles.textinput} />
      <Text style={styles.inputheading}>اپنا موبائل نمبر درج کریں</Text>
      <TextInput  placeholder='0300-1234567' placeholderTextColor='#51307E' style={styles.textinput} />
      <View style={{flexDirection:'row-reverse',marginVertical:7}}>
      <Text style={[styles.inputheading,{fontWeight:'bold'}]}>جنس</Text>
      <View style={{flexDirection:'row-reverse',marginHorizontal:40}}>
       <RadioButton  value='Male' status={checked==='Male' ? 'checked': 'unchecked'} color='#51307E' onPress={()=>setchecked('Male')}/>
       <Text style={[styles.inputheading,{fontWeight:'bold'}]}>مرد</Text>
       </View>
       <View style={{flexDirection:'row-reverse'}}>
       <RadioButton  value='Female' status={checked==='Female' ? 'checked': 'unchecked'} color='#51307E' onPress={()=>setchecked('Female')}/>
       <Text style={[styles.inputheading,{fontWeight:'bold'}]}>عورت</Text>
       </View>
      </View>
      <Text style={styles.inputheading}>اپنا پتہ درج کریں</Text>
      <TextInput  placeholder='آئیڈیل ہوم شالیمار باغ لاہور' placeholderTextColor='#51307E' style={styles.textinput} />
      <Text style={styles.inputheading}>اپنی نوکری کا انتخاب کریں</Text>
      <DropDownPicker  style={styles.textinput} value={value}  open={open} items={items} setValue={handlevalue} onOpen={handleopen} containerStyle={{}}  />
      </View>


    </View>

     

    </ScrollView>


  )


}

const styles=StyleSheet.create({

heading:{

    fontSize:26,
    fontWeight:'bold',
    color:'#51307E',
    alignSelf:'center',
    marginVertical:20
    
},
mainbox:{
    flex:1,
    backgroundColor:'white',
    borderTopLeftRadius:65


},textinput:{


    backgroundColor:'#F7F8FC',
    textAlign:'right',
    width:wp(90),
    alignSelf:'center',
    borderRadius:25,
    marginVertical:7
    ,fontSize:18,
    fontWeight:'bold',
    paddingHorizontal:18
},
inputheading:{

    fontSize:14,
    color:'#51307E',
    alignSelf:'flex-end',
    marginVertical:4,
    marginHorizontal:15
}
,
changeimage:{

backgroundColor:'red',
alignItems:'center',
width:wp(30),
height:hp(15),
alignSelf:'center',
borderRadius:100,
overflow:'hidden',


},
dpimage:{
    resizeMode:'contain',
    width:wp(43),
    height:hp(20)

}


});

export default Editprofile;