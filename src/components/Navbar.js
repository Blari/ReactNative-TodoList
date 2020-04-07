import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {THEME} from "../them";
import {AppTextBold} from "./UI/AppTextBold";

export const Navbar = ( {title} ) => {
    return (
        <View style={styles.navbar}>
            <AppTextBold style={styles.text}>{title}</AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "flex-end",
        backgroundColor: THEME.MAIN_COLOR
    },

    text: {
        color: '#fff',
        paddingBottom: 10,
        fontSize: 20
    }
})