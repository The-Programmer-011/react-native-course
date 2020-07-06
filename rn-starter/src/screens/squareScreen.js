import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/colorCounter';

const SquareScreen = () => {

    const [color, setColor] = useState([]);

    return (
        <View>
            <Text>Square Screen</Text>
            <ColorCounter color={"Red"} />
            <ColorCounter color={"Green"} />
            <ColorCounter color={"Blue"} />
        </View> 
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;