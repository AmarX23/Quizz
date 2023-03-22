import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Result = ({navigation,route}) => {
  const {score} = route.params;
  const resultBanner=score>3?"https://img.freepik.com/premium-vector/business-man-with-light-bulb-creative-idea-innovation-technology-genius-solutions-clap-hands-applause-good-opinion-positive-feedback-congratulate-with-successful-deal_284092-606.jpg" : "https://st2.depositphotos.com/2704315/10347/v/600/depositphotos_103477310-stock-illustration-never-give-up-vector-flat.jpg"
  return (
    <View style={styles.cont}>
        <View>
            <Text style={styles.txt1}>SCORE</Text>
        </View>
        <View style={styles.scb}>
            <Text style={styles.sc}>{score}</Text>
        </View>
        <View style={styles.bc}>
            <Image
            source={{uri: resultBanner}}
            style={styles.banner}
            resizeMode="contain"/>
        </View>
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.bt}>
                <Text style={styles.txt}>Home</Text>
            </TouchableOpacity> 
        </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    banner:{
        width: 400,
        height: 400,
        borderRadius: 10,
        marginBottom: 5,
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
    txt1:{
        fontSize: 40,
        fontWeight:'900',
        textAlign: 'center',
        color: 'black'
    },
    cont:{
        padding: 20,
        paddingBottom: 20,
        height: '100%',
        backgroundColor: 'white',
    },
    bt:{
        backgroundColor: '#1A759F',
        padding: 10,
        borderRadius: 15,
        width: '108%',
        alignSelf: 'center',
    },
    scb:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 10,
    },
    sc:{
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        borderRadius: 1000,
        backgroundColor: '#1A759F',
        width: 80,
        color: 'white',
    }
})