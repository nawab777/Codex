/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from './screens/Welcome';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import JobSelection from './screens/SelectCatogery';
import Makevideo from './screens/makevideo';
import Recordvideo from './screens/recordvideo';
import Uploadvideo from './screens/uploadvideo';
import Completeprofile from './screens/Completeprofile';
import Timeline from './screens/Timeline';
import Jobdetails from './screens/Jobdetails';
import Editprofile from './screens/Editprofile';
const App = () => {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
<Stack.Navigator screenOptions={{header:()=>null}}  >
      <Stack.Screen name='Welcome' component={Welcome}  />
      <Stack.Screen  name='LogIn' component={LogIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen  name='SelectCatogery' component={JobSelection} />
      <Stack.Screen  name='Makevideo'   component={Makevideo} />
      <Stack.Screen   name='Recordvideo'  component={Recordvideo}/>
      <Stack.Screen   name='Uploadvideo'  component={Uploadvideo}/>
      <Stack.Screen   name='Completeprofile'  component={Completeprofile}/>
      <Stack.Screen   name='Timeline'  component={Timeline}/>
      <Stack.Screen   name='Jobdetails'  component={Jobdetails}/>
      <Stack.Screen   name='Editprofile'  component={Editprofile}/>
</Stack.Navigator>


    </NavigationContainer>
               
  );
}

const styles = StyleSheet.create({
  
});

export default App;
