import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../../components/Header'

export default function ListScreen() {
  return (
    <SafeAreaView>
     <Header title='LetsChat' isBg={true}></Header>
    </SafeAreaView>
  )
}