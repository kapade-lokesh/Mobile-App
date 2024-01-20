import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const InputBox = ({
    title,
    keyboardType,
    autoComplete,
    value,
    setValue,
    secureTextEntry=false
 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput 
       style={styles.input}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text)=>setValue(text)}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    input: {
      backgroundColor: "lightgray",
      borderColor: "gray",
      borderWidth: 1,
      padding: 9,
      borderRadius: 50,
    },
    text: {
      fontSize: 18,
      fontWeight: "400",
      marginVertical: 5,
      marginHorizontal: 20,
    },
  });

export default InputBox