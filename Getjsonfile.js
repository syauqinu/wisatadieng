import React from 'react'
import mahasiswa from './mahasiswa.json'
import { View, Text, Flatlist, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome'

const Getjsonfile = () => {
 return (
 <FlatList
 data={mahasiswa}
 renderitem
 renderItem={({ item }) => (
     <View>
       <View>
         <FontAwesome5 nam={item.icon} size={50} color={item.color} />
       </View>
       <View>
         <Text>{item.nama}</Text>
         <Text>{item.nim}</Text>
         <Text>{item.kelas}</Text>
         <Text>{item.jeniskelamin}</Text>
       </View>
     </View>
)}
/>

 )
}

export default Getjsonfile

const styles = StyleSheet.create({
    title: {
      paddingVertical: 12,
      backgroundColor: '#333',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    avatar: {
      borderRadius: 100,
      width: 80,
    },
    cardtitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    card: {
      flexDirection: 'row',
      padding: 20,
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      marginHorizontal: 20,
      marginVertical: 7
    },
   })
   
   