import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import { useState } from 'react'
import { useEffect } from 'react'

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState()
  const [ques, setQues] = useState(0)
  const [options, setOptions] = useState([])
  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const getQuiz = async () => {
    setIsLoading(true)
    const res= await fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple&encode=url3986')
    const data = await res.json()
    setQuestions(data.results)
    setOptions(generateOptionsAndShuffle(data.results[0]))
    setIsLoading(false)
  }
  useEffect(() => {
    getQuiz()
  },[]);
  const Nextques = () => {
    setQues(ques + 1)
    setOptions(generateOptionsAndShuffle(questions[ques + 1])) 
  }
  // const Prevques = () => {
  //   setQues(ques - 1)
  //   setOptions(generateOptionsAndShuffle(questions[ques - 1])) 
  // }
  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options)
    return options
  }
  const handleSelectedOption = (_option) => {
    if(_option === questions[ques].correct_answer){
      setScore(score + 1)
    }
    if(ques !== 9){
      setQues(ques + 1)
      setOptions(generateOptionsAndShuffle(questions[ques + 1])) 
    }
    else{
      navigation.navigate('Result', {score: score})
    }
  }
  const handleShowResult = () => {
    navigation.navigate('Result', {score: score})
  }
  return (
    <View style={styles.container}>
      {isLoading? <View style={styles.lods}>
        <Text style={styles.lod}>Loading...</Text>
      </View> : questions && 
      <View style={styles.parent}>
      <View style={styles.ques}>
        <Text style={styles.qs}>Q. {decodeURIComponent(questions[ques].question)}</Text>
      </View>
      <View style={styles.opt}>
        <TouchableOpacity style={styles.opbtn} onPress={()=>handleSelectedOption(options[0])}>
            <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opbtn} onPress={()=>handleSelectedOption(options[1])}>
            <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opbtn} onPress={()=>handleSelectedOption(options[2])}>
            <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opbtn} onPress={()=>handleSelectedOption(options[3])}>
            <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btn}>
        {/* {ques !=0 && 
        <TouchableOpacity style={styles.butn} onPress={Prevques}>
          <Text style={styles.btxt}>PREVIOUS</Text>
        </TouchableOpacity>} */}
        {ques !=9 && 
        <TouchableOpacity onPress={handleShowResult} style={styles.butnr}>
          <Text style={styles.btxt}>END</Text>
        </TouchableOpacity>}
        {ques !==9 && 
        <TouchableOpacity style={styles.butn} onPress={Nextques}>
            <Text style={styles.btxt}>SKIP</Text>
        </TouchableOpacity>}
      </View>
      <View style={styles.btnr}>
      {ques == 9 && 
        <TouchableOpacity onPress={handleShowResult} style={styles.butnr}>
          <Text style={styles.btxt}>RESULT</Text>
        </TouchableOpacity>}
      </View>
      </View>}
    </View>
    
  )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        paddingTop: 20,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: 'white',
    },
    ques:{
        marginVertical: 20,
    },
    opt:{
        marginVertical: 20,
        flex: 1,
    },
    btn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    btnr:{
      flexDirection: 'row',
      justifyContent: "flex-end",
      paddingVertical: 5,
  },
    butn:{
        backgroundColor: '#1A759F',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 10,
        width: '25%',
    },
    butnr:{
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 15,
      alignItems: 'center',
      marginBottom: 10,
      width: '25%',
    },
    btxt:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    qs:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    option:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    opbtn:{
        backgroundColor: '#1A759F',
        padding: 15,
        marginVertical: 10,
        borderRadius: 15,
        paddingHorizontal: 20,
    },
    parent: {
      flex: 1,
      height: '100%',
    },
    none:{
      display: 'none',
    },
    lods:{
      justifyContent: "center",
      alignItems: 'center',
      height: '100%',
    },
    lod:{
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      justifyContent: "center",
      alignItems: 'center',
      color: 'black',
    }
})