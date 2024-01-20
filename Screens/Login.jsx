import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../Components/InputBox";
import SubmitBtn from "../Components/SubmitBtn";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const getData=()=>{
     try {
        if(!email||!password){
           Alert.alert('please fill data');
           return;
        }else{
           const data={email,password}
           console.log('data =>', data);
        }
     } catch (error) {
       console.log(error);
     }
  }
  return (
    <View>
     <View style={styles.container}>
     <Text style={styles.pageTitle}>Login</Text>
      <View>
        <InputBox
          title={'Email'}
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />

    <InputBox
          title={'Password'}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
       <SubmitBtn title={'Login'} getData={getData}/>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal:40,
    marginTop:150,
  },
  text: {
    fontSize: 30,
    marginVertical: 60,
  },
  pageTitle:{
    fontSize:30,
    color:'#38bdf8',
    textAlign:'center',
    marginHorizontal:20,
    marginVertical:20,
    fontWeight:'600'
  }
});

export default Login;
