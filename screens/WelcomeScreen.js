import React, {useState} from 'react';

import {View,Text,TouchableOpacity,Image , StyleSheet, Pressable, Alert} from "react-native";

export default function WelcomeScreen({navigation}){
    const [isSelected, setSelection] = useState(false);

    return(
        <View style={styles.container}>
            <Image style={styles.welimg} source={require('../assets/Images/welcome.png')} />

            <View style={{marginHorizontal:25, marginVertical: 20}} >
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.text}>To the World's no. 1 grocery app for Android and iOS. We deliver everything on time.</Text>
            </View>
            <View style={styles.google}> 
                <Image style={{width:30, marginTop: 4 }}  source={require('../assets/Images/ri_google-fill.png')} />                
                <TouchableOpacity>
                    <Text style={{fontSize:22 , fontWeight: '500'}}> Continue With Google  </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.user}> 
                <Image style={{width:30, marginTop: 0 }}  source={require('../assets/Images/carbon_user-avatar.png')} />                
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                    <Text style={{fontSize:22 , fontWeight: '500', color:'#fff', paddingTop: 2}}> Create an Account  </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.logintext}>                              
                
                <Text style={{fontSize:14 ,color:'#000'}}> Already have an account?</Text>
                <Pressable onPress={()=>navigation.navigate('Login')}>
                    <Text style={{fontWeight:'bold' }}>Login</Text>
                </Pressable>  
                              
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  height: '100vh',
    // justifyContent: 'center',
    // alignItems:'center',
    backgroundColor:'#f4f5f9',
    width: '100%'
},
welimg:{
    width: '100%',
    // marginTop:20
},
title:{
    fontSize:24,
    fontWeight:'500',
},
text:{
    fontSize:14,
    marginVertical: 25,
},
google:{
    backgroundColor:'#fff',
    gap:30,
    flexDirection:'row',
    width: '90%',
    marginHorizontal:'auto',
    paddingHorizontal:30,
    paddingVertical:13,
    marginBottom: 25
},
user:{
    backgroundColor:'#6CC016',
    gap:30,
    flexDirection:'row',
    width: '90%',
    marginHorizontal:'auto',
    paddingHorizontal:30,
    paddingVertical:13,
    marginBottom: 25
},
logintext:{
    width: '90%',
    marginHorizontal:'auto' ,
    flexDirection:'row',
    gap: 5,
    justifyContent:'center'
}

});