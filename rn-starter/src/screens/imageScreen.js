import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/imageDetail'

const ImageScreen = () => {
    return(
        <View>
            <ImageDetail title="Forest" score={7} imageSource={require('../../assets/forest.jpg')} />
            <ImageDetail title="Beach" score={9} imageSource={require('../../assets/beach.jpg')} />
            <ImageDetail title="Montain" score={10} imageSource={require('../../assets/mountain.jpg')} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;