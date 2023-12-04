import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import {WebView} from 'react-native-webview';
import Callapi from '../Callapi';

const Tab = createBottomTabNavigator();
// const webMap = require('../peta/map.html')

//form input dat gyvx=c 
const forminput = 'https://syauqinu.github.io/pgpbl-12/';

//peta web dari github pages
const webmap = 'https://syauqinu.github.io/pgpbl-12/map.html';

function HomeScreen() {
  return (
    <View >
        <Text style={ styles.title}>WISATA DIENG</Text>
        <Text>Halo, Selamat datang!! Aplikasi ini memuat informasi tentang persebaran lokasi wisata di Dieng, Kabupaten Banajrnegara beserta dengan informasi deskripsi dari objek wisata tersebut.</Text>
        <View style={styles.container}>
            <Text>Stack:</Text>
            <Text>1. React Native</Text>
            <Text>2. HTML</Text>
            <Text>3. LeafletJS</Text>
            <Text>4. Google Sheets</Text>
            <Text>5. App Scripts</Text>
            <Text>6. Font Awesome</Text>
            <Text>7. GitHub</Text>
        </View>
    </View>
  );
}

function MapScreen() {
  return (
    <View>
      <WebView source={webmap}></WebView>
    </View>
  );
}

function AddDataScreen() {
  return(
    <View>
      <WebView source={forminput}></WebView>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}

function MahasiwaScreen() {
  return (
    <View>
      <Getjsonfile />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map-marked-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Data"
          component={AddDataScreen}
          options={{
            tabBarLabel: 'AddData',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map-marked-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  listitems: {
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'stretch',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#fff',
  },
});