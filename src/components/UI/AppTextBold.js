import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const AppTextBold = props =>
    <Text style={{...style.default, ... props.style}}>
        {props.children}
    </Text>


const style = StyleSheet.create({
    default: {
        fontFamily: "robotoBold"
    }
})