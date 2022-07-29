import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import Simpleheader from '../components/Simpleheader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNFS from 'react-native-fs';
import CountDown from 'react-native-countdown-component';

const Recordvideo = ({navigation}) => {
  const [{cameraRef}, {stopRecording, recordVideo}] = useCamera();
  const [isrecording, setisrecording] = useState(true);
  const [video, setvideo] = useState();
  const [color, setcolor] = useState(true);

  const capturevideo = async () => {
    if (isrecording == true) {
      setisrecording(false);setcolor(true);
      try {
        const promise = recordVideo({
          maxDuration: 30,
        });
        if (promise) {
          let data = await promise;
          console.log('data saved to :', data.uri);
          const filename = data.uri;
          
          setvideo(data);
        }
      } catch (error) {
        console.log('error is ', error);
      }
    }
  };
  const onRecordingStart = async () => {
    console.log('RECORDING STARTED');
  };

  const onRecordingEnd = () => {
    console.log('RECORDING ENDED');

   navigation.navigate('Uploadvideo', video);
   
  };
  const recordend = () => {
    
    stopRecording();
    setcolor(false);
    setTimeout(()=>{setisrecording(true);},2000);
    setTimeout(()=>{console.log('recordind ended', isrecording);},1000);
    
    
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.front}
          // onCameraReady={capturevideo}
          style={style.recordercamera}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onRecordingStart={onRecordingStart}
          onRecordingEnd={onRecordingEnd}
        />

        <View
          style={{
            height: wp(30),
            padding: 10,
            position: 'absolute',
            alignSelf: 'center',
          }}>
          <TouchableOpacity >
           
            { isrecording &&(
                  <Pressable
                  onPress={() => {
                    capturevideo();
                  }}
                  style={style.recordbutton}>
                    
                  <Ionicons name="caret-forward-circle-sharp" color='red' size={42} />
                    
                </Pressable>

            ) }
            {!isrecording &&(
                  <Pressable
                  onPress={() => {
                    recordend();
                  }}
                  style={style.recordbutton}>
                    
                  <Ionicons name="stop" color={color ? 'red' : 'black'} size={42} />
                    
                </Pressable>

            ) }
           </TouchableOpacity>
            
        </View>
      </View>
      <View style={{width: wp(20), marginHorizontal:20,alignItems: 'center', position: 'absolute',flexDirection:'row'}}>
        <Image
          source={require('../assets/Rec.png')}
          resizeMode="center"
          style={{width: wp(15), height: hp(6)}}
        />{!isrecording && (
         <CountDown
        until={30}
        size={20}
        // onFinish={() => alert('Video Limit reached ')}
        digitStyle={{}}
        digitTxtStyle={{color: 'black'}}
        timeToShow={['S']}
        timeLabels={{s: ''}}
      />
        )}
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  recordercamera: {
    flex: 1,
  },
  recordbutton: {
    width: wp(25),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 15,
    borderColor: 'red',
    borderWidth: 5,
    width: wp(22),
  },
});

export default Recordvideo;
