import React ,{useState}from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	Image,
	View,
	TextInput,
	ScrollView,
} from 'react-native';
import Simpleheader from "../components/Simpleheader";
import {RadioButton} from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function JobSelection({ navigation },props) {
	    const [jobtype,setjobtype]=useState('cooking');
	

			const array=[{key:1,image:require('../assets/cook.png'),label:'کھانا پکانا',jobname:'cooking'},
				         {key:2,image:require('../assets/driver.png'),label:'ڈرائیور',jobname:'driver'},
				         {key:3,image:require('../assets/cook.png'),label:'AC ٹیکنیشن',jobname:'actechnician'},
				         {key:4,image:require('../assets/driver.png'),label:'پلمبر',jobname:'plumber'},
				         {key:5,image:require('../assets/cook.png'),label:'مزدور',jobname:'labour'},
				         {key:6,image:require('../assets/driver.png'),label:'مکینک',jobname:'mechanic'}
		                ]	
    const back=()=>{
		navigation.navigate('SingUp')
	}

			
	return (
		
		<View style={{ flex: 1, backgroundColor: '#512F7F' }}>
			
			<Simpleheader navigation={navigation} show={true}  backScreen="SignUp" />
			
			{/* Content view  */}
			<View style={styles.contentview}>
			
				<Text style={[styles.textstyle, { marginVertical: 10 }]}>اپنی نوکری کا انتخاب کریں</Text>
				<Text style={{ alignSelf: 'center', color: '#8B94A9' }}>یہاں اپنی کسی ایک نوکری کا انتخاب کریں۔</Text>
				{/* job catogery box.......................................Nawab...codex */}
				<ScrollView>
				<View   style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center',marginVertical:7}}>
                 {array.map((index)=>(
				       
					<View style={[styles.catogerybox,{borderWidth: index.jobname===jobtype ? 2: 1,borderColor:index.jobname===jobtype ? "#51307E":"#A3A3A3"}]}>
									
					            <View style={styles.jobview}>
						            <RadioButton  value={index.jobname}   status={jobtype===index.jobname  ? 'checked':'unchecked'  }  onPress={()=>{setjobtype(index.jobname);console.log('job type is :',jobtype,index.key);}} uncheckedColor="#A3A3A3" color="#51307E"  />  
								</View>
						        <View>
						               <Image source={index.image} style={styles.catimage} /> 
						         </View>
						               <Text style={[styles.textstyle,{marginVertical:4}]}>{index.label}</Text> 
					</View>
             
                                      ))}
									  
				
				</View>
	            <View>
                            <TouchableOpacity  style={styles.startbtn} onPress={()=>navigation.navigate('Makevideo')}>
                                      <Text style={{alignSelf:"center",fontSize:27,color:'#FFFFFF',fontWeight:'bold'}}>آگے</Text>
                            </TouchableOpacity>
							
                  </View>
				  </ScrollView>
			</View>
			
		</View>
		
	)


}

const styles = StyleSheet.create({
	contentview: {
		backgroundColor: 'white',
		flex: 1,
		borderTopLeftRadius: 50


	},
	textstyle: {
		color: '#512F7F',
		fontSize: 26,
		fontWeight: 'bold'
		, alignSelf: 'center'

	},
	catogerybox: {
		backgroundColor: '#F2E8FF',
		width: wp(45),
		margin: 5,
		

		
		
		
		
	},startbtn:{
		alignSelf:'center',
		width:wp(90),
		marginTop:hp(1),
		backgroundColor:'#51307E',
		height:hp(7),
		justifyContent:'center',
		borderRadius:21
		
		
		},radiobtn:{
       
	   marginRight:10,
	   
	   

	},
	catimage: {

		width:wp(29),
		height:hp(11),
		resizeMode:'center',
		alignSelf:'center',
        marginVertical:1




	},
	jobview:{
		
	    alignItems:'flex-end',
    

	}


})