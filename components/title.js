import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.tit}>
      <Text style={styles.txt}>Quizz</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    txt:{
        fontSize: 40,
        fontWeight:'900',
        textAlign: 'center',
        // backgroundColor: '#1A759F',
        color: 'black',
    },
})