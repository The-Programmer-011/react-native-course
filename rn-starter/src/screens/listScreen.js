import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: "Senhor Pedro", key: "1" },
        { name: "Letieri", key: "2" },
        { name: "Luiz", key: "3" },
        { name: "Gabo", key: "4" },
        { name: "Lebs", key: "5" },
        { name: "Gustavo", key: "6" },
        { name: "Hanna", key: "7" }
    ];

    const clones = [
        { name: "CT-0001", class: "Soldier" },
        { name: "CT-0002", class: "Heavy" },
        { name: "CT-0003", class: "Cpt" },
        { name: "CT-0004", class: "Commando" },
        { name: "CT-0005", class: "Soldier" },
        { name: "CT-0006", class: "Jet" },
        { name: "CT-0008", class: "Recon" },
        { name: "CT-0009", class: "Pilot" },
        { name: "CT-0010", class: "Marine" },
        { name: "CT-0011", class: "Marine" },
        { name: "CT-0012", class: "Engeneer" },
    ];

    return (
        <View>
        <FlatList 
            data={friends} 
            renderItem={ ( {item} ) => {
                return <Text>{item.name}</Text>
            }}
        />
        <FlatList 
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor = {clones => clones.name }
            data={clones} 
            renderItem={ ( {item} ) => {
                return <Text>{item.name} - Class: {item.class} </Text>
            }}
        />
        </View>
    );
}

const Styles = StyleSheet.create({
    listStyle: {
        marginVertical: 50
    }
});

export default ListScreen;