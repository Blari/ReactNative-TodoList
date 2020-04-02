import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Navbar = ( {title} ) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "flex-end",
        backgroundColor: 'blue'
    },

    text: {
        color: '#fff',
        paddingBottom: 10,
        fontSize: 20
    }
})