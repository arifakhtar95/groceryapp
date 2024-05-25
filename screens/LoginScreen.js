import React, { useState } from 'react';

import { View, Text, TouchableOpacity, Image, StyleSheet, Pressable, TextInput } from "react-native";
import Checkbox from 'expo-checkbox';

export default function LoginScreen({ navigation }) {
  
  const  [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.welimg} source={require('../assets/Images/login.png')} />

      <View style={{ marginHorizontal: 25, marginVertical: 20 }} >
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.text}>Sign in to your Account.</Text>
      </View>

      <View style={styles.google}>
        <Image style={{ width: 30, marginTop: 4 }} source={require('../assets/Images/carbon_email.png')} />
        <TextInput placeholder="Email Address" style={{ width: '85%' }} />
      </View>

      <View style={styles.user}>
        <Image style={{ width: 30, marginTop: 0 }} source={require('../assets/Images/carbon_locked.png')} />
        <TextInput secureTextEntry={true} placeholder="Password" style={{ width: '85%' }} />
      </View>

      <View style={styles.checkBoxItem}>
        <Checkbox value={isSelected} onValueChange={setSelection}/>
        <Text>
          Remember me
        </Text>
      </View>

      <View style={styles.loginbtn}>
        <TouchableOpacity>
          <Text style={{ color: '#fff', fontSize: 22, fontWeight: '500' }}> Login </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logintext}>

        <Text style={{ fontSize: 14, color: '#000' }}> Don’t have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Signup')} >
          <Text style={{ fontWeight: 'bold' }}>Sign Up</Text>
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
    width: '100%'
  },
  welimg: {
    width: '100%',
    // marginTop:20
    height: 500,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  text: {
    fontSize: 14,
    marginTop: 25,
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
    backgroundColor: '#6CC016',
    marginBottom: 20,
    borderRadius: 4
  },

  checkBoxItem: {        
    flexDirection:"row",
    gap:10,
    fontSize:14,
    color:"#A3A3A3",
    width: '90%',
    marginHorizontal: 'auto',
    marginBottom: 13,
}

});