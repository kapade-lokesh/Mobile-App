import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const SubmitBtn = ({title,getData}) => {
  return (
    <View>
     <TouchableOpacity style={styles.btn} onPress={getData}>
          <Text style={styles.text}>{title}</Text>
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    btn:{
     backgroundColor:'lightskyblue',
     padding:10,
     borderRadius:20,
     marginVertical:10
    },
    text:{
        color:'#000',
        fontWeight:'300',
        fontSize:20,
        textAlign:'center'
    }
})

export default SubmitBtn