import React from "react";
import {StyleSheet,Text} from 'react-native';
import styled from 'styled-components/native';

const Button=({
title,
onClick,
backgroundColor = '#9c2148'
})=>{
    return(
        <>
        <ButtonView
        bgColor={backgroundColor}
         onPress={onClick}>
        <TextView >{title}</TextView>
      </ButtonView>
      </>
    );
   
}
const ButtonView = styled.TouchableOpacity`
backgroundColor: ${({bgColor})=>bgColor};
  height: 40;
  borderRadius: 20;
  justifyContent:center;
  alignItems:center;
  marginTop:20;
  marginBottom:20
`;
const TextView = styled.Text`
  color:white;
  fontWeight : bold;
  fontSize : 18
 
`
export default Button;