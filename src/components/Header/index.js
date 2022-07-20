import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({
    title,
    headerColor,
    isback = true,
    bgColor='#9c2148',
    fontColor='white',
    isBg = false

}) => {
    return (
        <View style={{
            height: 50,
            backgroundColor: isBg? bgColor : null,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom:20
        }}>
            {isback ?
             <TouchableOpacity>
             <Ionicons name='chevron-back' size={30} color={fontColor} />
             </TouchableOpacity>
             :
             null
            }
           
            <Text style={{
                color:fontColor,
                width:isback?'80%':'100%',
                fontSize: 25,
                textAlign: 'center',
                fontWeight: 'bold',
            }}>{title}</Text>
        </View>
    )
}
export default Header;