import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    const name = 'Gabriel "The_Programmer" Diógenes';

    return (
    <View>
        <Text style={Styles.titleStyle}>Getting started with react native!</Text>
    <Text style={Styles.subHeader}>My name is {name}</Text>
    </View>
    );
};

const Styles = StyleSheet.create({
    titleStyle: {
        fontSize: 45
    },
    subHeader: {
        fontSize: 20
    }
});

export default ComponentScreen;