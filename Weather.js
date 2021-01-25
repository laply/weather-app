import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({temp, condition}) {

    /* jshint ignore: start */
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name="weather-lightning-rainy" size={96} color="black" />
                <Text style={styles.text}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}>

            </View>
        </View>
    );
    /* jshint ignore: end */
}
    
Weather.PropTypes = { 
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "clear", "clouds", "Haze", "Dust", "mist"]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 42,
        color: "#2c1c30"
    },
});
