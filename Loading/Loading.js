import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Loading() {
    /* jshint ignore: start */
    return <View style={styles.container}>
        <Text style={styles.text}>Getting Weather App</Text>
    </View>
    /* jshint ignore: end */
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fef5a2',
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100, 
    },
    text: {
        fontSize: 30,
        color: "#2c1c30"

    },
});


export default Loading;