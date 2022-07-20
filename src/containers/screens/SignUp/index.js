import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import Button from '../../../components/Button';
import InputBox from '../../../components/InputBox';
import React, { useState } from 'react'
import Header from '../../../components/Header';


const SignUp = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const OnSubmit = () => {

  }
  return (
    <View>
      <Image source={require('../../../assets/Image/chatImg.jpeg')}
        style={{ height: '100%', }}

        color={'black'} />
      <SafeAreaView style={styles.backStyle}>
        <Header isBg={true} title='SignUp'/>
        {/* <Text style={{
          color: 'white',
          fontSize: 30,
          textAlign: 'center',
          fontWeight: 'bold',
          margin: 10,
        }}>SignUp</Text> */}
        <View style={{
          width: '90%',
          alignSelf: 'center'
        }}>
          <InputBox placeholderTitle='Name*'
            setInputText={setEmailId} />
          <InputBox placeholderTitle='mobile No.'
            setInputText={setEmailId} />
          <InputBox placeholderTitle='Email Id'
            setInputText={setEmailId} />
          <InputBox placeholderTitle='Password'
            setInputText={setPassword}
            isPassword={true} />
          <InputBox placeholderTitle='Confirm Password'
            setInputText={setPassword}
            isPassword={true} />
          <Button title={'SignUp'}
            onClick={OnSubmit} />
        </View>
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  backStyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    opacity: 0.7,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    shadowColor: 'white',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 5
  },
})
export default SignUp