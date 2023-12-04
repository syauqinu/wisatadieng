import React, {useState} from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const Contnumber = () => {
    const [number, setNumber] = useState(0)
    

    return (
        <View>
          <Text>{number}</Text>
          <View>
            <Button title="Ubah Number" onPress={() => setNumber( number + 1 )} />
          </View>
          <View>
            <Button title="Reset" onPress={() => setNumber( 0 )} />
          </View>
        </View>
       )       
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      margin: 10,
    },
    text: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 40,
    }
   })
   
