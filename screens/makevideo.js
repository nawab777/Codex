import React, {useState, useRef,useEffect} from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Bar from 'react-native-progress/Bar';
import { Dimensions } from 'react-native';

const Makevideo = ({navigation}) => {

  let player;
  const [Ispaused, SetIspaused] = useState(true);
  const [progress, setprogress] = useState(0);
  const [duration, setduration] = useState(0);
//   const[barwidth,setbarwidth]=useState(wp(95));
  const file = require('../assets/videoF.mp4');
  
  
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
    console.log('duration is :', duration)
    console.log('progresss is :', progress);
  };
// const Rotation = () => {
//     const dim = Dimensions.get('screen');
// 	console.log('widht is',dim.width);
//     return dim.height >= dim.width;
// };
// //  const Widhtonrotation=()=>{
//        Rotation()  ? setbarwidth(wp(95)) : setbarwidth(wp(185))
	   

// }
// const goback=()=>{
//   navigation.navigate('SelectCatogery');

// }
  return (
    <View style={styles.mainbody}>
      
	 <Simpleheader navigation={navigation}  show={false} backScreen='SelectCatogery' />
      <ScrollView style={{flex: 1, backgroundColor: 'white',borderTopLeftRadius:65}}>
        
		
          <View style={styles.maincontentbox}>
            <Text style={[styles.textstyle, {marginVertical: 10}]}>
              ویڈیو بنائیے
            </Text>
            <Text
              style={[styles.textstyle, {fontSize: 20, fontWeight: 'normal'}]}>
              {' '}
              یہ ویڈیو دیکھیے،اور اس جیسی
            </Text>
            <Text
              style={[styles.textstyle, {fontSize: 20, fontWeight: 'normal'}]}>
              {' '}
              30 سیکنڈ کی ویڈیو بنائیں۔
            </Text>

            <View style={styles.videocontainer}>
              <Pressable  onPress={()=>SetIspaused(!Ispaused)}  >
              <Video
                source={file}
                style={styles.video}
                controls={false}
                resizeMode="stretch"
                paused={Ispaused}
                onLoad={data => handleload(data)}
                onProgress={progress => handleprogress(progress)}
                ref={ref => (player = ref)}
                onEnd={handleonend}
                tapAnywhereToPause={true}
              />
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

            <View style={{justifyContent: 'center', marginVertical: 27}}>
              <Text style={styles.textstyle}>ویڈیو بنانے کیلیے ریکارڈ کا </Text>
              <Text style={styles.textstyle}> بٹن دبائیں۔</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.recordbuttin} onPress={()=>navigation.navigate('Recordvideo')}>
                <Image
                  source={require('../assets/record.png')}
                  style={{resizeMode: 'center', alignSelf: 'center'}}
                />
              </TouchableOpacity>
            </View>
          </View>
		 
        
		</ScrollView>
      </View>
  );
};
const styles = StyleSheet.create({
  mainbody: {
    flex: 1,
    backgroundColor: '#512F7F',
  },
  video: {
    flex: 1,
    height: hp(30),
  },
  videotime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },recordbutton:{
     
    width:wp(25),
    alignSelf:'center',
    alignItems:'center',
    borderRadius:50,
    padding:15,
    borderColor:'red',
    borderWidth:5,
    width:wp(22),
    
    

},
recordercamera: {
  flex: 1,
},
  recordbuttin: {
    width: wp(20),
    height: hp(15),
    alignSelf: 'center',
    justifyContent: 'center',
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

  textstyle: {
    color: '#512F7F',
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Makevideo;
