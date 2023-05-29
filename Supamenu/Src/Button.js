import {View,Text,TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button(btnLabel, Press){
    return(
        <TouchableOpacity style={{
            backgroundColor: 'white',
            borderRadius: 100,
            alignItems: 'center',
            width: 450,
            paddingVertical: 5  
        }}>
            <Text style={{color: 'white', fontSize:22, fontWeight: 'bold'}}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}