import React, {useState,useEffect} from 'react';
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

import Simpleheader from '../components/Simpleheader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Video from 'react-native-video';

import { Dimensions } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Bar from 'react-native-progress/Bar';

const Uploadvideo = ({navigation,route}) =>{
const {uri}=route.params;
const fileaddress= uri;
let player;
  const [Ispaused, SetIspaused] = useState(true);
  const [progress, setprogress] = useState(0);
  const [duration, setduration] = useState(0);
  const [currentT,setcurrentT]=useState();
  const file = uri;
  
  
  const handleload = data => {
    setduration(data.duration);
    
  };
  const timerR = time => {
    return ~~ (time / 60) + ':' + (time % 60 < 10 ? '0' : ' ') + (time % 60);
  };
  const timerL = time => {
    return ~~ (time / 60) + ':' + (time % 60 < 10 ? '0' : ' ') + (time % 60);
  };
  const handleprogress = progresss => {
    setprogress(progresss.currentTime / duration);
    setcurrentT(progresss.currentTime);
  };
  const handleonend = () => {
    SetIspaused(true);
  };
  const handleprogressbartouch = (e) => {
    const position=e.nativeEvent.locationX;
	const proggress=(position/Dimensions.get('screen').width) * duration;
	player.seek(proggress);
   



  };
  //   .....................................Nawab..........XcodexX..................
  const handleTouch = () => {
    if (progress >= 0.99) {
      player.seek(0);
    }
    SetIspaused(!Ispaused);
    console.log('duration is :', duration);
    console.log('progresss is :', progress);
    console.log('current time is:',currentT);
    
  };
const goback=()=>{

  navigation.navigate('Makevideo');
}
const uploadfile=()=>{
 



}

return(


<View style={styles.mainbody}>
	 <Simpleheader navigation={navigation} backScreen='Makevideo'   />
      <ScrollView style={{flex: 1, backgroundColor: 'white',borderTopLeftRadius:65}}>
      <Text style={[styles.textstyle, {marginVertical: 10}]}>
              ویڈیو بنائیے
            </Text>
            <View style={styles.videocontainer}>
              <Pressable  onPress={()=>SetIspaused(!Ispaused)}  >
              
             
              <Video
                source={{uri:uri}}
                style={styles.video}
                controls={false}
                resizeMode='cover'
                paused={Ispaused}
                onLoad={data => handleload(data)}
                onProgress={progress => handleprogress(progress)}
                ref={ref => (player = ref)}
                onEnd={handleonend}
                tapAnywhereToPause={true}
              />
              <View style={{width:wp(20),position:'absolute',alignItems:'center'}}>
                               
                  <Image   source={require('../assets/Rec.png')} resizeMode='center' style={{width:wp(15),height:hp(6)}}     />
              
              </View>
              </Pressable>
             
            

              <View style={styles.controls}>
                
                <TouchableOpacity
                  style={{justifyContent: 'center'}}
                  onPress={handleTouch}>
                  <Ionicons
                    name={Ispaused ? 'play' : 'pause'}
                    size={38}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <View style={{marginTop: -50, flexDirection: 'column'}}>
                <View style={styles.videotime}>
                  <Text style={{color: 'white'}}>
                    {timerL(Math.floor (progress * duration))}
                  </Text>
                  <Text style={{color: 'white'}}> - {timerR( Math.floor (duration-(progress * duration) ))}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={[
                      ,
                      styles.progressbar,
                      {flexDirection: 'row', margin: 10,marginTop:-1},
                    ]}
                    onPress={handleprogressbartouch}>
                    <Bar
                      unfilledColor="white"
                      progress={progress}
                      color="#A3A3A3"
                      width={null}
                      height={8}
					  borderColor='white'
                      style={{flex:1}}
					  
                    />
                  </TouchableOpacity>
                </View>
            </View>
          </View>
          <View>
                            <TouchableOpacity  style={styles.startbtn} onPress={()=>navigation.navigate('Recordvideo')}>
                                      <Text style={{alignSelf:"center",fontSize:27,color:'#FFFFFF',fontWeight:'bold'}}>دوبارہ بنائیں</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={styles.startbtn} onPress={()=>{navigation.navigate('Completeprofile')}} >
                                      <Text style={{alignSelf:"center",fontSize:27,color:'#FFFFFF',fontWeight:'bold'}}>اپ لوڈ فائل</Text>
                            </TouchableOpacity>
							
                  </View>


    
    
    
    </ScrollView>
</View>

)



}

const styles = StyleSheet.create({
  mainbody: {
    flex: 1,
    backgroundColor: '#512F7F',
  },
  textstyle: {
    color: '#512F7F',
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  startbtn:{
		alignSelf:'center',
		width:wp(90),
		marginVertical:12,
		backgroundColor:'#51307E',
		height:hp(7),
		justifyContent:'center',
		borderRadius:21
		
		
		},
  video: {
    flex: 1,
    height: hp(50),
  },
  videotime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  progressbar: {
   
    // marginTop:-24,
	padding:3
  },
  controls: {
    alignSelf: 'center',
    backgroundColor: '#D7BCFB',
    width: 65,
    height: 65,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    borderRadius: 80,
  },
  maincontentbox: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
  },
  videocontainer: {
    //

    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    
  },

});

export default Uploadvideo;