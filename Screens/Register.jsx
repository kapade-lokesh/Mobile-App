import { View,Text,StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../Components/InputBox'
import SubmitBtn from '../Components/SubmitBtn';

const Register = ({navigation}) => {

     const [name,setName] = useState('');
     const [email,setEmail] = useState('');
     const [password,setPassword] = useState('');
     const [loading,setLoading] = useState(false); 

     const getData=()=>{
         try {
            if(!name||!email||!password){
                Alert.alert('please fill the field');
                return;
            } else{
                 const data ={
                     name,
                     email,
                     password
                 }
                 console.log('data ==>',data);
            }
         } catch (error) {
            console.log(error)
         }
     }

  return (
    <View>
       <View style={styles.container}>
           <Text style={styles.pageTitle}>Register</Text>
            <InputBox 
              title={'Name'}
              value={name}
              setValue={setName}
            />
             <InputBox 
              title={'Email'}
              keyboardType='email-address'
              autoComplete='email'
              value={email}
              setValue={setEmail}
            />
             <InputBox 
               title={'password'}
               secureTextEntry={true}
               autoComplete='password'
               value={password}
               setValue={setPassword}
            />

            <SubmitBtn title={'Register'} getData={getData}/>

            <Text style={styles.textregi}>Already Customer{"  "}
              <Text style={styles.link} onPress={()=>navigation.navigate('Login')}>Login</Text>
            </Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:40,
        marginTop:150
      },
      pageTitle:{
        fontSize:30,
        color:'#38bdf8',
        textAlign:'center',
        marginHorizontal:20,
        marginVertical:20,
        fontWeight:'600'
      },
       
      link:{
        color:'red',
      },
      
      textregi:{
          textAlign:'center',
          fontSize:16
      }
       
})


export default Register