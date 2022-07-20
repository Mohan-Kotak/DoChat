import React from 'react';
import {TextInput, StyleSheet, Text} from 'react-native';
import styled from 'styled-components/native';

const InputBox = ({
  placeholderTitle,
  isPassword = false,
  setInputText,
  placeholderColor = 'white',
  backgroundColor = '',
  keyBoardType,
}) => {
  return (
    <>
      <Input
        placeholder={placeholderTitle}
        placeholderTextColor={placeholderColor}
        secureTextEntry={isPassword}
        onChangeText={text => {
          setInputText(`+91 ${text}`);
        }}
        keyboardType={keyBoardType}
      />
    </>
  );
};

const Input = styled.TextInput`
  width: 100%;
  height: 50;
  marginbottom: 20;
  color: white;
  borderbottomcolor: white;
  borderbottomwidth: 0.5;
`;
export default InputBox;
