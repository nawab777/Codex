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
import {style} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import Simpleheader from '../components/Simpleheader';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Aboutjobs from './Aboutjob';
import Appliedjobs from './Appliedjobs';
import Alljobs from './Alljobs';

const Timeline = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.mainbody}>
      <Simpleheader
        navigation={navigation}
        show={true}
        backScreen="Completeprofile"
      />
      <View
        style={{flex: 1, backgroundColor: 'white', borderTopLeftRadius: 65}}>
        <View style={styles.UpperContainer}>
          <View style={styles.upperbox1}>
            <View style={styles.upperpartb1}>
              <TouchableOpacity style={styles.editprofilebtn} onPress={()=>navigation.navigate('Editprofile')}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  پروفائل میں ترمیم کریں
                </Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.textstyle1}>رضا علی</Text>
              </View>
            </View>
            <View style={styles.lowerpartb1}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../assets/type.png')}
                  style={{width: 17, height: 17, marginHorizontal: 3}}
                />
                <Text
                  style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
                  Full-Time |
                </Text>
              </View>
              <View style={{}}>
                <Text
                  style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
                  ڈرائیور{' '}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.upperbox2}>
            <Image
              source={require('../assets/dp.png')}
              style={styles.dpimage}
            />
          </View>
        </View>
        <View style={{backgroundColor: 'brown', flex: 1, marginHorizontal: 10,height:hp('100%')}}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold'},
              tabBarStyle: {borderColor: '#ECECEC', borderBottomWidth: 1},
              tabBarActiveTintColor: '#51307E',
              tabBarInactiveTintColor: '#A3A3A3',
              tabBarIndicatorStyle: {backgroundColor: '#51307E'},
              
            }}  
            initialRouteName='Alljobs'>
           
            <Tab.Screen
              name="Appliedjobs"
              component={Appliedjobs}
              options={{tabBarLabel: 'ملازمت کی درخواست'}}
            />
             <Tab.Screen
              name="Alljobs"
              component={Alljobs}
              options={{tabBarLabel: '  تمام ملازمتیں دیکھیں'}}
            />
            <Tab.Screen
              name="Aboutjobs"
              component={Aboutjobs}
              options={{tabBarLabel: 'تازہ معلومات ملازمت کی'}}
            />
          </Tab.Navigator>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  mainbody: {
    flex: 1,
    backgroundColor: '#512F7F',
  },
  UpperContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    height: hp(12),
    borderBottomWidth: 1,
    borderColor: '#ECECEC',
    paddingBottom: 5,
    marginHorizontal: 10,
  },
  upperbox1: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-evenly',
    marginVertical: 6,
  },
  upperpartb1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
  },
  lowerpartb1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  upperbox2: {
    flex: 0.3,
    borderRadius: 70,
    backgroundColor: 'white',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  dpimage: {
    width: 78,
    height: 77,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  editprofilebtn: {
    backgroundColor: '#51307E',
    borderRadius: 22,
    padding: 7,
    marginHorizontal: 23,
  },
  textstyle1: {
    color: '#51307E',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Timeline;
