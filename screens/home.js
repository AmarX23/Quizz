import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/title.js'

const Home = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <Title />
      <View style={styles.bc}>
        <Image source={{uri: 'https://media.istockphoto.com/id/991749592/vector/quiz-show-tv-studio-with-host-and-contestants-screen-stands-and-lights-colorful-flat-vector.jpg?s=170667a&w=0&k=20&c=O4CQoamIbiNPfoX6NEKTaNB7ZcdC4FbzS_OUP9ToL70='}}
        style={styles.banner}
        resizeMode="contain"/>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style={styles.bt}>
        <Text style={styles.txt}>Start</Text>
      </TouchableOpacity>  
    </View>
  );
};

export default Home

const styles = StyleSheet.create({
    banner:{
        width: 400,
        height: 500,
        borderRadius: 5,
    },
    bc:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    txt:{
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cont:{
        padding: 20,
        height: '100%',
        backgroundColor: 'white',
    },
    bt:{
        backgroundColor: '#1A759F',
        padding: 10,
        borderRadius: 15,
        marginTop: 10,
        width: '108%',
        alignSelf: 'center',
    }
})