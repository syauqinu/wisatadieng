import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';
const Callapi = () => {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbyUP9lWdaxvZoqiqPqCMBuOg9WEB61i9CjUfejTlrrvIiWzBcfr9mDu7zHUi4EdU5n9/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(jsonUrl)
          .then((response) => response.json())
          .then((json) => {
            console.log(json)
            setDataUser(json)
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }
      , []);     

      function refreshPage() {
        fetch(jsonUrl)
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          setDataUser(json)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
       }
       

  return (
    <SafeAreaView>
    {isLoading ? (
      <View>
        <Text>Loading...</Text>
      </View>
    ) : (
      <View>
        <FlatList
         data={dataUser}
         onRefresh={() => { refreshPage() }}
         refreshing={refresh}
         keyExtractor={({ id }, index) => id}
         renderItem={({ item }) => (
          
            <View>
              <Text style={styles.title}>{item.nama}</Text>
            
            <View style={styles.card}>
              <View>
                <Text>Alamat: {item.alamat}</Text>
                <Text>Jam Operasional: {item.operasional}</Text>
                <Text>Nomor Whatsapp: {item.whatsapp}</Text>
                
              </View>
            </View>
            </View>
         )}
        />
      </View>
    )}
  </SafeAreaView>
  
  )
}

export default Callapi

const styles = StyleSheet.create({
  title: {
    paddingVertical: 10,
    backgroundColor: '#89B9AD',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 7,
  },
  avatar: {
    borderRadius: 200,
    width: 10,
    position: 'center',
  },
  cardtitle: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 12,
    paddingRight: 12,
  },
  card: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FCF5ED',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7,
  },
  Image: {
    position: 'relative',
    width: 300,
    height: 100,
    resizeMode: 'stretch',
    
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 7,
    textAlign: 'center',
    // backgroundColor: '#000',
  },
});