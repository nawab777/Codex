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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {source} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

const Editprofile = ({navigation}) => {
  const [modalvisible, setmodalvisible] = useState(false);
  const [savepic, setsavepic] = useState();
  const [checked, setchecked] = useState('Male');
  const [ischecked, setischecked] = useState('Fulltime');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Driver');
  const [items, setItems] = useState([
    {label: 'ڈرائیور', value: 'Driver'},
    {label: 'کھانا پکانا', value: 'Cooking'},
    {label: 'مکینک', value: 'Mechanic'},
    {label: 'پلمبر', value: 'Plumber'},
    {label: 'الیکٹریشن', value: 'Electrician'},
  ]);

  const handlepress = () => {
    setOpen(!open);
  };

  const handleopen = () => {
    setOpen(!open);
  };
  // const handleitem=(item)=>{
  // setValue(item.value);
  //  console.log('item is :',value);

  // }
  const handlevalue = item => {
    setValue(item);
    setOpen(!open);
  };
  const takepictureG = () => {
     launchImageLibrary(
      {
        mediaType: 'photo',
        cameraType: 'back',
        saveToPhotos: true,
        includeBase64:true,
        quality: 1,
      },response  => {
        console.log('response is :', response);
        if (response.didCancel) {
          console.log('process cancelled');
        } else if (response.errorMessage) {
          console.log('error is:', response.errorMessage);
        } else {
          const source =response.assets[0].uri;
          setsavepic(source);
          
          
        
          
        }
      },
    );
  };
  const takepictureC =() => {
    launchCamera(
     {
       mediaType: 'photo',
       cameraType: 'back',
       saveToPhotos: true,
       includeBase64:true,
       quality: 1,
     },response  => {
       console.log('response is :', response);
       if (response.didCancel) {
         console.log('process cancelled');
       } else if (response.errorMessage) {
         console.log('error is:', response.errorMessage);
       } else {
         const source =response.assets[0].uri;
        console.log('uri of image is:',source);
         setTimeout(() => {
           setsavepic(source);
         }, 1000);
         
       
         
       }
     },
   );
 };


  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Simpleheader navigation={navigation} show={true} backScreen="Timeline" />
      <View style={styles.mainbox}>
        <View style={{backgroundColor:'white',flex:1, borderTopLeftRadius: 65,}}>
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
              <View
                style={{
                  justifyContent: 'center',
                  alignSelf: 'flex-end',
                  width: wp(10),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setmodalvisible(!modalvisible);
                  }}>
                  <Image
                    source={require('../assets/Combined.png')}
                    style={styles.closeicon}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={()=>{takepictureC();setmodalvisible(!modalvisible)}}>
                <Text
                  style={[
                    styles.heading,
                    {
                      color: 'white',
                      backgroundColor: '#51307E',
                      width: wp(60),
                      textAlign: 'center',
                    },
                  ]}>
                  تصویر لیں
                </Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>{takepictureG();setmodalvisible(!modalvisible)}}>
                <Text
                  style={[
                    styles.heading,
                    {
                      color: 'white',
                      backgroundColor: '#51307E',
                      width: wp(60),
                      textAlign: 'center',
                    },
                  ]}>
                  گیلری کھولیں
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={styles.heading}>پروفائل میں ترمیم کریں</Text>
        <Pressable onPress={() => setmodalvisible(!modalvisible)}>
          <View style={styles.changeimage}>
            <Image source={{uri:savepic}} style={styles.dpimage} />
          </View>
          <View
            style={{
              width: wp(30),
              height: hp(18),
              position: 'absolute',
              justifyContent: 'flex-end',
              alignSelf: 'center',
            }}>
            <Image
              source={require('../assets/cam.png')}
              style={{
                width: wp(10),
                height: hp(10),
                resizeMode: 'contain',
                alignSelf: 'flex-end',
              }}
            />
          </View>
        </Pressable>
        <View style={{flex: 1, margin: 10}}>
          <Text style={styles.inputheading}>اپنا نام درج کریں</Text>
          <TextInput
            placeholder="رضا علی"
            placeholderTextColor="#51307E"
            style={styles.textinput}
          />
          <Text style={styles.inputheading}>اپنا موبائل نمبر درج کریں</Text>
          <TextInput
            placeholder="0300-1234567"
            placeholderTextColor="#51307E"
            style={styles.textinput}
          />
          <View style={{flexDirection: 'row-reverse', marginVertical: 7}}>
            <Text style={[styles.inputheading, {fontWeight: 'bold'}]}>جنس</Text>
            <View style={{flexDirection: 'row-reverse', marginHorizontal: 40}}>
              <RadioButton
                value="Male"
                status={checked === 'Male' ? 'checked' : 'unchecked'}
                color="#51307E"
                onPress={() => setchecked('Male')}
              />
              <Text
                style={[
                  styles.inputheading,
                  {fontWeight: 'bold', marginHorizontal: 1},
                ]}>
                مرد
              </Text>
            </View>
            <View style={{flexDirection: 'row-reverse'}}>
              <RadioButton
                value="Female"
                status={checked === 'Female' ? 'checked' : 'unchecked'}
                color="#51307E"
                onPress={() => setchecked('Female')}
              />
              <Text
                style={[
                  styles.inputheading,
                  {fontWeight: 'bold', marginHorizontal: 1},
                ]}>
                عورت
              </Text>
            </View>
          </View>
          <Text style={styles.inputheading}>اپنا پتہ درج کریں</Text>
          <TextInput
            placeholder="آئیڈیل ہوم شالیمار باغ لاہور"
            placeholderTextColor="#51307E"
            style={styles.textinput}
          />
          <Text style={styles.inputheading}>اپنی نوکری کا انتخاب کریں</Text>
          <DropDownPicker
            style={[styles.textinput, {flexDirection: 'row-reverse'}]}
            value={value}
            open={open}
            items={items}
            setValue={handlevalue}
            onOpen={handleopen}
            textStyle={{color: '#51307E', fontSize: 18, fontWeight: 'bold'}}
            onPress={handlepress}
          />
          <View style={{flexDirection: 'row-reverse', marginVertical: 7}}>
            <Text style={[styles.inputheading, {fontWeight: 'bold'}]}>
              ملازمت کی قسم
            </Text>
            <View style={{flexDirection: 'row-reverse', marginHorizontal: 10}}>
              <RadioButton
                value="Fulltime"
                status={ischecked === 'Fulltime' ? 'checked' : 'unchecked'}
                color="#51307E"
                onPress={() => setischecked('Fulltime')}
              />
              <Text
                style={[
                  styles.inputheading,
                  {fontWeight: 'bold', marginHorizontal: 1},
                ]}>
                فل ٹائم
              </Text>
            </View>
            <View style={{flexDirection: 'row-reverse'}}>
              <RadioButton
                value="Parttime"
                status={ischecked === 'Parttime' ? 'checked' : 'unchecked'}
                color="#51307E"
                onPress={() => setischecked('Parttime')}
              />
              <Text
                style={[
                  styles.inputheading,
                  {fontWeight: 'bold', marginHorizontal: 1},
                ]}>
                پارٹ ٹائم
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.startbtn}
            onPress={() => navigation.navigate('Timeline')}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 27,
                color: '#FFFFFF',
                fontWeight: 'bold',
              }}>
              محفوظ کریں
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#51307E',
    alignSelf: 'center',
    marginVertical: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: "center",
    backgroundColor: 'gray',
    opacity: 0.9,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',

    padding: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
    width: wp(90),
    height: 'auto',
  },
  closeicon: {
    resizeMode: 'contain',
    width: 22,
    height: 13,
    alignSelf: 'center',
  },
  startbtn: {
    alignSelf: 'center',
    width: wp(90),
    backgroundColor: '#51307E',
    height: hp(7),
    justifyContent: 'center',
    borderRadius: 21,
  },
  mainbox: {
    flex: 1,
    backgroundColor: '#51307E',
   
  },
  textinput: {
    backgroundColor: '#F7F8FC',
    textAlign: 'right',
    width: wp(90),
    alignSelf: 'center',
    borderRadius: 25,
    marginVertical: 5,
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 18,
    borderWidth: 0,
  },

  inputheading: {
    fontSize: 14,
    color: '#51307E',
    alignSelf: 'flex-end',
    marginVertical: 2,
    marginHorizontal: 15,
  },
  changeimage: {
    backgroundColor: 'red',
    alignItems: 'center',
    width: wp(30),
    height: hp(15),
    alignSelf: 'center',
    borderRadius: 100,
    overflow: 'hidden',
  },
  dpimage: {
    resizeMode: 'contain',
    width: wp(43),
    height: hp(20),
  },
});

export default Editprofile;
