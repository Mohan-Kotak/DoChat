import React, {useEffect, useState} from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

import Button from '../../../components/Button';
import InputBox from '../../../components/InputBox';
import Header from '../../../components/Header';
import IMAGES from '../../../assets/images';
import CONSTANTS from '../../../utils/constant';

const LoginScreen = () => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(number);
  }, [number]);

  const OnSubmit = async () => {
    console.log('19', 'data');
    auth()
      .signInWithPhoneNumber(number)
      .then(res => {
        console.log('24', res);
      })
      .catch(e => {
        console.log('27', e);
      });
  };

  return (
    <View>
      <Image source={IMAGES.chatImg} style={styles.imgStyle} color={'black'} />
      <SafeAreaView style={styles.backStyle}>
        <Header isback={false} title={CONSTANTS.Login} />
        <View style={styles.numberStyle}>
          <InputBox
            placeholderTitle={CONSTANTS.Mobile_Number}
            setInputText={setNumber}
            keyBoardType="numeric"
          />
          {/* <InputBox placeholderTitle='OTP'
            setInputText={setPassword}
            isPassword={true} /> */}
          <Button title={CONSTANTS.Login} onClick={OnSubmit} />
          <View style={styles.signUpVIew}>
            <Text style={styles.signUpText}>{CONSTANTS.signUpText}</Text>
            <Text
              onPress={() => console.log('you are signup')}
              style={styles.clickHereStyle}>
              {CONSTANTS.Click_here}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  backStyle: {
    height: '45%',
    width: '100%',
    flexDirection: 'column',
    opacity: 0.7,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    shadowColor: 'white',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 5,
  },
  clickHereStyle: {color: '#9c2148', fontSize: 17, fontWeight: 'bold'},
  signUpText: {color: 'white', textAlign: 'center'},
  signUpVIew: {flexDirection: 'column', alignItems: 'center'},
  numberStyle: {
    width: '90%',
    alignSelf: 'center',
  },
  imgStyle: {height: '100%'},
});
export default LoginScreen;
