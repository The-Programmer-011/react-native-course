import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';

const randomRGB = () => {
    const red = (Math.random() * 256);
    const green = (Math.random() * 256);
    const blue = (Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const ColorScreen = () => {

    const [color, setColor] = useState([]);

    return (
        <View>
            <Text>Color Screen</Text>
            <Button
                title={"Add color"}
                onPress={ () => {
                    setColor([...color, randomRGB()]);
                }}
            />
            <FlatList
                keyExtractor={( item ) => item }
                data={color}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item}}/>
                }}
            />  
        </View> 
    );
};

const styles = StyleSheet.create({});

export default ColorScreen;