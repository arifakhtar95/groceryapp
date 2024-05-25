import React, {useState} from 'react';

import { View, Text, TouchableOpacity, Image, StyleSheet, Pressable, TextInput , CheckBox } from "react-native";


export default function SignupScreen({navigation}) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
    <Image style={styles.welimg} source={require('../assets/Images/signup.png')} />

    <View style={{ marginHorizontal: 25, marginBottom: 13 }} >
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.text}>Quickly create account.</Text>
    </View>

    <View style={styles.google}>
      <Image style={{ width: 30, marginTop: 4 }} source={require('../assets/Images/carbon_email.png')} />
      <TextInput placeholder="Email Address" style={{ width: '85%' }} />
    </View>

    <View style={styles.user}>
      <Image style={{ width: 30, marginTop: 0 }} source={require('../assets/Images/carbon_phone.png')} />
      <TextInput placeholder="Phone" style={{ width: '85%' }} />
    </View>

    <View style={styles.user}>
      <Image style={{ width: 30, marginTop: 0 }} source={require('../assets/Images/carbon_locked.png')} />
      <TextInput secureTextEntry={true} placeholder="Password" style={{ width: '85%' }} />
    </View>


    <View style={styles.loginbtn}>
      <TouchableOpacity>
        <Text style={{color:'#fff',fontSize: 22, fontWeight:'500'}}> Sign Up </Text>
      </TouchableOpacity>
    </View>

    <View style={styles.logintext}>

      <Text style={{ fontSize: 14, color: '#000' }}> Already have an account? </Text>
      <Pressable onPress={()=>navigation.navigate('Login')}>
        <Text style={{ fontWeight: 'bold' }}>Login</Text>
      </Pressable>

    </View>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100vh',
    // justifyContent: 'center',
    // alignItems:'center',
    backgroundColor: '#f4f5f9',
  },
  welimg: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  text: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0
  },
  google: {
    backgroundColor: '#fff',
    gap: 30,
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: 'auto',
    paddingHorizontal: 30,
    paddingVertical: 13,
    marginBottom: 20
  },
  user: {
    backgroundColor: '#fff',
    gap: 30,
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: 'auto',
    paddingHorizontal: 30,
    paddingVertical: 13,
    marginBottom: 20
  },
  logintext: {
    width: '90%',
    marginHorizontal: 'auto',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center'
  },
  loginbtn: {
    width: '90%',
    marginHorizontal: 'auto',
    flexDirection: 'row',
    // gap: 5,
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor:'#6CC016',
    marginBottom:20,
    borderRadius: 4
  },

});